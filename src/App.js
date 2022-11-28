import Cabecalho from '../src/componentes/Cabecalho'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa/Index';
import UltimosLancamentos from './componentes/UltimosLancamentos';

  const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589)
`

function App() {

  return (
      <AppContainer>
        <Cabecalho/>
        <Pesquisa/>
        <UltimosLancamentos/>
      </AppContainer>

  )
}

export default App;
