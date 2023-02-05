import styled from "styled-components";

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.sizes.search.height};
  opacity: ${(p) => (p.disabled ? "0.3" : "1")};

  ${(p) => p.theme.media.small} {
    flex-wrap: wrap;
    height: auto;
    margin: 10px 10px 20px;
}
  }
`;

const Input = styled.input`
  max-width: 100%;
  width: 800px;
  border: 1px solid ${(p) => p.theme.colors.gray.medium};
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 5%);
  border-radius: 4px;
  padding: 15px 20px;
  margin: 0 4px;
  font-size: 14px;
  transition: ease 0.3s;

  &:focus {
    border-color: ${(p) => p.theme.colors.outline.focus};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }

  ${(p) => p.theme.media.small} {
    width: 100%;
    margin: 20px 0;
  }
`;

export { Container, Input };
