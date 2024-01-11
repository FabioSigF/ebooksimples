import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";
import {
  FaFacebookSquare,
  FaFile,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type MetricaItem = {
  Icon: IconType;
  number: number;
  title: string;
};

const Metricas = ({ setSelectedPage }: Props) => {
  const content: Array<MetricaItem> = [
    {
      Icon: FaFile,
      number: 100,
      title: "Total Pages",
    },
    {
      Icon: FaGraduationCap,
      number: 1000,
      title: "Active Readers",
    },
    {
      Icon: FaFacebookSquare,
      number: 1200,
      title: "Facebook Fans",
    },
    {
      Icon: FaUsers,
      number: 1500,
      title: "Subscribers",
    },
  ];

  return (
    <motion.section
      className="bg-primary-100 py-16"
      id={SelectedPage.Metricas}
      onViewportEnter={() => setSelectedPage(SelectedPage.Metricas)}
    >
      <div className="w-5/6 m-auto flex justify-between">
        {content.map((item, index) => (
          <div
            className="flex flex-col gap-4 items-center justify-center text-white"
            key={index}
          >
            <item.Icon  className="text-5xl"/>
            <span className="text-2xl">{item.number}</span>
            <h6 className="text-xl font-bold text-white">{item.title}</h6>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Metricas;
