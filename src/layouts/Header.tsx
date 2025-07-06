import Button from "@/components/ui/Button";
import GearMonkeyLogo from "@/assets/images/gear-monkey-logo.png";
import { Link, useLocation } from "react-router-dom";

const useStyles = () => ({
  button: "min-w-16 sm:w-32 md:w-40 lg:w-60 text-sm md:text-lg",
});

export default function Header() {
  const location = useLocation();
  const styles = useStyles();
  const buttonVariant =
    location.pathname === "/contact" ? "secondary" : "primary";

  return (
    <header
      className={`${location.pathname === "/contact" ? "bg-white" : "bg-primary"} fixed right-4 left-4 z-50 mx-auto mt-4 flex w-auto max-w-screen items-center justify-between rounded-[25px] p-4 md:max-w-screen-xl`}
    >
      <Link to="/" className="bg-primary rounded-4xl px-2">
        <img
          src={GearMonkeyLogo}
          alt="Gear monkey logo"
          className="my-1 max-h-6 lg:my-2 lg:max-h-8"
        />
      </Link>
      <nav className="flex gap-3">
        <Link to="/contact">
          <Button
            variant={buttonVariant}
            label="CONTACT US"
            className={styles.button}
          />
        </Link>
        <Link to="https://app.gearmonkey.in/">
          <Button
            variant={buttonVariant}
            label="LOGIN"
            className={styles.button}
          />
        </Link>
      </nav>
    </header>
  );
}
