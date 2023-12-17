import { fireEvent, render } from '@testing-library/react';
import {filterNumbers} from './InputMoney';
import InputMoney from './InputMoney';

describe('filterNumbers', () => {
  it('giving an empty string returns undefined', () => {
    expect(filterNumbers('')).toEqual(undefined);
  });

  it('giving only whitespaces returns undefined', () => {
    expect(filterNumbers('  ')).toEqual(undefined);
  });

  it('giving only special signs returns undefined', () => {
    expect(filterNumbers('!@#$%^&*()_+')).toEqual(undefined);
  });

  it('giving 0 returns undefined', () => {
    expect(filterNumbers('0')).toEqual(undefined);
  });

  it('giving -2 returns 2', () => {
    expect(filterNumbers('-2')).toEqual(2);
  });

  it('giving Infinity string returns undefined', () => {
    expect(filterNumbers('Infinity')).toEqual(undefined);
  });

  it('giving NaN string returns undefined', () => {
    expect(filterNumbers('NaN')).toEqual(undefined);
  });

  it('giving 2 returns 2', () => {
    expect(filterNumbers('2')).toEqual(2);
  });

  it('giving 02 returns 2', () => {
    expect(filterNumbers('02')).toEqual(2);
  });

  it('giving 22 with string returns 22', () => {
    expect(filterNumbers('22!@#SADasdą')).toEqual(22);
  });

  it('giving 303 with string returns 303', () => {
    expect(filterNumbers('303!@#SADasdą')).toEqual(303);
  });

  it('giving a string with 3204 returns 3204', () => {
    expect(filterNumbers('!@#SADasdą3204')).toEqual(3204);
  });

  it('giving 3204 in the middle of string returns 3204', () => {
    expect(filterNumbers('!@#SADasdą3204!@#SADasdą')).toEqual(3204);
  });

  it('giving 32 in the middle of string and 04 after returns 3204', () => {
    expect(filterNumbers('!@#SADasdą32!@#SADasdą04!@#SADasdą')).toEqual(3204);
  });
})

describe('<InputMoney />', () => {
  const props = {
    label: "My label",
    value: 1,
    onValueChange: () => {},
    'data-testid': 'money'
  }

  test('shows correct value', () => {
    const { getByTestId } = render(<InputMoney {...props}/>);

    expect(getByTestId('money')).toHaveValue('1');
  });

  test('shows value with commas', () => {
    const { getByTestId } = render(<InputMoney {...props} value={1999000}/>);

    expect(getByTestId('money')).toHaveValue('1,999,000');
  });

  test('run onChange func', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(<InputMoney {...props} onValueChange={mockFn}/>);
    fireEvent.change(getByTestId('money'), {target: {value: 20}})
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});