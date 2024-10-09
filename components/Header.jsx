import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Vishal<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV    */}

        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="tel:+916395458500">
            <Button className="flex items-center gap-2">
              Hire Me <FaPhoneAlt />
            </Button>
          </Link>
        </div>

        {/* mobile nav  */}

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
