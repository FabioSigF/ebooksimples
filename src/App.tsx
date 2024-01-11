import { useState } from "react";
import Navbar from "./scenes/Navbar";
import { SelectedPage } from "./shared/types";
import Inicio from "./scenes/Inicio";
import Sobre from "./scenes/Sobre";
import Metricas from "./scenes/Metricas";
import Testemunhos from "./scenes/Testemunhos";
import Contato from "./scenes/Contato";
import Footer from "./scenes/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Inicio
  );
  return (
    <div className="app bg-white">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Inicio setSelectedPage={setSelectedPage}/>
      <Sobre setSelectedPage={setSelectedPage} />
      <Metricas setSelectedPage={setSelectedPage} />
      <Testemunhos setSelectedPage={setSelectedPage} />
      <Contato setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default App;
