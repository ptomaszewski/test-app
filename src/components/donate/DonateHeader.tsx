import { FC } from 'react';
import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Share } from '../../assets/share.svg';

const DonateHeader: FC<{}> = ({ }) => {
  return (
    <div className='bg-[#FFDBCB]'>
      <div className='flex flex-col gap-4 items-center mt-4 mx-6 mb-7 sm:flex-row sm:mx-10 sm:mb-6 sm:mt-8 relative'>
        <button className='absolute top-0 right-0 sm:hidden p-2 rounded-[10px] hover:bg-[#F2D0C1] focus:outline-[#423C66]'>
          <Close />
        </button>
        <Share className='mt-2 sm:mt-auto' />
        <div className='flex flex-col gap-1 items-center mx-7 sm:items-start sm:mx-0'>
          <h3 className='text-[#423C66] font-semibold text-2xl leading-7 sm:leading-[38px] sm:text-[32px]'>The giving block</h3>
          <p className='inter text-[#595D7B] font-normal leading-5'>Set up your donation goal!</p>
        </div>
      </div>
    </div>
  )
}

export default DonateHeader;