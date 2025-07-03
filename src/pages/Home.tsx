import PartnersSection from "@/components/home/PartnersSection";
import ServiceProvidersSection from "@/components/home/ServiceProvidersSection";
import ShiftGearSection from "@/components/home/ShiftGearSection";
import SmartSolutionsSection from "@/components/home/SmartSolutionsSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-2">
        <section className="h-section flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-9xl">IGNITE</h1>
          <h2 className="text-5xl">SMARTER FINANCE SMOOTHER OPERATIONS</h2>
        </section>
        <ShiftGearSection />
        <StatsSection />
        <SmartSolutionsSection />
      </div>
      <ServiceProvidersSection />
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-2">
        <PartnersSection />
      </div>
    </>
  );
}
