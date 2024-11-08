import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent from "./FrameComponent";

export type HeaderType = {
  className?: string;
};

const HeaderChild = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--dark-blue);
  z-index: 0;
`;
const HeaderRoot = styled.header`
  width: 1440px;
  height: 104px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xl-1) var(--padding-44xl-7) var(--padding-6xl-9)
    var(--padding-45xl);
  box-sizing: border-box;
  position: relative;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--tab);
`;

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <HeaderRoot className={className}>
      <HeaderChild />
      <FrameComponent />
    </HeaderRoot>
  );
};

export default Header;
