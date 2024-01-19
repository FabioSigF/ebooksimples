import { IconType } from "react-icons";

export enum SelectedPage {
  Inicio = "inicio",
  Sobre = "sobre",
  Metricas = "metricas",
  Testemunhos = "testemunhos",
  Contato = "contato"
}

export interface CardSobreInterface {
  Icon: IconType,
  title: string,
  description: string
}

export type ContatoForm = {
  nome: string;
  email: string;
  texto: string;
} 