import styled from "styled-components";

interface ArrowDownProps {
  inverse?: boolean;
  className?: string;
}

const Container = styled.div<ArrowDownProps>`
  width: 10px;
  height: 10px;
  margin: 0 4px;

  svg {
    transform: rotate(${(p) => (p.inverse ? "180deg" : "0deg")});
  }

  g {
    stroke: none;
    stroke-width: 0;
    stroke-dasharray: none;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 10;
    fill: none;
    fill-rule: nonzero;
    opacity: 1;
  }

  path {
    stroke: none;
    stroke-width: 1;
    stroke-dasharray: none;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 10;
    fill: rgb(0, 0, 0);
    fill-rule: nonzero;
    opacity: 1;
  }
`;

export { Container };
