import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(
    100vh - ${(p) => p.theme.sizes.search.height} -
      ${(p) => p.theme.sizes.pagination.height}
  );
`;

export { LoaderContainer };
