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
    <nav className="fixed top-0 z-30 w-full py-6 bg-black-50">
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
                    <FaFacebookSquare className="text-xl text-white"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaTwitter className="text-xl text-white"/>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <FaInstagram className="text-xl text-white"/>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <HiOutlineMenu className=" text-3xl text-white" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-400 drop-shadow-xl px-8 py-8">
          {/*CLOSE ICON */}
          <div className="flex justify-end">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <HiOutlineX className="text-3xl text-white" />
            </button>
          </div>
          {/*Menu items */}
          <div className="mt-6 flex items-center flex-col gap-10 text-xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className={`${flexBetween}`}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
