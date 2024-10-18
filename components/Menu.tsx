import Image from 'next/image';
import Button from './Button';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  return (
    <div className='flex justify-between py-5'>
      <Image
        src={'/assets/SatuPersen.svg'}
        width={100}
        height={100}
        alt='SatuPersen'
        onClick={() => router.push('/')}
      />
      <Button text='Login' />
    </div>
  );
}
