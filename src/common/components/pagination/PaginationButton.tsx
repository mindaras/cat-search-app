import { Button } from "./Pagination.components";

interface Props {
  active: boolean;
  onClick: () => void;
  children: number;
}

const PaginationButton: React.FC<Props> = ({ active, onClick, children }) => (
  <Button active={active} onClick={onClick}>
    {children}
  </Button>
);

export { PaginationButton };
