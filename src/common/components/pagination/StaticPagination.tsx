import { Fragment } from "react";
import { PaginationButton } from "./PaginationButton";

interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const StaticPagination: React.FC<Props> = ({
  page: currentPage,
  total,
  onChange,
}) => (
  <Fragment>
    {new Array(total).fill("").map((_, page) => (
      <PaginationButton
        key={page}
        active={page === currentPage}
        onClick={() => onChange(page)}
      >
        {page + 1}
      </PaginationButton>
    ))}
  </Fragment>
);

export { StaticPagination };
