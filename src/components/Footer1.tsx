import { FunctionComponent } from "react";
import styled from "styled-components";

export type Footer1Type = {
  className?: string;
};

const FooterBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--light-blue);
  z-index: 0;
`;
const Inicio = styled.div`
  height: 34px;
  width: 46px;
  position: relative;
  line-height: 188.69%;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
`;
const Nosotros = styled.div`
  height: 34px;
  width: 78px;
  position: relative;
  line-height: 188.69%;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
`;
const Inmobiliaria = styled.div`
  height: 34px;
  width: 99px;
  position: relative;
  line-height: 188.69%;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
`;
const LinksList = styled.div`
  width: 633px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-93xl);
`;
const Copyright2020Fascioli = styled.div`
  width: 321px;
  height: 19px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const FrameChild = styled.img`
  width: 17.6px;
  height: 17.6px;
  position: relative;
`;
const FrameWrapper = styled.div`
  height: 18.6px;
  width: 17.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  z-index: 3;
`;
const FrameItem = styled.img`
  width: 18.5px;
  height: 18.5px;
  position: relative;
`;
const FrameContainer = styled.div`
  height: 19.5px;
  width: 18.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  z-index: 1;
`;
const FrameInner = styled.img`
  height: 20.2px;
  width: 20.2px;
  position: relative;
  z-index: 2;
`;
const FrameParent = styled.div`
  height: 20.2px;
  width: 92.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid-9);
`;
const SocialIconsFooter = styled.div`
  width: 206.1px;
  height: 20.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-94xl-9);
  box-sizing: border-box;
`;
const Copyright2020FascioliAdminiParent = styled.div`
  height: 67.2px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const Copyright = styled.div`
  width: 476.5px;
  height: 67.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-137xl-5);
  box-sizing: border-box;
  font-size: var(--tab-size);
`;
const FooterLinks = styled.div`
  height: 144.2px;
  width: 633px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-24xl);
  z-index: 1;
`;
const FooterRoot = styled.div`
  height: 273px;
  width: 1440px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-384xl) var(--padding-45xl-8)
    var(--padding-385xl);
  box-sizing: border-box;
  position: relative;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--dark-blue);
  font-family: var(--tab);
`;

const Footer1: FunctionComponent<Footer1Type> = ({ className = "" }) => {
  return (
    <FooterRoot className={className}>
      <FooterBackground />
      <FooterLinks>
        <LinksList>
          <Inicio>Inicio</Inicio>
          <Nosotros>Nosotros</Nosotros>
          <Inmobiliaria>Inmobiliaria</Inmobiliaria>
          <Nosotros>Contacto</Nosotros>
        </LinksList>
        <Copyright>
          <Copyright2020FascioliAdminiParent>
            <Copyright2020Fascioli>
              © Copyright 2020 Fascioli Administraciones
            </Copyright2020Fascioli>
            <SocialIconsFooter>
              <FrameParent>
                <FrameWrapper>
                  <FrameChild loading="lazy" alt="" src="/group-87.svg" />
                </FrameWrapper>
                <FrameContainer>
                  <FrameItem loading="lazy" alt="" src="/group-86.svg" />
                </FrameContainer>
                <FrameInner loading="lazy" alt="" src="/group-88.svg" />
              </FrameParent>
            </SocialIconsFooter>
          </Copyright2020FascioliAdminiParent>
        </Copyright>
      </FooterLinks>
    </FooterRoot>
  );
};

export default Footer1;
