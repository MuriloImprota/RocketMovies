import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    background-color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.BLACK : theme.COLORS.SKIN};
    color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.SKIN : theme.COLORS.DARKBLUE};
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    justify-content: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 100%;
`;

