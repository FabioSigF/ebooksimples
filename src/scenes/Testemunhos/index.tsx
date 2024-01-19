import TitleSection from "@/components/TitleSection";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import TestemunhosBg from "@/images/testemunhos_bg.png";
import author1 from "@/images/author_1.png";
import author2 from "@/images/author_2.png";
import author3 from "@/images/author_3.png";
import ActionButton from "@/components/ActionButton";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type Testemunho = {
  text: string;
  avatar: string;
  author: string;
  author_job: string;
};

const Testemunhos = ({ setSelectedPage }: Props) => {
  const testemunhos: Array<Testemunho> = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis ullamcoper etiam.",
      avatar: author1,
      author: "Adam Dabbs",
      author_job: "Designer",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis ullamcoper etiam.",
      avatar: author2,
      author: "Adam Dabbs",
      author_job: "Designer",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis ullamcoper etiam.",
      avatar: author3,
      author: "Adam Dabbs",
      author_job: "Designer",
    },
  ];

  return (
    <motion.section
      id={`${SelectedPage.Testemunhos}`}
      onViewportEnter={() => setSelectedPage(SelectedPage.Testemunhos)}
      className="bg-sobre bg-repeat bg-top-center bg-auto py-32 w-full"
    >
      <div className="w-5/6 m-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <TitleSection
            header="Reviews"
            title="Show some quotes from your readers"
          />
        </motion.div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-60-40 pt-20">
          <motion.img
            src={TestemunhosBg}
            alt="testemunhos"
            className="w-full rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          />
          <div className="relative py-16 flex flex-col gap-8 w-full items-end">
            {testemunhos.map((item, index) => (
              <motion.div
                className="bg-white p-12 rounded-md shadow-xl md:w-[100% + 100px] md:-ml-[100px]"
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-xl">{item.text}</p>
                <div
                  className={`flex gap-2 items-center relative pt-6 ${
                    index % 2 != 0 && "justify-end"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="rounded-full w-[55px] h-[55px]"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-lg">{item.author}</p>
                    <span className="text-sm">{item.author_job}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="">
              <ActionButton>Free Ebook Download</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testemunhos;
