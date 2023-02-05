import { useEffect, useState } from "react";
import * as Types from "../../models";
import { ArrowDown } from "../icons/arrow/ArrowDown";
import { Container, List, Selected, Option } from "./Dropdown.components";

interface Props {
  disabled: boolean;
  options: Types.Options;
  onChange: (option: Types.Option) => void;
}

const Dropdown: React.FC<Props> = ({ options, disabled, onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    undefined | Types.Option
  >();
  const availableOptions = options?.filter(
    (option) => option.value !== selectedOption?.value
  );
  const isDisabled = disabled || !availableOptions?.length;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDisabled) setOpen(!isOpen);
  };

  const close = (e: React.MouseEvent) => {
    setOpen(false);
  };

  useEffect(() => {
    if (options?.length) {
      const preselectedOption =
        options.find((option) => option.selected) || options[0];
      setSelectedOption(preselectedOption);
    }

    window.addEventListener("click", close as any);
    return () => window.removeEventListener("click", close as any);
  }, [options]);

  const changeHandler = (option: Types.Option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <Container disabled={isDisabled} onClick={toggle}>
      <Selected>
        {selectedOption?.text} <ArrowDown inverse={isOpen} />
      </Selected>
      <List open={isOpen}>
        {availableOptions?.map((option) => (
          <Option key={option.value} onClick={() => changeHandler(option)}>
            {option.text}
          </Option>
        ))}
      </List>
    </Container>
  );
};

export { Dropdown };
