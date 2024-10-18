interface Props {
  onChange?: (value: string) => void;
  value?: string;
  placeholder: string;
  className?: string;
  type?: string; // Tambahkan type sebagai opsional
  style?: any;
}

export default function Form(props: Props) {
  return (
    <input
      type={props.type ? props.type : 'text'}
      value={props.value || ''}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
      placeholder={props.placeholder}
      className={`bg-zinc-100 py-2 px-3 ${props.className}`}
    />
  );
}
