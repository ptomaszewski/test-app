import { FC } from 'react';
import { ReactComponent as ChevronLeft } from '../../assets/chevron_left.svg'
import { ReactComponent as ChevronRight } from '../../assets/chevron_right.svg'
import Label from './Label';
import classNames from 'classnames';

interface InputMonthProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (value: number) => void;
  value?: number;
  'data-testid'?: string;
}

export const getMonthName = (date: Date) => {
  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

export const monthDiff: (endDate: Date, startDate?: Date) => number = 
  (endDate, startDate = new Date()) => 
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

export const getDateData = (monthDuration: number, date: Date) => {
  const result = new Date(date)
  const month = result.getMonth();
  result.setMonth(month + monthDuration)


  return {
    year: result.getFullYear(),
    monthName: getMonthName(result),
    self: result
  }
} 

const InputMonth: FC<InputMonthProps> = ({ label, value = 0, onValueChange, onChange, ...restProps }) => {
  const date = getDateData(value, new Date());
  const isDisabled = monthDiff(date.self) === 1;

  const goPrev = () => {
    onValueChange(value - 1);
  }

  const goNext = () => {
    onValueChange(value + 1);
  }

  return (
    <div className='relative' data-testid={`${restProps['data-testid']}-cnt`}>
      <button data-testid={`${restProps['data-testid']}-prev`} type='button' disabled={isDisabled} className={classNames('absolute h-6 w-6 left-2 inset-y-0 mt-[43px] rounded-[5px] transition-all', { ['opacity-20']: isDisabled, ['hover:bg-[#F3F5FE]']: !isDisabled })} onClick={goPrev}>
        <ChevronLeft />
      </button>
      <button data-testid={`${restProps['data-testid']}-next`} type='button' className='absolute h-6 w-6 right-2 inset-y-0 mt-[43px] rounded-[5px] hover:bg-[#F3F5FE] transition-colors active:bg-[#E8EAF2] aria-pressed:bg-[#E8EAF2]' onClick={goNext}>
        <ChevronRight />
      </button>

      <div className='absolute mt-[14px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <p data-testid={`${restProps['data-testid']}-month`} className='rubik font-medium leading-5 text-base text-[#595D7B]'>{date.monthName}</p>
        <p data-testid={`${restProps['data-testid']}-year`} className='font-normal leading-4 text-xs text-[#595D7B]'>{date.year}</p>
      </div>

      <Label text={label}>
        <div className='rounded box-border border border-solid transition-colors pointer-events-none border-[#E9EEF2] p-4 pl-10 h-[60px]' />
        <input type="hidden" disabled value={value} {...restProps} data-testid={`${restProps['data-testid']}-input`} />
      </Label>
    </div>
  );
}

export default InputMonth;