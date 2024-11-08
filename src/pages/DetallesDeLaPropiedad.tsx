import { FunctionComponent } from "react";
import Header from "../components/Header";
import PropertyDetails from "../components/PropertyDetails";
import PropertyFeatures from "../components/PropertyFeatures";
import styled from "styled-components";
import Footer from "../components/Footer";

const PropertyDetailsParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 23.9px;
  max-width: 100%;
`;
const Content = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 57px 77px 60px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-bottom: 50px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    padding-bottom: 32px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: 30px;
    padding-right: 28px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const DetallesDeLaPropiedadRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 64px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: var(--gap-13xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;

const DetallesDeLaPropiedad: FunctionComponent = () => {
  return (
    <DetallesDeLaPropiedadRoot>
      <Header />
      <Content>
        <PropertyDetailsParent>
          <PropertyDetails />
          <PropertyFeatures />
        </PropertyDetailsParent>
      </Content>
      <Footer property1="Default" />
    </DetallesDeLaPropiedadRoot>
  );
};

export default DetallesDeLaPropiedad;
