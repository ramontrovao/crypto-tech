import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme: { COLORS } }) => COLORS.BACKGROUND};
`;
