import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('renders', () => {
    render(<Header />);
  });

  test('contains logo', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toContainElement(getByTestId('logo'));
  });
});
