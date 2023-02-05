import styled from "styled-components";
import { Container as ArrowContainer } from "../icons/arrow/ArrowDown.components";

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  border: 1px solid ${(p) => p.theme.colors.gray.medium};
  opacity: ${(p) => (p.disabled ? "0.3" : "1")};
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 10%);
  border-radius: 4px;
  min-width: 165px;
  padding: 15px;
  margin: 0 4px;
  user-select: none;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;

  ${(p) => p.theme.media.small} {
    flex-grow: 1;
    font-size: 12px;
    min-width: auto;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Selected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${ArrowContainer} {
    position: relative;
    top: -2px;
  }
`;

interface ListProps {
  open: boolean;
}

const List = styled.div<ListProps>`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  text-align: center;
  border: 1px solid ${(p) => p.theme.colors.gray.medium};
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 10%);
  border-radius: 4px;
  margin-top: 2px;
  max-height: 40vh;
  overflow-y: auto;
  z-index: 10;
`;

const Option = styled.div`
  padding: 15px 20px;
  transition: ease 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.gray.medium};
  }
`;

export { Container, Selected, List, Option };
