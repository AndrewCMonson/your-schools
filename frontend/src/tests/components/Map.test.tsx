import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { GoogleMap } from '../../components';

describe('Map', () => {
  test('renders map', () => {
    const location = {
      name: 'Location',
      address: 'Address',
      latitude: 0,
      longitude: 0,
    }

    render(<GoogleMap location={location}/>);
  });
});
