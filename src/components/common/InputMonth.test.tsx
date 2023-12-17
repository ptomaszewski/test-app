import { fireEvent, render } from '@testing-library/react';
import {getMonthName, getDateData, monthDiff} from './InputMonth';
import InputMonth from './InputMonth';

describe('getMonthName', () => {
  it('giving 2023-01-01 returns January', () => {
    const mockDate = new Date('2023-01-01')
    expect(getMonthName(mockDate)).toEqual('January');
  });

  it('giving 2023-03-01 returns March', () => {
    const mockDate = new Date('2023-03-01')
    expect(getMonthName(mockDate)).toEqual('March');
  });

  it('giving 2023-08-01 returns August', () => {
    const mockDate = new Date('2023-08-01')
    expect(getMonthName(mockDate)).toEqual('August');
  });

  it('giving 2023-12-01 returns December', () => {
    const mockDate = new Date('2023-12-01')
    expect(getMonthName(mockDate)).toEqual('December');
  });
});

describe('monthDiff', () => {
  it('giving 1 and 2 returns 1', () => {
    const mockDate1 = new Date('2023-01-01')
    const mockDate2 = new Date('2023-02-01')
    expect(monthDiff(mockDate2, mockDate1)).toEqual(1);
  });

  it('giving 2 and 1 returns -1', () => {
    const mockDate1 = new Date('2023-02-01')
    const mockDate2 = new Date('2023-01-01')
    expect(monthDiff(mockDate2, mockDate1)).toEqual(-1);
  });

  it('giving 7 and 7 returns 0', () => {
    const mockDate1 = new Date('2023-07-01')
    const mockDate2 = new Date('2023-07-01')
    expect(monthDiff(mockDate2, mockDate1)).toEqual(0);
  });

  it('giving 12.23 and 3.24 returns 3', () => {
    const mockDate1 = new Date('2023-12-01')
    const mockDate2 = new Date('2024-03-01')
    expect(monthDiff(mockDate2, mockDate1)).toEqual(3);
  });

  it('giving 3.24 and 12.23 returns -3', () => {
    const mockDate1 = new Date('2024-03-01')
    const mockDate2 = new Date('2023-12-01')
    expect(monthDiff(mockDate2, mockDate1)).toEqual(-3);
  });
});

describe('getDateData', () => {
  const mockDate = new Date('2022-01-01')
  const mockDuration = 1;
  describe('giving 1 and 1.22', () => {
    it('returns 2022 year', () => {
      expect(getDateData(mockDuration, mockDate).year).toEqual(2022);
    });

    it('returns January month name', () => {
      expect(getDateData(mockDuration, mockDate).monthName).toEqual('February');
    });

    it('returns self exist', () => {
      expect(getDateData(mockDuration, mockDate).self instanceof Date).toBeTruthy();
    });
  })
})

describe('<InputMonth />', () => {
  const props = {
    label: "My label",
    value: 3,
    onValueChange: () => {},
    'data-testid': 'month'
  }

  const testIds = {
    input: `${props['data-testid']}-input`,
    month: `${props['data-testid']}-month`,
    year: `${props['data-testid']}-year`,
    next: `${props['data-testid']}-next`,
    prev: `${props['data-testid']}-prev`,
  }

  beforeEach(() => {
    const mockedDate = new Date(2024, 2, 1);

    jest.useFakeTimers("modern");
    jest.setSystemTime(mockedDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('shows correct value', () => {
    const { getByTestId } = render(<InputMonth {...props}/>);

    expect(getByTestId(testIds.input)).toHaveValue(`${props.value}`);
    expect(getByTestId(testIds.month)).toHaveTextContent('June');
    expect(getByTestId(testIds.year)).toHaveTextContent('2024');
  });

  test('run onChange func on next', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(<InputMonth {...props} onValueChange={mockFn}/>);
    fireEvent.click(getByTestId(testIds.next))
    expect(mockFn).toHaveBeenCalledWith(props.value + 1);
  });

  test('run onChange func on prev', () => {
    const mockFn = jest.fn()
    const { getByTestId } = render(<InputMonth {...props} onValueChange={mockFn}/>);
    fireEvent.click(getByTestId(testIds.prev))
    expect(mockFn).toHaveBeenCalledWith(props.value - 1);
  });
});