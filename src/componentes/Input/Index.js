import styled from "styled-components";



const InputStyled = styled.input`
        order: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        padding: 20px 140px;
        border-radius: 50px;
        width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;
        
        ::first-letter{
                text-transform: uppercase;
        }

        &::placeholder {
                color: #FFF;
                font-size: 16px;
        }
`

export default InputStyled