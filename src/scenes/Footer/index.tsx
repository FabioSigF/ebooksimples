import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-50 w-full py-8">
      <div className="w-5/6 m-auto flex justify-between">
        <p>2024 &copy; Ebook Landing Page - Fox Developer</p>
        <ul className="flex gap-8 text-xl">
          <li>
            <a href="#!" className="hover:text-white transition">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#!" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
