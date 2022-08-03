import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import colors from "./color";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0px;
    width: 0px;
`

export const StyledLink = styled(Link)`
padding: 10px 15px;
color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
text-decoration;
font-size: 18px;
text-align: center;
${(props) => props.$isFullLink &&
    `color: white;
    border-radius: 30px
    beckground-color: ${colors.primary};`}
`