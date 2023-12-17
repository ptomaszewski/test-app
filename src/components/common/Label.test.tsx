import { render } from '@testing-library/react';
import Label from './Label';

describe('<Label />', () => {
  const props = {
    text: "My label",
    'data-testid': 'label-test'
  }

  test('text is correct', () => {
    const { getByTestId } = render(<Label {...props}/>);
    expect(getByTestId(props['data-testid'])).toHaveTextContent(props.text);
  });
});