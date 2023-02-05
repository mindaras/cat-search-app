import { Optional } from "../Optional";
import { DynamicPagination } from "./DynamicPagination";
import { Container, Content } from "./Pagination.components";
import { StaticPagination } from "./StaticPagination";

interface Props {
  page: number;
  total: number;
  disabled: boolean;
  onChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  page: currentPage,
  total,
  disabled,
  onChange,
}) => {
  const changeHandler = (page: number) => {
    if (disabled) return;
    onChange(page);
  };

  return (
    <Optional if={total > 1}>
      <Container disabled={disabled}>
        <Content>
          <Optional if={total > 7}>
            <DynamicPagination
              page={currentPage}
              total={total}
              onChange={changeHandler}
            />
          </Optional>
          <Optional if={total <= 7}>
            <StaticPagination
              page={currentPage}
              total={total}
              onChange={changeHandler}
            />
          </Optional>
        </Content>
      </Container>
    </Optional>
  );
};

export { Pagination };
