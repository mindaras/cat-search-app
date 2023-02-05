import styled from "styled-components";

const Container = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(0.8);
    }
    50% {
      transform: rotate(360deg) scale(1.2);
    }
    100% {
      transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
    }
    50% {
      box-shadow: 0 0 0 ${(p) => p.theme.colors.gray.medium};
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
    }
    50% {
      box-shadow: 0 0 0 ${(p) => p.theme.colors.gray.medium};
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
      margin-top: 0;
    }
  }

  animation: rotate 2s infinite;
  height: 50px;
  width: 50px;

  :before,
  :after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }

  :before {
    animation: ball1 2s infinite;
    background-color: ${(p) => p.theme.colors.gray.medium};
    box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
    margin-bottom: 10px;
  }

  :after {
    animation: ball2 2s infinite;
    background-color: ${(p) => p.theme.colors.gray.medium};
    box-shadow: 30px 0 0 ${(p) => p.theme.colors.gray.medium};
  }
`;

export { Container };
