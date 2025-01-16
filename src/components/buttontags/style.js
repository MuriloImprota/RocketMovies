import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;

background-color: ${({ theme, IsNew }) => IsNew ? "transparent" : theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.GRAY_300};
border:${({ theme, IsNew }) => IsNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

margin-bottom: 20px;
border-radius: 10px;
margin-top: 20px;
margin-left: 15px;



>button{
    border:none;
    background: none;

}

.button-delete{
    color: ${({ theme }) => theme.COLORS.SKIN};
   
    
}

.button-add{
    color: ${({ theme }) => theme.COLORS.SKIN};
    

}

> input{
    height: 56px;
    width: 50%;
    padding: 2px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

}

`