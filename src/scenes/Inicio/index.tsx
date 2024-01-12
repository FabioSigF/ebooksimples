import ActionButton from "@/components/ActionButton";
import TitleSection from "@/components/TitleSection";
import { SelectedPage } from "@/shared/types";
import HeroBook from "@/images/hero_book.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Inicio = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id={SelectedPage.Inicio}
      className="w-full relative bg-hero pt-10"
      onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
    >
      <div className="bg-transparent bg-gradient-hero opacity-100 absolute top-0 left-0 w-full h-full" />
      <div className="w-5/6 m-auto relative h-full pt-28 flex flex-col items-center gap-10">
        <TitleSection
          header="Wordpress"
          title="Preview your ebook with a stunning theme"
          darkMode={true}
        />
        <ActionButton>Download Now For Free</ActionButton>
        <div className="pt-10">
          <img
            src={HeroBook}
            alt="Book title"
            className="w-[65%] m-auto -mb-[100px] sm:-mb-[150px]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Inicio;
