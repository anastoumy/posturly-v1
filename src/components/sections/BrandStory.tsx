import Image from "next/image";
import { getProductByHandle } from "@/lib/data/products";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "40K+", label: "Desks improved" },
  { value: "4.7", label: "Average rating" },
  { value: "30", label: "Day guarantee" },
];

export function BrandStory() {
  const cushion = getProductByHandle("lumbar-support-cushion-set")!;

  return (
    <section className="bg-[var(--color-charcoal)] py-[var(--section-padding)] text-[#e9e6de]">
      <div className="mx-auto grid max-w-[var(--content-max)] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-mint)]">
            Our Philosophy
          </p>
          <h2 className="mt-4 font-serif text-display leading-[1.05] text-white">
            The precision of medical design.
            <br />
            The warmth of a wellness ritual.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#c9c6bd]">
            Posturley started with a simple frustration: ergonomic products that
            worked were ugly, and the ones that looked good didn&apos;t work. We
            partner with physiotherapists and product engineers to build gear
            that earns a place on your desk — not just in your body.
          </p>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-[#c9c6bd]">
            Every material, stitch, and strap is chosen for two things only:
            whether it improves how you feel by 5pm, and whether you&apos;d be
            comfortable leaving it out on your desk.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#3a3d38] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-[var(--color-mint)]">{s.value}</p>
                <p className="mt-1 text-xs text-[#a8a49b]">{s.label}</p>
              </div>
            ))}
          </div>

          <Button href="/about" variant="secondary" className="mt-10">
            Read our full story
          </Button>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={100}>
          <Tilt3D intensity={6} className="mx-auto max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.5)]">
              <Image
                src={cushion.images[1].src}
                alt={cushion.images[1].alt}
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/40 via-transparent to-transparent" />
            </div>
          </Tilt3D>
        </Reveal>
      </div>
    </section>
  );
}
