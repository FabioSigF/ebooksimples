import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  title: string;
  description: string;
};

const CardSobre = ({ Icon, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="bg-primary-100 rounded-md p-4 transition duration-300 hover:rotate-6 hover:scale-110">{<Icon className="text-white text-2xl"/>}</div>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

export default CardSobre;
