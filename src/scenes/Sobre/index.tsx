import CardSobre from "@/components/CardSobre";
import TitleSection from "@/components/TitleSection";
import { CardSobreInterface, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { FaSlidersH } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Sobre = ({ setSelectedPage }: Props) => {
  const content: Array<CardSobreInterface> = [
    {
      Icon: FaElementor,
      title: "Elementor Page Builder",
      description:
        "The theme pages are built with Elementor free version, making the customization really easy.",
    },
    {
      Icon: FaSlidersH,
      title: "Live Theme Customizer",
      description:
        "Make your customizations in real time preview! Set more than 70+ custom theme options.",
    },
    {
      Icon: FaHandPointer,
      title: "One Click Demo Import",
      description:
        "Get started with importing a complete layout set from our demos, with only one click.",
    },
  ];

  return (
    <motion.section
      id={SelectedPage.Sobre}
      onViewportEnter={() => setSelectedPage(SelectedPage.Sobre)}
      className="bg-sobre bg-no-repeat"
    >
      <div className="w-5/6 m-auto mt-64 relative pb-32">
        <TitleSection
          header="Wordpress"
          title="Display the best features here"
        />
        <div className="mt-16 grid grid-cols-3 gap-8 items-start">
          {content.map((item, index) => (
            <CardSobre
              key={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Sobre;
