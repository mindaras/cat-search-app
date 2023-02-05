import styled from "styled-components";

const Cat = styled.img`
  width: 25%;
  height: calc(100% / 3);
  object-fit: cover;
  border: 4px solid #fff;
  border-radius: 30px;

  ${(p) => p.theme.media.medium} {
    width: 33.33%;
    height: 30vw;
  }

  ${(p) => p.theme.media.small} {
    width: 100%;
    height: 100vw;
  }
`;

interface ContainerProps {
  single: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(
    100vh - ${(p) => p.theme.sizes.search.height} -
      ${(p) => p.theme.sizes.pagination.height}
  );

  ${(p) => {
    if (p.single) {
      return `
            justify-content: center;
            align-items: center;

            ${Cat} {
                width: 40vw;
                height: 40vw;

                ${p.theme.media.medium} {
                    width: 50vw;
                    height: 50vw;
                }

                ${p.theme.media.small} {
                    width: 80vw;
                    height: 80vw;
                }
            }
        `;
    }
  }};

  ${(p) => p.theme.media.medium} {
    height: auto;
  }
`;

const NoDataText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;

const NoDataContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${(p) => p.theme.sizes.search.height});

  ${Cat} {
    opacity: 0.1;
  }

  ${(p) => p.theme.media.small} {
    height: auto;
  }
`;

export { Cat, Container, NoDataContainer, NoDataText };
