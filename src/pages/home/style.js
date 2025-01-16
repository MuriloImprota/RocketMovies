import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.span`

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};



>span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1{
        padding-left: 170px;

    }
}

 /* Personalização da barra de rolagem */
  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Ativa o scroll apenas no eixo Y */
    
   

    /* Personalização da barra de rolagem */
    ::-webkit-scrollbar {
      width: 20px; /* Largura da barra de rolagem */
      background-color: #8e44ad; /* Cor do thumb */
    }

    ::-webkit-scrollbar-track {
      background-color: #f1f1f1; /* Cor do trilho */
    }

    ::-webkit-scrollbar-thumb {
     
      border-radius: 10px; /* Arredonda o thumb */
      min-height: 20px; /* Define o comprimento mínimo do thumb */
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #6c3483; /* Cor ao passar o mouse sobre o scroll */
    }
  }

 

`