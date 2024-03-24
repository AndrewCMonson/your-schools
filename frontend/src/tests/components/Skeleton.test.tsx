import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from '../../components';

describe('Skeleton', () => {
  test('renders skeleton', () => {
    render(<Skeleton />);
  });
});