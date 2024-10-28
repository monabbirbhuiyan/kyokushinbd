"use client";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="uppercase transition-colors duration-500 cursor-pointer base-bold text-p4 hover:text-p1 max-lg:my-4 max-lg:h5"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full p-4 w-max"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="max-lg:relative max-lg:z-2 max-lg:my-auto"
    >
      <ul className="flex max-lg:block max-lg:px-12">{children}</ul>
    </nav>
  );
};

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }: any) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="uppercase transition-colors duration-500 cursor-pointer base-bold text-p4 hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-300 backdrop-blur-[20px]"
      )}
    >
      <div className="container flex items-center h-14 max-lg:px-5">
        <a className="flex-1 cursor-pointer lg:hidden z-2">
          <Image
            src="/assets/KanjiBack.png"
            width={150}
            height={150}
            alt="Kyokushin Bangladesh"
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <Menu setActive={setActive}>
              <li className="nav-li">
                <MenuItem setActive={setActive} active={null} item="Home" />
                <div className="dot" />
                <MenuItem setActive={setActive} active={active} item="About">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">About Us</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Mission & Vision
                    </HoveredLink>
                    <HoveredLink href="/seo">Board of Advisors</HoveredLink>
                    <HoveredLink href="/branding">
                      Executive Committee
                    </HoveredLink>
                  </div>
                </MenuItem>
                <div className="dot" />
                <MenuItem setActive={setActive} active={active} item="Info">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Addmission</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Class Routine
                    </HoveredLink>
                    <HoveredLink href="/seo">Yearly Schedule</HoveredLink>
                    <HoveredLink href="/branding">Others</HoveredLink>
                  </div>
                </MenuItem>
              </li>
              <li className="nav-logo">
                <LinkScroll
                  to="hero"
                  offset={-250}
                  spy
                  smooth
                  className={clsx(
                    "max-lg:hidden transition-transform duration-500 cursor-pointer"
                  )}
                >
                  <motion.div
                    animate={{ scale: hasScrolled ? 0.5 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/assets/KanjiBack.png"
                      width={250}
                      height={250}
                      alt="Kyokushin Bangladesh"
                    />
                  </motion.div>
                </LinkScroll>
              </li>
              <li className="nav-li">
                <MenuItem setActive={setActive} active={active} item="Events">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Tournaments</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Kyu Belt Test
                    </HoveredLink>
                    <HoveredLink href="/seo">Black Belt Test</HoveredLink>
                    <HoveredLink href="/branding">Camp</HoveredLink>
                  </div>
                </MenuItem>
                <div className="dot" />
                <MenuItem setActive={setActive} active={active} item="Branches">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Gulshan Branch</HoveredLink>
                    <HoveredLink href="/interface-design">
                      Haluaghat Branch
                    </HoveredLink>
                    <HoveredLink href="/seo">Uttara Branch</HoveredLink>
                    <HoveredLink href="/branding">
                      Mohakhali DOHS Branch
                    </HoveredLink>
                    <HoveredLink href="/branding">
                      Chittagong Branch
                    </HoveredLink>
                  </div>
                </MenuItem>
                <div className="dot" />
                <div className="cursor-pointer max-lg:my-4 max-lg:h5">
                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-800 to-gray-200" />
                    <div className="px-5 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:text-black hover:bg-transparent base-bold">
                      Contact
                    </div>
                  </button>
                </div>
              </li>
            </Menu>
          </div>
        </div>

        <button
          className="flex items-center justify-center border-2 rounded-full lg:hidden z-2 size-10 border-s4/25"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/assets/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="object-contain size-1/2"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
