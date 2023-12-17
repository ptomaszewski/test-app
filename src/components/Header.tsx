import { FC } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo-icon.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header: FC<{}> = ({ }) => {
  return (
    <div className='bg-white px-10 py-6' data-testid='header'>
      <div className='flex items-end gap-2' data-testid='logo'>
        <LogoIcon />
        <Logo />
      </div>
    </div>
  )
}

export default Header;