import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Cabecalho from "../src/components/cabecalho/cabecalho";
import Lista from "../src/components/lista/lista";
import lista from "../src/components/lista/lista";


const Home: NextPage = () => {
  const professores: Professor[] = [

    {
      id: 1,
      nome: "Vitor Moura",
      foto: "https://github.com/v1tormoura.png",
      descricao: "Desenvolvedor Full-Stack",
      valor_hora: 500
    },

    {
      id: 2,
      nome: "Artur Fabio",
      foto: "https://github.com/v1tormoura.png",
      descricao: "Desenvolvedor Front-End",
      valor_hora: 85
    },

    {
      id: 3,
      nome: "Mayk Brito",
      foto: "https://github.com/maykbrito.png",
      descricao: "Desenvolvedor Back-end",
      valor_hora: 300
    },

    {
      id: 4,
      nome: "Fabio Artur Ramos",
      foto: "https://github.com/fabioar.png",
      descricao: "Desenvolvedor Pleno",
      valor_hora: 400
    },

  ]

  return (
      <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
      </Box>
    )
};

export default Home;
