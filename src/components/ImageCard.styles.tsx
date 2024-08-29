import styled from "styled-components";
import myImage from '../assets/picture.png';
import {theme} from "../styles/theme";

console.log(myImage)

export const ImageCardStyles = styled.div`
  background-image: url(${myImage});
  width: 280px;
  height: 170px;
  margin-bottom: ${theme.gapAfter20};
`