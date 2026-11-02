import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/lib/data";

// UK .trustbar: charcoal band with four gold numbers that count up on scroll.
export function TrustBar() {
  return (
    <section className="bg-charcoal text-white" aria-label="Our track record">
      <div className="container-x grid grid-cols-2 gap-x-5 gap-y-9 py-12 text-center md:grid-cols-4 md:gap-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="font-display text-[2.3rem] font-bold leading-none text-primary">
              <CountUp value={stat.number} />
            </div>
            <div className="mt-2 text-[0.9rem] tracking-[0.02em] text-white/80">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
