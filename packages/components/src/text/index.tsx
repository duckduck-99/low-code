export interface LcTextProps {
  content?: string;
}

function LcText(props: LcTextProps) {
  return <div {...props}>{props.content}</div>;
}

export default LcText;
