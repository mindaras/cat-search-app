import { Fragment } from "react";
import { Optional } from "../Optional";
import { Button, Dots } from "./Pagination.components";
import { PaginationButton } from "./PaginationButton";

interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

const DynamicPagination: React.FC<Props> = ({
  page: currentPage,
  total,
  onChange,
}) => {
  const renderPages = () => {
    const isAtTheStart = currentPage < 3;
    const isAtTheEnd = currentPage > total - 4;
    const startingPage = !isAtTheStart ? currentPage - 1 : 1;
    const pages = isAtTheEnd
      ? [total - 4, total - 3, total - 2]
      : [startingPage, startingPage + 1, startingPage + 2];

    return (
      <Fragment>
        {pages.map((page) => (
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
  };

  return (
    <Fragment>
      <Button active={currentPage === 0} onClick={() => onChange(0)}>
        1
      </Button>
      <Optional if={currentPage > 2 && total > 7}>
        <Dots>...</Dots>
      </Optional>
      {renderPages()}
      <Optional if={currentPage < total - 3 && total > 7}>
        <Dots>...</Dots>
      </Optional>
      <Button
        active={currentPage === total - 1}
        onClick={() => onChange(total - 1)}
      >
        {total}
      </Button>
    </Fragment>
  );
};

export { DynamicPagination };
