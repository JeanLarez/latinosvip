import { useState } from "react";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleClickButtonHamburger = () => {
    setHidden(!hidden);
  };

  return (
    <header className="sticky top-0 z-10 flex items-center font-mont font-bold md:flex md:items-center">
      <a
        href="https://"
        className="relative left-1/2  top-0 z-50 block h-24 w-36 -translate-x-2/4 overflow-hidden whitespace-nowrap bg-[url('src/assets/icon/latinoswhite.svg')] bg-center bg-no-repeat indent-[101%]"
      >
        Home
      </a>
      <input type="checkbox" className="hidden"></input>

      <button
        onClick={handleClickButtonHamburger}
        id="hamburger-button"
        className={
          hidden
            ? "absolute right-5 size-8 cursor-pointer text-3xl md:hidden"
            : "toggle-btn absolute right-5 size-8 cursor-pointer text-3xl md:hidden"
        }
      >
        <div className="h-1 w-8 rounded bg-yellow-500 text-xs transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-amber-500 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-yellow-700 after:transition-all after:duration-500 after:content-['']"></div>
      </button>
      <nav className="fixed inset-x-0 top-0 z-10 hidden space-x-8 bg-white/85 text-sm backdrop-blur-sm md:block ">
        <ul className="mx-auto flex h-20 items-center justify-around text-center">
          <li className="w-40">
            <a href="http://" className="hover:opacity-90">
              NOSOTROS
            </a>
          </li>
          <li className="w-40">
            <a href="http://" className="hover:opacity-90">
              MENUS
            </a>
          </li>
          <li className="ml-32 w-40">
            <a href="http://" className="hover:opacity-90">
              RESERVACIONES
            </a>
          </li>
          <li className="w-40">
            <a href="http://" className="hover:opacity-90">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>

      <section
        id="mobile-menu"
        className={
          hidden
            ? "absolute top-24 hidden w-full bg-white text-black"
            : "absolute top-24 w-full origin-top animate-open-menu bg-white text-sm text-black"
        }
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8 text-center md:hidden"
          aria-label="mobile"
        >
          <ul>
            <li>
              <a
                href="#hero"
                className="w-full py-6 text-center hover:opacity-90"
              >
                NOSOTROS
              </a>
            </li>
            <li>
              <a
                href="#rockets"
                className="w-full py-6 text-center hover:opacity-90"
              >
                MENUS
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="w-full py-6 text-center hover:opacity-90"
              >
                RESERVACIONES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="w-full py-6 text-center hover:opacity-90"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
