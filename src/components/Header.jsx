import styled from "styled-components";
import { Login } from "./Login";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 4vmin, 2rem);
  margin-bottom: 1rem;
  height: 4rem;
  box-shadow: 0 0 1rem rgba(0,0,0,.2);
  background: #333;
  color: #fff;
`;

const BrandName = styled.h2`
  font-size: clamp(1rem, 2.5vmin, 2rem);
`

export const Header = ({brandName}) => {
  return (
    <StyledHeader>
      <BrandName>{brandName}</BrandName>
      <Login />
    </StyledHeader>
  )
}