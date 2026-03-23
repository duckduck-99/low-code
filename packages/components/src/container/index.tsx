export interface LcContainerProps {
  children?: React.ReactNode;
}

function LcContainer(props: LcContainerProps) {
  return <div {...props}>{props.children}</div>;
}

export default LcContainer;
