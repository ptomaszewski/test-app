import { FC, FormEvent, useState } from 'react';
import Button from '../common/Button';
import InputMoney from '../common/InputMoney';
import InputMonth, { getDateData } from '../common/InputMonth';

interface DonateFormProps {

}

const DonateForm: FC<DonateFormProps> = ({ }) => {
  const [donation, setDonation] = useState<number | undefined>();
  const [duration, setDuration] = useState(1);
  const total = !donation || !duration ? 0 : donation * duration;
  const date = getDateData(duration, new Date());

  const onDonationChange = (value?: number) => {
    setDonation(value);
  };

  const onDurationChange = (value: number) => {
    setDuration(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ event, donation, duration, total });
  };

  return (
    <form className='flex flex-col sm:mx-10 sm:my-8 mx-8 my-6' onSubmit={onSubmit}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-auto w-full">
        <div className='flex-1 min-w-0'>
          <InputMoney autoFocus data-testid='money' label="I can donate" onValueChange={onDonationChange} value={donation} />
        </div>
        <div className='flex-1 min-w-0'>
          <InputMonth data-testid='month' label="Every month until" onValueChange={onDurationChange} value={duration} />
        </div>
      </div>
      <div className='flex flex-col rounded border border-solid border-[#E9EEF2] sm:border-0'>
        <div className='flex justify-between items-center mx-4 mt-6 sm:mt-8'>
          <p className='text-base sm:text-xl text-[#1E2A32] leading-[19.2px] sm:leading-6 font-medium'>Total amount</p>
          <p className="inter text-2xl text-[#595D7B] sm:text-[32px] font-bold leading-[28.8px] sm:leading-[38.4px]">${total.toLocaleString()}</p>
        </div>
        <div className='bg-[#F4F8FA] px-4 py-6 rounded-[5px] mt-6'>
          <p className='text-xs font-normal text-[#1E2A32] leading-[16.8px] text-center sm:text-left'>You will be sending <span className='inter font-bold'>${donation?.toLocaleString() || 0}</span> every month, until <span className='inter font-bold'>{date.monthName} {date.year}</span>. Thank you!</p>
        </div>

      </div>
      <div className='flex gap-6 mx-2 my-8'>
        <Button variant="outline" className='hidden sm:flex sm:flex-1' type='button'>Cancel</Button>
        <Button variant="primary" className='flex flex-1' type='submit'>Continue</Button>
      </div>
    </form>
  )
}

export default DonateForm;