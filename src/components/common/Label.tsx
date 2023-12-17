import classNames from 'classnames';
import { FC } from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

const Label: FC<React.PropsWithChildren<LabelProps>> = ({ text, children, className, ...restProps }) => {
  return (
    <label className={classNames(className, 'flex flex-col gap-1.5 text-sm text-[#4D6475] leading-[18px] font-medium')} {...restProps} >
      {text}
      {children}
    </label>
  )
}

export default Label;