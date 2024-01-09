import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <p
        className={`${selectedPage === lowerCasePage ? "text-primary-100" : "text-white"}
        transition duration-500 hover:text-primary-100 uppercase font-title
      `}
      >
        {page}
      </p>
    </AnchorLink>
  );
};

export default Link;