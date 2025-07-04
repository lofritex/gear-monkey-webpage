import LanderSection from "@/components/home/LanderSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServiceProvidersSection from "@/components/home/ServiceProvidersSection";
import ShiftGearSection from "@/components/home/ShiftGearSection";
import SmartSolutionsSection from "@/components/home/SmartSolutionsSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4">
        <LanderSection />
        <ShiftGearSection />
        <StatsSection />
        <SmartSolutionsSection />
      </div>
      <ServiceProvidersSection />
      <div className="mx-auto flex max-w-screen-xl flex-col items-center px-4">
        <PartnersSection />
      </div>
    </>
  );
}
