import TitleSection from "@/components/TitleSection";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Sobre = ({ setSelectedPage }: Props) => {
  return <motion.section id={SelectedPage.Sobre} onViewportEnter={() => setSelectedPage(SelectedPage.Sobre)} className="bg-sobre w-full relative">
    <TitleSection
      header="Wordpress"
      title="Display the best features here"
    />
  </motion.section>;
};

export default Sobre;
