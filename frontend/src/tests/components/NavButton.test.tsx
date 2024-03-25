import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavButton } from '../../components';

describe('NavButton', () => {
  test('renders nav button component with correct link', () => {
    const name = 'Test Button';
    const link = '/test';
    const { getByText } = render(
			<MemoryRouter>
				<NavButton name={name} link={link} />
			</MemoryRouter>
		);
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(name).closest('a')).toHaveAttribute('href', link);
  });
});