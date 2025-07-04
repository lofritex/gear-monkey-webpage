import GearMonkeyLogo from "@/assets/images/gear-monkey-logo.png";
import Button from "@/components/ui/Button";
export default function Footer() {
  return (
    <div className="flex w-full justify-center px-4">
      <footer className="bg-primary grid w-full max-w-screen-xl grid-cols-2 rounded-3xl text-white">
        <div className="px-20 py-10">
          <h1 className="text-7xl">
            DRIVING SUCCESS,
            <br /> SIDE BY SIDE!
          </h1>
          <img className="pt-5" src={GearMonkeyLogo} alt="Gear monkey logo" />
        </div>
        <div className="flex h-full w-full flex-col items-end justify-end px-20 py-10">
          <h6 className="font-poppins">email@gmail.com</h6>
          <h6>98745 12345</h6>
          <Button label="CONTACT US" className={"mt-5 w-60"} />
        </div>
      </footer>
    </div>
  );
}
