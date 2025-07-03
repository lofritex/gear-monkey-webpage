import LogoCard from "@/components/ui/LogoCard";

export default function ServiceProvidersSection() {
  return (
    <section className="background-gradient-primary flex justify-center rounded-b-[50px] py-20 text-white">
      <div className="flex max-w-screen-xl flex-col items-center gap-5">
        <h3 className="py-20 text-7xl">OUR SERVICE PROVIDERS</h3>
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
    </section>
  );
}
