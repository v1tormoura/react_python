import { CabecalhoContainer, Logo } from "./Cabecalho.style";


const Cabecalho = () => {
  return (
      <CabecalhoContainer>
        <div>
          <Logo src="/img/myteacher.png"/>
        </div>
        <p>Encontre o Professor perfeito!</p>
      </CabecalhoContainer>
  )
};

export default Cabecalho;
