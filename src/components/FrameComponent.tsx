import { FunctionComponent } from "react";
import styled from "styled-components";
import Button from "./Button";

export type FrameComponentType = {
  className?: string;
};

const GroupIcon = styled.img`
  height: 53px;
  width: 122.3px;
  position: relative;
`;
const Inicio = styled.a`
  text-decoration: underline;
  height: 21px;
  width: 47px;
  position: relative;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  flex-shrink: 0;
`;
const Nosotros = styled.a`
  text-decoration: none;
  height: 21px;
  width: 77px;
  position: relative;
  color: inherit;
  display: inline-block;
  flex-shrink: 0;
`;
const Menu = styled.div`
  height: 21px;
  width: 146px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ButtonParent = styled.div`
  height: 43px;
  width: 356px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const HeaderNavigation = styled.div`
  height: 43px;
  width: 548px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-27xl);
`;
const GroupParentRoot = styled.div`
  height: 53px;
  width: 1312.3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-623xl);
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--tab);
`;

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <GroupParentRoot className={className}>
      <GroupIcon loading="lazy" alt="" src="/group.svg" />
      <HeaderNavigation>
        <Menu>
          <Inicio>Inicio</Inicio>
          <Nosotros>Nosotros</Nosotros>
        </Menu>
        <ButtonParent>
          <Button property1="Default" accesoClientes="Inmobiliaria" />
          <Button
            property1="Default"
            buttonAlignSelf="unset"
            accesoClientes="Acceso Clientes"
          />
        </ButtonParent>
      </HeaderNavigation>
    </GroupParentRoot>
  );
};

export default FrameComponent;
