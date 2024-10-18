// export default function CountDownItem { Span } from 'next/dist/trace';

interface ItemProps {
  value: number;
  label: string;
}

export default function CountDownItem(props: ItemProps) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col text-center'>
        <span className='text-5xl font-bold '>{props.value}</span>
        <span className='text-xl font-light'>{props.label}</span>
      </div>
      {props.label !== 'Detik' && <span className='mx-5 text-4xl'>:</span>}
    </div>
  );
}
// export default function CountDownRenderer() {
//   return <div className='flex flex-row mx-auto justify-center'></div>;
// }
