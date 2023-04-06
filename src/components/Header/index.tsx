import * as S from "./styles";

import logo from "../../assets/logo.png";

import Image from "next/image";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <Image src={logo} alt="" />
    </S.HeaderContainer>
  );
};
