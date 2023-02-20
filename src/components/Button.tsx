interface ButtonProps {
  text: string
}

export const Button = (props: ButtonProps) => {
  return <button onClick={() => alert('clicked')}>
    {props.text}
    </button>
}
