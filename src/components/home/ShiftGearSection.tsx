import shiftGearImage from "@/assets/images/shift-gear-image.png";

export default function ShiftGearSection() {
  return (
    <section className="grid grid-cols-1 gap-10 py-20 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-8 md:items-start md:justify-start">
        <h2 className="text-primary text-center text-5xl md:text-left md:text-7xl">
          SHIFT GEARS WITH <br /> SMARTER CASH FLOW
        </h2>
        <div className="font-poppins">
          <div className="text-primary text-md flex flex-col gap-6 px-4 py-2 text-center font-light md:text-left lg:px-0 lg:text-xl">
            <p>
              Garages, car owners, and insurers face delays, cash flow issues,
              and complex claim processes. Gear Monkey is here to change that.
            </p>
            <p>
              A brand by Easy Tiger Technologies, we deliver smart fintech
              solutions that simplify repairs, boost liquidity, and fast-track
              insurance claims for all.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <img alt=" hello from pic" src={shiftGearImage} className="h-full" />
      </div>
    </section>
  );
}
