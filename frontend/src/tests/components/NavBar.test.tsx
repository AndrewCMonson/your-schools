import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../../components';

describe('NavBar', () => {
  test('renders nav bar component', () => {

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });
});
