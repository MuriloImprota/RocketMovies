

import styled from "styled-components";

export const Container = styled.main`

width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105px auto;
grid-template-areas: "header"
                      "content";

background: ${({ theme }) => theme.COLORS.BACKGROUND_900};



> main{
    grid-area: content;
    overflow-y: auto;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    width: 1137px;
    margin: 38px auto;
    scrollbar-width: thin; /* Para Firefox */
    scrollbar-color: pink darkgray; /* Para Firefox */
    
    /* Para Chrome, Edge, e outros navegadores WebKit */
    ::-webkit-scrollbar {
        width: 8px; /* Largura do scrollbar */
    }
    ::-webkit-scrollbar-thumb {
        background-color: pink; /* Cor do "thumb" (parte que se move) */
        border-radius: 10px; /* Deixa o "thumb" com bordas arredondadas */
    }
    ::-webkit-scrollbar-track {
        background-color: pink; /* Cor de fundo do scrollbar */
        border-radius: 10px;
    }


    > span{
    display: flex;
    align-items: center;
    gap: 19px;
    margin-bottom: 24px;
 }

 >section{
   
    >p{
        
        width: 1113px;
        height: 336px;
        line-height: 21px;
        text-align: justify;

    

    }
    
}

 >div{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;

   p{
    display: flex;
    align-items: center;
    gap: 4px;
    
    >svg{
        color: ${({ theme }) => theme.COLORS.SKIN};
    }


    >img{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 5px;
    }

   }

   
 }

  }                    

 .return{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    gap: 8px;

    >a{
    color: ${({ theme }) => theme.COLORS.SKIN};
    
    
 }
    >svg{
        color: ${({ theme }) => theme.COLORS.SKIN};
    }


 } 

 .tags{
    display: flex;
    align-items: center;
    gap: 8px;

 }



`