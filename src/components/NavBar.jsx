import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Me", href: "#aboutme" },
  { name: "Services", href: "#service" },
  { name: "Contact Me", href: "#contact" },
  { name: "Projects", href: "#projects" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true);

  // Toggle navigation
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowNav(window.scrollY < scrollPosition || window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <nav
        className={`fixed w-full z-10 left-0 flex items-center lg:justify-evenly justify-around  text-white p-3 bg-black transition-transform duration-300 ${
          showNav || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex lg:basis-1/2 lg:justify-center">
          <span className="text-2xl font-semibold">BIRAT ADHIKARI</span>
        </div>

        <div className="basis-1/2 lg:flex hidden justify-evenly">
          {navLinks.map((nav, id) => (
            <a href={nav.href} key={id}>{nav.name}</a>
          ))}
        </div>

        <button
          className="lg:hidden flex  justify-end h-full z-50"
          onClick={toggle}
        >
          {!isOpen ? (
            <GiHamburgerMenu className="text-2xl" />
          ) : (
            <IoClose className="text-2xl" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed  inset-0 top-14 h-52 flex flex-col gap-4 p-2 text-white bg-slate-900 w-full z-50 lg:hidden">
          {navLinks.map((nav, id) => (
            <a className="text-white" href={nav.href} key={id}>{nav.name}</a>

          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
