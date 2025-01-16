import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
grid-area: header;
height: 105px;
width: 100%;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
display: flex;
align-items: center;
justify-content: space-between;
gap: 64px;
padding-left: 120px;
padding-right: 100px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};



>h1 {
color: ${({ theme }) => theme.COLORS.SKIN};
}
`

export const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 9px;

>div{
    display: flex;
    flex-direction: column;
    width: 100px;
    


    > h3{
    font-size: 14px;
    font-weight: bold;
  
}

>  p{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-left: 70px;
    }

}  


`
export const Profile = styled(Link)`
    >img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
}

`