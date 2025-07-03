import LogoCard from "@/components/ui/LogoCard";
import GearMonkeySymbol from "@/assets/images/gear-monkey-symbol.svg";

export default function PartnersSection() {
  return (
    <section className="text-primary py-20">
      <div className="flex max-w-screen-xl flex-col items-center gap-5">
        <h3 className="py-20 text-7xl">OUR PARTNERS </h3>
        <div className="flex gap-5">
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
        </div>
        <div className="flex gap-5">
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
        </div>
      </div>

      <div className="bg-primary mt-40 mb-20 flex items-center justify-between rounded-[150px] px-10 py-20 text-white">
        <img src={GearMonkeySymbol} alt="" className="px-20" />
        <div className="flex flex-col items-start">
          <h3 className="text-7xl">GEAR UP NOW</h3>
          <p className="font-poppins max-w-[600px]">
            Questions about growing your business? GearMonkey’s smart financial
            tools are here to help—cash flow, operations, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
