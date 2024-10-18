import CountDownItem from './CountDownItem';

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDownRenderer(props: Props) {
  return (
    <div className='flex flex-row mx-auto justify-center'>
      <CountDownItem label='Hari' value={props.days} />
      <CountDownItem label='Jam' value={props.hours} />
      <CountDownItem label='Menit' value={props.minutes} />
      <CountDownItem label='Detik' value={props.seconds} />
    </div>
  );
}

// import { Span } from 'next/dist/trace';

// interface ItemProps {
//   value: number;
//   label: string;
// }

// const CountDownItem = ({ label, value }: ItemProps) => {
//   return (
//     <div className='flex items-center'>
//       <div className='flex flex-col text-center'>
//         <span className='text-5xl font-bold '>{value}</span>
//         <span className='text-xl font-light'>{label}</span>
//       </div>
//       {label !== 'Detik' && <span className='mx-5 text-4xl'>:</span>}
//     </div>
//   );
// };
// export default function CountDownRenderer() {
//   return <div className='flex flex-row mx-auto justify-center'></div>;
// }
