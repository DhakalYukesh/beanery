import { NavLinkData } from "@/lib/constant/data";
import PrimaryButton from "./generic/PrimaryButton";
import SecondaryButton from "./generic/SecondaryButton";
import NavLink from "./navbar/NavLink";

const Navbar = () => {
  return (
    <nav className="py-5">
      <div className="web-container flex items-center justify-between">
        <h3 className="font-normal text-3xl text-bear">Beanery.</h3>
        <div className="flex items-center gap-5 text-sm">
          <ul className="flex items-center gap-5">
            {NavLinkData.map((navLink) => (
              <li key={navLink.href}>
                <NavLink href={navLink.href}>{navLink.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 transition-colors ease-in-out">
            <PrimaryButton href="/order">Order</PrimaryButton>
            <SecondaryButton href="/sign-in">Sign In</SecondaryButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;