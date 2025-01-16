
import styled from "styled-components";
import background from "../../assets/Background.svg";


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
background: ${({ theme }) => theme.COLORS.BLACK};


`

export const Form = styled.form`
padding: 0 136px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

>h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.SKIN};
}

>h2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 24px;
    margin-right: 130px;
    
}

> p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 500;
    margin-right: 30px;

}

> a{
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.SKIN};
    display: flex;
    align-items: center;
    gap: 5px;
}


`

export const Background = styled.div`
flex: 1;
background: url(${background}) no-repeat center;
background-size: cover;
`