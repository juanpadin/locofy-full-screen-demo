import { FunctionComponent } from "react";
import styled from "styled-components";

export type PropertyDetailsType = {
  className?: string;
};

const SearchMdIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const IconGallery = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Buscar = styled.div`
  height: 19px;
  width: 168px;
  position: relative;
  font-size: var(--tab-size);
  font-weight: 500;
  font-family: var(--tab);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
`;
const Button1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-xs) var(--padding-14xl);
  background-color: var(--button);
  width: 234px;
  margin: 0 !important;
  position: absolute;
  bottom: 30.1px;
  left: 30px;
  border-radius: var(--br-6xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: var(--gap-xs);
  z-index: 0;
`;
const SearchSeparatorIcon = styled.img`
  height: 450.1px;
  flex: 1;
  position: relative;
  border-radius: var(--br-base) 0px 0px var(--br-base);
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
`;
const Search = styled.div`
  position: absolute;
  top: 145px;
  left: 1px;
  width: 657.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Icons = styled.input`
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const IconGallery1 = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const DescargarFichaDe = styled.div`
  position: relative;
  font-size: var(--tab-size);
  font-weight: 500;
  font-family: var(--tab);
  color: var(--button);
  text-align: left;
`;
const DescargarFichaDePropiedadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-5) 0px 0px;
`;
const Button2 = styled.button`
  cursor: pointer;
  border: 1px solid var(--button);
  padding: var(--padding-3xs) var(--padding-xs);
  background-color: transparent;
  height: 48px;
  border-radius: var(--br-6xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FrameChild = styled.img`
  height: 221px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 211px;
  flex-shrink: 0;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const SocialIcons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
`;
const PropertyActions = styled.div`
  position: absolute;
  top: 48px;
  left: 666.9px;
  width: 655px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-30xl);
  max-width: 100%;
`;
const Inicio = styled.b`
  position: relative;
  text-decoration: underline;
`;
const BreadcrumbItemsChild = styled.img`
  width: 12px;
  height: 12px;
  position: relative;
`;
const BreadcrumbItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const CurrentPage = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--medium-grey);
`;
const InicioParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const ApartamentoLuminosoEn = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const GroupIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
`;
const PropertyLocationInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-5) 0px 0px;
`;
const CarrascoNorteMontevideo = styled.h3`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: inline-block;
  min-width: 227px;
  @media screen and (max-width: 450px) {
    font-size: var(--tab-size);
  }
`;
const PropertyLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  font-size: var(--font-size-xl);
  color: var(--grey);
`;
const PropertyTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-17xl);
  color: var(--dark-grey);
`;
const PropertyInfo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 616px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
`;
const PropertyDetailsRoot = styled.div`
  align-self: stretch;
  height: 595.1px;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--inputs-size);
  color: var(--button);
  font-family: var(--tab);
  @media screen and (max-width: 750px) {
    height: auto;
    min-height: 595.0999999999999;
  }
`;

const PropertyDetails: FunctionComponent<PropertyDetailsType> = ({
  className = "",
}) => {
  return (
    <PropertyDetailsRoot className={className}>
      <Search>
        <Button1>
          <SearchMdIcon alt="" src="/searchmd.svg" />
          <IconGallery alt="" src="/icongallery.svg" />
          <Buscar>Ver todas las fotos (10)</Buscar>
        </Button1>
        <SearchSeparatorIcon alt="" src="/search-separator@2x.png" />
      </Search>
      <PropertyActions>
        <Button2>
          <Icons type="checkbox" />
          <IconGallery1 alt="" src="/icongallery.svg" />
          <DescargarFichaDePropiedadWrapper>
            <DescargarFichaDe>Descargar ficha de propiedad</DescargarFichaDe>
          </DescargarFichaDePropiedadWrapper>
        </Button2>
        <SocialIcons>
          <RectangleParent>
            <FrameChild loading="lazy" alt="" src="/rectangle-4494@2x.png" />
            <FrameChild loading="lazy" alt="" src="/rectangle-4495@2x.png" />
          </RectangleParent>
          <RectangleParent>
            <FrameChild alt="" src="/rectangle-4494-1@2x.png" />
            <FrameChild alt="" src="/rectangle-4495-1@2x.png" />
          </RectangleParent>
        </SocialIcons>
      </PropertyActions>
      <PropertyInfo>
        <Breadcrumb>
          <InicioParent>
            <Inicio>Inicio</Inicio>
            <BreadcrumbItems>
              <BreadcrumbItemsChild loading="lazy" alt="" src="/group-39.svg" />
            </BreadcrumbItems>
            <Inicio>Propiedades</Inicio>
            <BreadcrumbItems>
              <BreadcrumbItemsChild alt="" src="/group-39.svg" />
            </BreadcrumbItems>
            <CurrentPage>Apartamento Luminoso en carrasco</CurrentPage>
          </InicioParent>
        </Breadcrumb>
        <PropertyTitle>
          <ApartamentoLuminosoEn>
            Apartamento Luminoso en carrasco
          </ApartamentoLuminosoEn>
          <PropertyLocation>
            <PropertyLocationInner>
              <GroupIcon loading="lazy" alt="" src="/group-36.svg" />
            </PropertyLocationInner>
            <CarrascoNorteMontevideo>
              Carrasco Norte, Montevideo, Uruguay
            </CarrascoNorteMontevideo>
          </PropertyLocation>
        </PropertyTitle>
      </PropertyInfo>
    </PropertyDetailsRoot>
  );
};

export default PropertyDetails;
