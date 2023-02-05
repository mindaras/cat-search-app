import styled from "styled-components";

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: ${(p) => p.theme.sizes.pagination.height};
  opacity: ${(p) => (p.disabled ? "0.3" : "1")};
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.div<ButtonProps>`
  background-color: ${(p) =>
    p.active ? p.theme.colors.gray.medium : p.theme.colors.gray.light};
  border-radius: 100%;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  font-size: 12px;
  margin: 0 4px;
  transition: ease 0.3s;

  :hover {
    background-color: ${(p) => p.theme.colors.gray.medium};
  }
`;

const Dots = styled.div`
  margin: 0 4px;
  color: ${(p) => p.theme.colors.gray.dark};
`;

export { Container, Content, Button, Dots };
