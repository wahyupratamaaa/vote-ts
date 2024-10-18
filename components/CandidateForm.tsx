import { XCircleIcon } from '@heroicons/react/24/solid';
import Form from './Form';
import { useEffect, useState } from 'react';

interface Candidate {
  key: number;
  name: string;
  title: string;
}

interface Props {
  candidate: Candidate;
  submitCandidate: (candidate: Candidate) => void;
  removeCandidateForm: (key: number) => void;
}

export default function CandidateForm(props: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    key: 0,
    name: '',
    title: '',
  });

  useEffect(() => {
    setCandidate(props.candidate);
  }, [props.candidate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (props.submitCandidate) {
      props.submitCandidate(candidate);
    }
  }, [candidate]);

  return (
    <div className='flex flex-col border border-zinc-100 p-5 '>
      <div className='self-end '>
        <XCircleIcon
          className='h-6 w-6 cursor-pointer hover:bg-zinc-100 text-zinc-300'
          onClick={() => props.removeCandidateForm(candidate.key)}
        />
      </div>
      <h1 className='flex w-1/2 bg-zinc-100 aspect-square justify-center items-center self-center text-center text-4xl rounded-full'>
        {props.candidate.key}
      </h1>
      <label className=' text-sm mt-3 mb-1'>Nama Kandidat</label>
      <Form
        placeholder='Contoh : Budi'
        value={candidate.name}
        onChange={(e) => {
          setCandidate({ ...candidate, name: e });
        }}
      />
    </div>
  );
}

// import Form from './Form';
// import { useEffect, useState } from 'react';

// interface Candidate {
//   key: number;
//   name: string;
//   title: string;
// }

// interface Props {
//   candidate: Candidate;
//   submitCandidate: (candidate: Candidate) => void;
//   removeCandidateForm: (key: number) => void;
// }

// export default function CandidateForm(props: Props) {
//   const [candidate, setCandidate] = useState<Candidate>({
//     key: 0,
//     name: '',
//     title: '',
//   });

//   useEffect(() => {
//     setCandidate(props.candidate);
//   }, [props.candidate]);

//   useEffect(() => {
//     console.log('candidate changed', candidate);
//     props.submitCandidate(candidate);
//   }, [candidate]);

//   return (
//     <div className='flex flex-col border border-zinc-100 p-5 '>
//       <h1 className='flex w-1/2 bg-zinc-100 aspect-square justify-center items-center self-center text-center text-4xl rounded-full'>
//         1
//       </h1>
//       <label className=' text-sm mt-3 mb-1'>Nama Kandidat</label>
//       <Form placeholder='Contoh : Budi' />
//     </div>
//   );
// }
