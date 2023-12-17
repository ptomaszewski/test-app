import classNames from 'classnames';
import { FC } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'outline';
}

const variantStyles: Record<ButtonProps['variant'], string> = {
  primary: 'bg-[#423C66] text-white hover:bg-[#645D93] active:bg-[#241E47] aria-pressed:bg-[#241E47]',
  outline: 'border border-solid border-[#595D7B] text-[#595D7B] hover:bg-primary-50 border-[#595D7B] active:bg-primary-100 aria-pressed:bg-primary-100',
}

const Button: FC<React.PropsWithChildren<ButtonProps>> = ({ variant, children, className, ...restProps }) => {

  return (
    <button className={classNames('rounded-[5px] text-base font-semibold leading-5 px-6 py-4 flex items-center justify-center transition-colors', className, variantStyles[variant])} {...restProps}>
      {children}
    </button>
  )
}

export default Button;