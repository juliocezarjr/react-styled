import styled from "styled-components"
import EstiloGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 10px;

`

const ContainerEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <>
      <FundoGradiente>
        <EstiloGlobais />
        <Cabecalho/>
        <ContainerEstilizado>
          <BarraLateral/>
            <Banner backgroundImage='../public/imagens/banner.png' texto='A galeria mais completa de fotos do espaço!'/>
              
        </ContainerEstilizado>
      </FundoGradiente>
    </>
  )
}

export default App
