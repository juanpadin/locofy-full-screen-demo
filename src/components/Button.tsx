import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type ButtonType = {
  className?: string;
  accesoClientes?: string;

  /** Variant props */
  property1?: "Default" | "Disabled";

  /** Style props */
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const AccesoClientes = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--tab-size);
  font-weight: 500;
  font-family: var(--tab);
  color: var(--color-white);
  text-align: left;
`;
const Root = styled.button<{ buttonAlignSelf?: CSSProperties["alignSelf"] }>`
  cursor: pointer;
  border: none;
  padding: var(--padding-xs) var(--padding-14xl);
  background-color: var(--button);
  border-radius: var(--br-6xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.6;
  }
  &:disabled .accesoClientes {
    text-decoration: unset;
    color: var(--color-gray-100);
  }
  align-self: ${(p) => p.buttonAlignSelf};
`;

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  property1 = "Default",
  buttonAlignSelf,
  accesoClientes,
}) => {
  return (
    <Root
      data-property1={property1}
      disabled={property1 === "Disabled"}
      buttonAlignSelf={buttonAlignSelf}
      className={className}
    >
      <AccesoClientes className="accesoClientes">
        {accesoClientes}
      </AccesoClientes>
    </Root>
  );
};

export default Button;
