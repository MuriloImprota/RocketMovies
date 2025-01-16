
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.GRAY_300};
margin-bottom: 8px;
border-radius: 10px;

>input{
    padding: 12px;
    height: 56px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
}

>svg{
       margin-left: 16px;
    
    }

`