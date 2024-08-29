import styled from "styled-components";
import {theme} from "../styles/theme";

type ButtonStylesTypeProps = {
    primary?: boolean
    secondary?: boolean
}

export const ButtonStyles = styled.button<ButtonStylesTypeProps>`
  border-style: solid;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border-color: ${theme.colors.primary};
  color: ${props => props.primary ? theme.colors.secondary: theme.colors.primary};
  background-color: ${props => props.primary ? theme.colors.primary : theme.colors.secondary};
  
  &:hover {
    cursor: pointer;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.hover};
    border-color: ${theme.colors.hover};
  }
`