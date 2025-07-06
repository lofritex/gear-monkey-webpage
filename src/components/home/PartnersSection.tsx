import LogoCard from "@/components/ui/LogoCard";
import GearMonkeySymbol from "@/assets/images/gear-monkey-symbol.svg";
import Button from "@/components/ui/Button";

export default function PartnersSection() {
  return (
    <section className="text-primary py-20">
      <div className="flex max-w-screen-xl flex-col items-center gap-5">
        <h3 className="py-20 text-7xl">OUR PARTNERS </h3>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
          <LogoCard />
        </div>
      </div>

      <div className="bg-primary mt-20 mb-10 flex flex-col items-center justify-between gap-5 rounded-[75px] px-10 py-8 text-center text-white md:flex-row md:text-left lg:mt-40 lg:mb-20 lg:rounded-[150px] lg:py-20">
        <img src={GearMonkeySymbol} className="max-h-10 px-20 lg:max-h-full" />
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h3 className="text-3xl lg:text-7xl">GEAR UP NOW</h3>
          <p className="font-poppins max-w-[600px] text-sm lg:text-lg">
            Questions about growing your business? GearMonkey's smart financial
            tools are here to help—cash flow, operations, and more.
          </p>
          <Button label="ONBOARD NOW" className={"w-60"} />
        </div>
      </div>
    </section>
  );
}
