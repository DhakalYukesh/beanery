import { NavLinkData } from "@/lib/constant/data";
import NavLink from "./NavLink";
import PrimaryButton from "../generic/PrimaryButton";
import SecondaryButton from "../generic/SecondaryButton";
import { HiX } from "react-icons/hi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`
      flex flex-col lg:flex-row items-center gap-8 lg:gap-5 text-sm
      fixed lg:static top-0 right-0 h-full lg:h-auto w-[300px] lg:w-auto
      bg-white lg:bg-transparent py-20 px-6 lg:p-0
      transform transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none
      ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
    `}>
      {/* Close button for mobile */}
      <button
        className="absolute top-5 right-5 p-2 text-2xl hover:bg-gray-100 rounded-full lg:hidden"
        onClick={onClose}
      >
        <HiX />
      </button>

      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-5 w-full lg:w-auto">
        {NavLinkData.map((navLink) => (
          <li key={navLink.href} className="w-full lg:w-auto">
            <NavLink href={navLink.href} onClick={onClose}>
              {navLink.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-5 w-full lg:w-auto mt-auto lg:mt-0">
        <PrimaryButton href="/order" className="w-full lg:w-auto" onClick={onClose}>
          Order
        </PrimaryButton>
        <SecondaryButton href="/sign-in" className="w-full lg:w-auto" onClick={onClose}>
          Sign In
        </SecondaryButton>
      </div>
    </div>
  );
};

export default MobileMenu;
