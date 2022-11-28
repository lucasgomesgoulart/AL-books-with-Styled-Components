import { livros } from './Lancamentos'
import styled from 'styled-components';
import CardRecomendacao from '../CardRecomendacao/Index';
import imagemLivro from '../../imagens/livro2.png'

const ContainerGeral = styled.section`
    flex-direction: row;
    text-align: center;
    background-color: #EBECEE;
    height: 70vh;
`

const Titulo = styled.h2`
    color: ${props=> props.cor || 'black'};
    font-size: 42px;
    padding-top: 15px;

`

const DivTitulo = styled.div`
    background-color: #FFF;
    height: 100px;
`

const ContainerLancamentos = styled.div`
        align-items: center;
        display: flex;
`

const ContainerLivros = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;
    flex-direction: row;
    cursor: pointer;
    margin-top: 25px;
`

const UltimosLancamentos = () => {
    return (
        <ContainerGeral>
            <DivTitulo>
                <Titulo cor="#EB9B00">Ultimos Lançamentos</Titulo>
            </DivTitulo>
            <ContainerLivros>
                {livros.map((livro) => (
                    <ContainerLancamentos>
                        <img src={livro.src} />
                    </ContainerLancamentos>
                ))}
            </ContainerLivros>
            <CardRecomendacao
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='Contruindo uma apliacação completa com Angular'
                imagem= {imagemLivro}
            />
        </ContainerGeral>
    )
}

export default UltimosLancamentos;