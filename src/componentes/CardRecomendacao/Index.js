import React from "react";
import styled from "styled-components";

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 62.5rem;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
    margin-top: 50px;
    
`
const Botao = styled.button`
    font-weight: 800;
    width: 150px;
    height: 35px;
    border: none;
    color: #FFF;
    background-color: #EB9B00;
    border-radius: 5px;
    display: block;
    &:hover{
        cursor: pointer;
        background-color: #ffd78a;
    }
`
const Titulo = styled.h3`
    font-size: 28px;
    color: #EB9B00;
    font-weight: 600;
    
`
const SubTitulo = styled.h4`
    font-size: 18px;
    
`
const CardRecomendacao = (props) => {
    return (
        <Card>
            <div>
                <Titulo>{props.titulo}</Titulo>
                <SubTitulo>{props.subtitulo}</SubTitulo>
                <p>{props.descricao}</p>
            </div>
            <div>
                <img src={props.imagem} />
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomendacao;