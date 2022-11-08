import Cabecalho from '../src/componentes/Cabecalho'
import styled from 'styled-components'

  const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589)
`

function App() {

  return (
      <AppContainer>
        <Cabecalho/>
      </AppContainer>

  )
}

export default App;
