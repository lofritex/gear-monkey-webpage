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

      <div className="bg-primary mt-40 mb-20 flex flex-col items-center justify-between gap-5 rounded-4xl px-10 py-20 text-center text-white md:flex-row md:text-left lg:rounded-[150px]">
        <img src={GearMonkeySymbol} alt="" className="px-20" />
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h3 className="text-5xl lg:text-7xl">GEAR UP NOW</h3>
          <p className="font-poppins max-w-[600px]">
            Questions about growing your business? GearMonkey's smart financial
            tools are here to help—cash flow, operations, and more.
          </p>
          <Button label="ONBOARD NOW" className={"w-60"} />
        </div>
      </div>
    </section>
  );
}
