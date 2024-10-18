interface Props {
  text: string;
  type?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`px-3 py-2 rounded ${
        props.type === 'secondary'
          ? 'bg-white border-2 border-zinc-200 text-black hover:bg-gray-800 hover:text-white' // Set hover background to gray and text to black
          : 'bg-black text-white hover:bg-gray-400 hover:text-black' // Set hover background to gr      ay and text to black for primary type as well
      } ${props.className || ''}`}
    >
      {props.text}
    </button>
  );
}
