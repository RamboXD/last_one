interface Props {
  count: number;
}

export const Header = (props: Props) => {
  return <div>{props.count}</div>;
};
