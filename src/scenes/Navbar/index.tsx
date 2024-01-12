import useMediaQuery from "@/hooks/useMediaQuery";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import Logo from "@/components/Logo";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-30 w-full bg-black-50 h-[80px] flex items-center">
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <Logo />

          {isAboveMediumScreens ? (
            <div className={`${flexBetween} gap-8 w-2/3`}>
              <ul className={`${flexBetween} gap-8 text-sm`}>
                <li>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Sobre"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Testemunhos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Contato"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
              </ul>
              <ul className={`${flexBetween} gap-8`}>
                <li>
                  <a href="#!">
                    <FaFacebookSquare className="text-xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaTwitter className="text-xl text-white" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaInstagram className="text-xl text-white" />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className="text-3xl text-white"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? (
                <HiOutlineX/>
              ) : (
                <HiOutlineMenu/>
              )}
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && (
        <div className={`fixed top-[80px] right-0 bottom-0 z-40 h-full w-[300px] bg-black-50 drop-shadow-xl px-8 py-8 ${isMenuToggled ? "translate-x-0" : "translate-x-[400px]"} transition-all`}>
          {/*Menu items */}
          <ul className={`mt-6 flex items-center flex-col gap-10 text-xl`}>
                <li>
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Sobre"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Testemunhos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
                <li>
                  <Link
                    page="Contato"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
              </ul>
          <div className={`${flexBetween}`}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
