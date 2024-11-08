import { FunctionComponent } from "react";
import styled from "styled-components";

export type FAVWhatsappType = {
  className?: string;
};

const FloatingButtondefaultIcon = styled.img`
  width: 64px;
  position: relative;
  height: 64px;
  z-index: 0;
`;
const LogoswhatsappIcon = styled.img`
  height: 57.81%;
  width: 56.25%;
  position: absolute;
  margin: 0 !important;
  top: 21.88%;
  right: 21.88%;
  bottom: 20.31%;
  left: 21.88%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 1;
`;
const FavWhatsappRoot = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-3xs);
`;

const FAVWhatsapp: FunctionComponent<FAVWhatsappType> = ({
  className = "",
}) => {
  return (
    <FavWhatsappRoot className={className}>
      <FloatingButtondefaultIcon alt="" src="/floating-buttondefault.svg" />
      <LogoswhatsappIcon loading="lazy" alt="" src="/logoswhatsappicon.svg" />
    </FavWhatsappRoot>
  );
};

export default FAVWhatsapp;
