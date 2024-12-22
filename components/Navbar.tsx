"use client";
import { HiMenu } from "react-icons/hi";
import { useMenu } from "@/hooks/useMenu";
import MobileMenuOverlay from "./navbar/MobileMenuOverlay";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <nav className="py-5 relative z-50">
      <div className="web-container flex items-center justify-between relative">
        <h3 className="font-normal text-3xl">Beanery.</h3>
        
        <button
          className="lg:hidden text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={toggleMenu}
        >
          <HiMenu />
        </button>

        <MobileMenuOverlay isOpen={isOpen} onClose={closeMenu} />
        <MobileMenu isOpen={isOpen} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;