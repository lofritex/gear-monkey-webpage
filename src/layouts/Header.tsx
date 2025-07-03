import Button from "@/components/ui/Button";
import GearMonkeyLogo from "@/assets/images/gear-monkey-logo.svg";

export default function Header() {
  return (
    <header className="bg-primary fixed z-50 m-4 flex w-full max-w-screen-xl justify-between rounded-[25px] p-4">
      <img className="max-h-10" src={GearMonkeyLogo} alt="Gear monkey logo" />
      <nav className="flex gap-3">
        <Button label="CONTACT US" className={"w-60"} />
        <Button label="LOGIN" className={"w-60"} />
      </nav>
    </header>
  );
}
