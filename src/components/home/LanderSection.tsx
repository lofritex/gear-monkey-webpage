import LanderCar from "@/assets/images/lander-car.png";

export default function LanderSection() {
  return (
    <section className="h-section flex w-full flex-col items-center justify-center gap-5">
      <div className="flex justify-center gap-1 text-9xl lg:text-[230px]">
        <h1>IGN</h1>
        <img src={LanderCar} className="h-[128px] lg:h-full" />
        <h1>ITE</h1>
      </div>
      <div className="bg-primary my-10 w-1/2 self-center p-1 lg:my-20"></div>
      <div className="text-primary flex w-full flex-col items-center justify-center text-center text-5xl lg:flex-row lg:justify-between lg:text-7xl">
        <h2 className="">SMARTER FINANCE</h2>
        <h2 className="">SMOOTHER OPERATIONS</h2>
      </div>
    </section>
  );
}
