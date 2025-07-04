import Button from "@/components/ui/Button";
import GearMonkeyLogo from "@/assets/images/gear-monkey-logo.png";
import { Link } from "react-router-dom";

const useStyles = () => ({
  button: "min-w-16 sm:w-32 md:w-40 lg:w-60 text-sm md:text-lg",
});

export default function Header() {
  const styles = useStyles();
  return (
    <header className="bg-primary fixed right-4 left-4 z-50 mx-auto mt-4 flex w-auto max-w-screen justify-between rounded-[25px] p-4 md:max-w-screen-xl">
      <img className="max-h-10" src={GearMonkeyLogo} alt="Gear monkey logo" />
      <nav className="flex gap-3">
        <Button label="CONTACT US" className={styles.button} />
        <Link to="https://app.gearmonkey.in/">
          <Button label="LOGIN" className={styles.button} />
        </Link>
      </nav>
    </header>
  );
}
