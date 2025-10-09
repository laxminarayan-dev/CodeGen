"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

function Navbar() {
  const mobileMenuRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  const handleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };
  // Lock scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  return (
    <div className="text-sm text-white w-full">
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">
        <Link
          href="/"
          className="text-3xl font-semibold text-blue-500 font-sans"
        >
          CodeGen
        </Link>
        <NavLinks />

        <button
          aria-label="menu-btn"
          type="button"
          className="inline-block md:hidden active:scale-30 transition"
          onClick={handleSidebar}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>

        <div
          ref={mobileMenuRef}
          className={`absolute z-100 top-[70px] ${
            isSidebarOpen ? "left-0" : "-left-full"
          } w-full bg-slate-200 h-[calc(100dvh-70px)] p-6 flex flex-col md:hidden transition-all duration-200`}
        >
          <NavLinks sidebarLinks={true} />
        </div>
      </nav>
    </div>
  );
}
const NavLinks = ({ sidebarLinks = false }) => {
  return (
    <ul
      className={`${
        sidebarLinks
          ? "flex md:hidden flex-col space-y-6"
          : "hidden md:flex flex-row gap-10"
      }  text-lg font-mono`}
    >
      <li>
        <Link href="converter" className="hover:text-blue-600 hover:border-b-2">
          Converter
        </Link>
      </li>
      <li>
        <Link href="generator" className="hover:text-blue-600 hover:border-b-2">
          Generator
        </Link>
      </li>
      <li>
        <Link href="pricing" className="hover:text-blue-600 hover:border-b-2">
          Pricing
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
