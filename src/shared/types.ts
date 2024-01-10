import { IconType } from "react-icons";

export enum SelectedPage {
  Inicio = "inicio",
  Sobre = "sobre",
  Testemunhos = "testemunhos",
  Contato = "contato"
}

export interface CardSobreInterface {
  Icon: IconType,
  title: string,
  description: string
}