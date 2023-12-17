import { FC } from 'react';
import Label from './Label';
import { ReactComponent as Dollar } from '../../assets/dollar.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (value?: number) => void;
  value?: number;
  'data-testid'?: string;
}

export const filterNumbers = (str: string) => {
  return Number(str.replace(/^0|\D|,/g, "")) || undefined;
}

const Input: FC<InputProps> = ({ label, onValueChange, onChange, value, ...restProps }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return onValueChange(filterNumbers(event.target.value))
  }

  const formattedValue = value?.toLocaleString() || '';

  return (
    <div className='relative'>
      <Dollar className='absolute left-2 inset-y-0 mt-[43px]' />
      <Label text={label} data-testid={`${restProps['data-testid']}-label`}>
        <input placeholder='0.00' className='placeholder-[#EEE] rounded box-border border border-solid transition-colors border-[#E9EEF2] focus:outline-0 focus:border-[#423C66] p-4 pl-10 rubik text-2xl leading-7 font-medium text-[#595D7B]' onChange={handleOnChange} value={formattedValue} {...restProps} />
      </Label>
    </div>
  )
}

export default Input;