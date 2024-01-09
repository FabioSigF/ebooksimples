import { useState } from "react";
import Navbar from "./scenes/Navbar";
import { SelectedPage } from "./shared/types";
import Inicio from "./scenes/Inicio";
import Sobre from "./scenes/Sobre";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Inicio
  );
  return (
    <div className="app bg-white">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Inicio setSelectedPage={setSelectedPage}/>
      <Sobre setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
