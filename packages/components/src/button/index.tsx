export interface LcButtonProps {
  text?: string;
  onClick?: () => void;
}

function LcButton(props: LcButtonProps) {
  return <button {...props}>{props.text}</button>;
}

export default LcButton;
