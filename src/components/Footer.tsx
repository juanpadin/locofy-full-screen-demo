import { FunctionComponent } from "react";
import Footer1 from "./Footer1";
import styled from "styled-components";

export type FooterType = {
  className?: string;

  /** Variant props */
  property1?: "Default";
};

const FooterRoot = styled.footer`
  width: 1440px;
  height: 272px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  box-sizing: border-box;
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--dark-blue);
  font-family: var(--tab);
`;

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <FooterRoot data-property1={property1} className={className}>
      <Footer1 />
    </FooterRoot>
  );
};

export default Footer;
