import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { Rating } from '../../components';

describe('Rating', () => {
  test('renders rating component', () => {
    const ratingData = 4.5;
    render(<Rating value={ratingData} />);
  });
});

