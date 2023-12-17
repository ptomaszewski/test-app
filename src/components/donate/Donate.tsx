import { FC } from 'react';
import DonateForm from './DonateForm';
import DonateHeader from './DonateHeader';

const Donate: FC<{}> = ({ }) => {
  return (
    <div className='flex flex-col w-full'>
      <DonateHeader />
      <DonateForm />
    </div>
  );
}

export default Donate;