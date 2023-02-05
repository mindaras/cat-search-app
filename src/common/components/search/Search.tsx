import { debounce } from "@common/helpers/debounce";
import { useCallback, useRef, useState } from "react";
import * as Types from "../../models";
import { Dropdown } from "../dropdown/Dropdown";
import { Container, Input } from "./Search.components";

interface Props {
  value?: string;
  filters?: Types.Filters;
  disabled: boolean;
  filtersDisabled: boolean;
  onChange: (value: string) => void;
}

const Search: React.FC<Props> = ({
  value: initialValue,
  filters,
  disabled,
  filtersDisabled,
  onChange,
}) => {
  const intialValueRef = useRef(initialValue || "");
  const [value, setValue] = useState(intialValueRef.current);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      onChange(value);
    }, 300),
    []
  );

  const changeHandler = (value: string) => {
    setValue(value);
    debouncedOnChange(value);
  };

  return (
    <Container disabled={disabled}>
      <Input
        type="text"
        placeholder="Image id..."
        value={value}
        disabled={disabled}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {filters?.map((filter, i) => (
        <Dropdown
          key={i}
          options={filter.options}
          disabled={disabled || filtersDisabled}
          onChange={filter.onChange}
        />
      ))}
    </Container>
  );
};

export { Search };
