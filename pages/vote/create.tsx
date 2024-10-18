import Head from 'next/head';
import Menu from '../../components/Menu';
import Image from 'next/image';
import Form from '../../components/Form';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { id } from 'date-fns/locale/id';
import { useState } from 'react';
import Button from '../../components/Button';
registerLocale('id', id);

import 'react-datepicker/dist/react-datepicker.css';
import CandidateForm from '../../components/CandidateForm';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  const addCandidateForm = () => {
    const newCandidate: Candidate = {
      name: '',
      key: candidates.length + 1,
      title: '',
    };
    setCandidates([...candidates, newCandidate]);
  };
  // list canddidate baru kecuali candidate atas
  const removeCandidateForm = (key: number) => {
    const newCandidates = candidates.filter(
      (candidate) => candidate.key !== key
    );
    // re-range atau diurutkan  ulang ..
    newCandidates.forEach((candidate, index) => {
      candidate.key = index + 1;
    });
    setCandidates(newCandidates);
  };
  return (
    <div className='container mx-auto' style={{ paddingBottom: '100px' }}>
      <Head>
        <title>Voting Baru</title>
      </Head>
      <Menu />

      <div className='p-10'>
        <Image
          alt='Create Vote'
          src={'/assets/CreateVotes.svg'}
          width={174}
          height={180}
        />
        <h1 className='text-4xl font-bold mt-5'>Buat Voting Baru</h1>
        <h2 className='text-zinc-700 mt-3'>
          Silahkan masukkan data yang dibutuhkan sebelum membuat vote online
        </h2>

        <form className='flex flex-col'>
          {/* detail vote */}
          <div>
            <h3 className='text-lg font-bold mt-3'>Detail Vote</h3>
            <div className='flex flex-col'>
              <label className='mt-5'>Judul</label>
              <Form
                onChange={() => {}}
                value={''}
                placeholder={'Contoh : Voting Calon Saya Sendiri '}
                className={'mt-1 w-1/2'}
                type='text'
              />
            </div>
            <div className='flex flex-col w-2/3 mt-5'>
              <label className='text-md'>Kapan dimulai</label>
              <div className='inline-flex'>
                <ReactDatePicker
                  locale={'id'}
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat={'Pp'}
                  minDate={new Date()}
                  className={`w-full bg-zinc-100 py-2 px-3 mt-1`}
                  popperPlacement='bottom-start'
                />
                <span className='text-md text-center p-3'>Sampai</span>
                <ReactDatePicker
                  locale={'id'}
                  showTimeSelect
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  dateFormat={'Pp'}
                  minDate={startDate}
                  className={`w-full bg-zinc-100 py-2 px-3 mt-1`}
                  popperPlacement='bottom-start'
                />
              </div>
            </div>
          </div>
          {/* last */}
          {/* kandidat */}
          <div>
            <h3 className='font-md text-xl mt-10'>Kandidat</h3>
            {/* Pastikan semua CandidateForm berada di dalam div grid */}
            <div className='grid gap-4 grid-cols-4 mt-5'>
              {candidates.map((candidate: Candidate, index: number) => (
                <CandidateForm
                  key={index}
                  candidate={candidate}
                  submitCandidate={submitCandidate}
                  removeCandidateForm={removeCandidateForm}
                />
              ))}
              <div
                className='w-1/3 flex flex-col items-center justify-center cursor-pointer bg-zinc-100 aspect-square text-zinc-300 hover:bg-black hover:text-white '
                onClick={() => addCandidateForm()}
              >
                <PlusIcon className='w-1/3'></PlusIcon>
              </div>
              {/* bliom fix 2.07.18 menit youtube */}
            </div>
          </div>
          {/* {JSON.stringify(candidates)} */}
          <div className='text-right margin-5'>
            <Button text='Buat Voting 🔫' />
          </div>
        </form>
      </div>
    </div>
  );
}
