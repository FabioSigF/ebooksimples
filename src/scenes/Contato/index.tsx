import { SelectedPage, ContatoForm } from "@/shared/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaMailBulk } from "react-icons/fa";
import { ZodType, z } from "zod";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contato = ({ setSelectedPage }: Props) => {
  const schema: ZodType<ContatoForm> = z.object({
    nome: z.string().min(2).max(30),
    email: z.string().email(),
    texto: z.string().min(10).max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContatoForm>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: ContatoForm) => {
    console.log("Contato enviado.", data);
  };

  //styles
  const errorSpan: string = "text-red-200 font-bold";

  return (
    <motion.section
      id={SelectedPage.Contato}
      onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}
      className="bg-primary-100 py-32 w-full"
    >
      <div className="w-5/6 m-auto flex flex-col-reverse md:flex-row gap-16 items-center">
        <motion.form
          className="flex flex-col gap-4 md:w-1/2"
          onSubmit={handleSubmit(submitData)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <input
            {...register("nome")}
            type="text"
            placeholder="Name"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full"
          />
          {errors.nome && (
            <span className={`${errorSpan}`}>{errors.nome.message}</span>
          )}
          <input
            {...register("email")}
            type="text"
            placeholder="E-mail"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full"
          />
          {errors.email && (
            <span className={`${errorSpan}`}>{errors.email.message}</span>
          )}
          <textarea
            {...register("texto")}
            placeholder="Your message"
            className="rounded-md py-3 px-5 text-black-50 border-gray-400 border-[1px] w-full h-[180px]"
          />
          {errors.texto && (
            <span className={`${errorSpan}`}>{errors.texto.message}</span>
          )}
          <button
            type="submit"
            className="text-white transition-all rounded-md py-5 px-10 font-title font-bold text-lg bg-primary-100 border-white border-[1px] hover:bg-primary-200"
          >
            Subscribe & Download
          </button>
        </motion.form>
        <motion.div
          className="flex items-center flex-col gap-8 md:items-start md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contato;
