import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PageTitle } from '../../components';

describe('PageTitle', () => {
  test('renders page title component', () => {
    const title = 'Test Title';
    const { getByText } = render(<PageTitle title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
