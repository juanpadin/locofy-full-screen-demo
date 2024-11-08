import { FunctionComponent } from "react";
import styled from "styled-components";

export type InputTextType = {
  className?: string;

  /** Variant props */
  property1?: "Default";
};

const HolaQuieroQue = styled.div`
  width: 246px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const HolaQuieroQueSeComuniquenWrapper = styled.div`
  height: 120px;
  width: 272px;
  box-shadow: 0px 0px 8px rgba(173, 173, 173, 0.25);
  border-radius: var(--br-4xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-xs) var(--padding-40xl);
  box-sizing: border-box;
`;
const InputTextRoot = styled.div`
  width: 272px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  text-align: left;
  font-size: var(--inputs-size);
  color: var(--grey);
  font-family: var(--tab);
`;

const InputText: FunctionComponent<InputTextType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <InputTextRoot data-property1={property1} className={className}>
      <HolaQuieroQueSeComuniquenWrapper>
        <HolaQuieroQue>
          ¡Hola! Quiero que se comuniquen conmigo por esta propiedad en
          alquiler.
        </HolaQuieroQue>
      </HolaQuieroQueSeComuniquenWrapper>
    </InputTextRoot>
  );
};

export default InputText;
