import perfil from '../../imagens/perfil.svg' 
import sacola from '../../imagens/sacola.svg' 
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'


const AppHeader = styled.header`
            
                justify-content: center;
                background-color: #FFF;
                display: flex;
            `

        const LogoImg = styled.img`
            width: 45px;
            margin-right: 10px;
        `

        const CabecalhoContainer = styled.div`
            display: flex;
            align-items: center;
            text-align: center;
        `

        const TextoP = styled.p`
            font-size: 24px;
            `
            
        const TextoBolder = styled.p`
           font-size:24px;
           font-weight: bold;
        `

        const Icone = styled.li`
            font-size: 16px;
            display: flex;
            align-items: center;
            text-align: center;
            height: 100%;
            cursor: pointer;
            min-width: 120px;
        `

        const Icones = styled.ul`
            width: 25px;
            display: flex;
            gap: 5px;
        `

        const ItensMenu = styled.ul`
            padding: 0 150px;
            display: flex;
            list-style: none;
            gap: 45px;
        `

const Logo = () => {
        const itensMenu = ["Categorias", "Minha estante", "Favoritos"]
        const icones = [sacola, perfil]

        

    return(
        <AppHeader>
            <CabecalhoContainer>        
                <LogoImg src={logo} alt='Logo Alura Books'/>
                <TextoBolder>Alura</TextoBolder><TextoP>Books</TextoP>

                <ItensMenu>
                    {itensMenu.map((texto) => (
                        <Icone key={texto}>
                            <TextoP>{texto}</TextoP>
                        </Icone>
                     ))}
                </ItensMenu>
                        
                <Icones>
                    {icones.map((icone)=>(
                        <Icone key={icone}>
                            <img src={icone}/>
                        </Icone>
                    ))}
                </Icones>
            </CabecalhoContainer>
        </AppHeader>
    )}

export default Logo






























