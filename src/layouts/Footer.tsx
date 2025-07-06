import GearMonkeyLogo from "@/assets/images/gear-monkey-logo.png";
import Button from "@/components/ui/Button";
export default function Footer() {
  return (
    <div className="flex w-full justify-center px-4">
      <footer className="bg-primary flex w-full max-w-screen-xl flex-col items-center rounded-3xl text-white lg:grid lg:grid-cols-2">
        <div className="w-full p-4 lg:px-20 lg:py-10">
          <h1 className="w-full text-left text-4xl lg:text-7xl">
            DRIVING SUCCESS,
            <br /> SIDE BY SIDE!
          </h1>
          <img
            className="hidden lg:block lg:pt-5"
            src={GearMonkeyLogo}
            alt="Gear monkey logo"
          />
        </div>
        <div className="flex h-full items-end gap-3 pb-5">
          <img
            className="mb-4 max-h-10 lg:hidden"
            src={GearMonkeyLogo}
            alt="Gear monkey logo"
          />
          <div className="flex h-full w-full flex-col items-end justify-end py-4 lg:px-20 lg:py-10">
            <h6 className="font-poppins">support@gearmonkey.in</h6>
            <h6>98745 12345</h6>
            <Button label="CONTACT US" className={"mt-5 w-30 lg:w-60"} />
          </div>
        </div>
      </footer>
    </div>
  );
}
