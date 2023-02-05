interface Props {
  if: boolean;
  children: any;
}

const Optional: React.FC<Props> = (props) => {
  if (props.if) {
    return props.children;
  }

  return null;
};

export { Optional };
