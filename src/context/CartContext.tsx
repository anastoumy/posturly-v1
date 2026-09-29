"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import type { CartLine } from "@/lib/types";
import { useToast } from "@/context/ToastContext";

const CART_STORAGE_KEY = "posturley_cart_v1";

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
}

type CartAction =
  | { type: "HYDRATE"; lines: CartLine[] }
  | { type: "ADD_LINE"; line: CartLine }
  | { type: "UPDATE_QTY"; lineId: string; quantity: number }
  | { type: "REMOVE_LINE"; lineId: string }
  | { type: "SET_OPEN"; open: boolean }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, lines: action.lines };
    case "ADD_LINE": {
      const existing = state.lines.find(
        (l) => l.variantId === action.line.variantId,
      );
      if (existing) {
        return {
          ...state,
          lines: state.lines.map((l) =>
            l.variantId === action.line.variantId
              ? { ...l, quantity: l.quantity + action.line.quantity }
              : l,
          ),
        };
      }
      return { ...state, lines: [...state.lines, action.line] };
    }
    case "UPDATE_QTY":
      return {
        ...state,
        lines: state.lines
          .map((l) =>
            l.lineId === action.lineId ? { ...l, quantity: action.quantity } : l,
          )
          .filter((l) => l.quantity > 0),
      };
    case "REMOVE_LINE":
      return { ...state, lines: state.lines.filter((l) => l.lineId !== action.lineId) };
    case "SET_OPEN":
      return { ...state, isOpen: action.open };
    case "CLEAR":
      return { ...state, lines: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (line: Omit<CartLine, "lineId">) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [], isOpen: false });
  const { showToast } = useToast();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        dispatch({ type: "HYDRATE", lines: JSON.parse(stored) });
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      // ignore write failures (e.g. private mode)
    }
  }, [state.lines]);

  const addItem = useCallback(
    (line: Omit<CartLine, "lineId">) => {
      const lineId = `${line.variantId}`;
      dispatch({ type: "ADD_LINE", line: { ...line, lineId } });
      dispatch({ type: "SET_OPEN", open: true });
      showToast("Added to your bag", `${line.title} — ${line.variantTitle}`);
    },
    [showToast],
  );

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", lineId, quantity });
  }, []);

  const removeItem = useCallback((lineId: string) => {
    dispatch({ type: "REMOVE_LINE", lineId });
  }, []);

  const openCart = useCallback(() => dispatch({ type: "SET_OPEN", open: true }), []);
  const closeCart = useCallback(() => dispatch({ type: "SET_OPEN", open: false }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const itemCount = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.quantity, 0),
    [state.lines],
  );
  const subtotal = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    [state.lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines: state.lines,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      clearCart,
    }),
    [state.lines, state.isOpen, itemCount, subtotal, addItem, updateQuantity, removeItem, openCart, closeCart, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
