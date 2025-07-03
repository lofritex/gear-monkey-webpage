import shiftGearImage from "@/assets/images/shift-gear-image.png";

export default function ShiftGearSection() {
  return (
    <section className="grid grid-cols-2 py-20">
      <div className="flex flex-col items-start justify-start gap-8">
        <h2 className="text-primary text-7xl">
          SHIFT GEARS WITH <br /> SMARTER CASH FLOW
        </h2>
        <div className="font-poppins">
          <div className="text-primary flex flex-col gap-6 py-2 text-xl font-light">
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
      <div className="flex items-end justify-end ">
        <img alt=" hello from pic" src={shiftGearImage} className="h-full" />
      </div>
    </section>
  )
}

