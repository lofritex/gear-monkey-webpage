import LogoCard from "@/components/ui/LogoCard";

export default function ServiceProvidersSection() {
  return (
    <section className="background-gradient-primary flex w-full max-w-screen justify-center rounded-b-[50px] py-20 text-white">
      <div className="flex max-w-screen-xl flex-col items-center gap-5">
        <h3 className="py-10 text-center text-7xl lg:py-20">
          OUR SERVICE PROVIDERS
        </h3>
        <div className="grid grid-cols-2 gap-5 px-4 lg:grid-cols-4">
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
    </section>
  );
}
