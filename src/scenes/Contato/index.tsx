import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { FaMailBulk } from "react-icons/fa";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contato = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      id={SelectedPage.Contato}
      onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}
      className="bg-primary-100 py-32 w-full"
    >
      <div className="w-5/6 m-auto flex flex-col-reverse md:flex-row gap-16 items-center">
        <form className="flex flex-col gap-4 md:w-1/2">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full"
          />
          <textarea
            placeholder="Your message"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full h-[180px]"
          />
          <button className="text-white transition-all rounded-md py-5 px-10 font-title font-bold text-lg bg-primary-100 border-white border-[1px] hover:bg-primary-200">
            Subscribe & Download
          </button>
        </form>
        <div className="flex items-center flex-col gap-8 md:items-start md:w-1/2">
          <div className="text-white text-6xl">
            <FaMailBulk />
          </div>
          <h3 className="text-white font-bold text-4xl text-center md:text-start md:text-6xl">
            Let's subscribe to download the free ebook
          </h3>
          <p className="text-gray-200 text-[18px]">
            This is a Contact Form 7 form in an Elementor shortcode widget. Use
            this to collect data from your clients, and engage them until they
            make conversion. Get ready!
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contato;
