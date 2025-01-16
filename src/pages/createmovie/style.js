import styled from "styled-components";

export const Container = styled.div`
background: ${({theme})=> theme.COLORS.BACKGROUND_900};
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 105px auto;
grid-template-areas: "header"
                      "content";





> main{
    grid-area: content;
    overflow-y: auto;
    background: ${({theme})=> theme.COLORS.BACKGROUND_900};
  }                    


`

export const Form = styled.form`

width: 1137px;
height: 783px;
margin: 38px auto;

>span{
    display: flex;
    flex-direction: column;
    
    

    >h1{
        margin-top: 24px;
    }

    >a{
        color: ${({ theme }) => theme.COLORS.SKIN};
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
}


>div {  /* Aplica os estilos de div apenas para as divs que não são 'buttons' */
    display: flex;
    align-items: center;
    gap: 40px;
    width: 1000px;
    height: 55px;
    margin-top: 40px;
    margin-bottom: 40px;
    
}

.tags{
    display: flex;
    gap: 24px;
    background: ${({theme})=> theme.COLORS.BLACK};
    height: 88px;
    flex-wrap: wrap;
    margin-right: 140px;
}   


`