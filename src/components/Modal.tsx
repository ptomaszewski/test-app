import { FC, PropsWithChildren } from 'react';

const Modal: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='fixed inset-0 sm:static flex bg-white sm:mt-16 sm:rounded-[5px] sm:w-[600px] sm:h-[535px]'>
      {children}
    </div>
  );
}

export default Modal;