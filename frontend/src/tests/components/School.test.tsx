import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { School } from '../../components';

describe('School', () => {
  test('renders school', () => {
    const schoolData = {
      id: 'string',
      name: 'School Name',
      address: 'School Address',
      city: 'School City',
      state: 'School State',
      zipcode: '12345',
      phone: '1234567890',
      rating: 5,
      max_tuition: 1000,
    }
    render(
      <MemoryRouter>
        <School school={schoolData} />
      </MemoryRouter>);
  });
});

describe('School', () => {
  test("school contains correct data", () => {
    const schoolData = {
      id: 'string',
      name: 'School Name',
      address: 'School Address',
      city: 'School City',
      state: 'School State',
      zipcode: '12345',
      phone: '1234567890',
      rating: 5,
      max_tuition: 1000,
    }
    const { getByText } = render(
      <MemoryRouter>
        <School school={schoolData} />
      </MemoryRouter>);
    expect(getByText('School Name')).toBeTruthy();
    expect(getByText('School Address')).toBeTruthy();
    expect(getByText('School City, School State 12345')).toBeTruthy();
    expect(getByText('1234567890')).toBeTruthy();
    expect(getByText('$$$$')).toBeTruthy();
  })
});

describe('School', () => {
  test('Visit School Page has correct link', () => {
    const schoolData = {
      id: 'string',
      name: 'School Name',
      address: 'School Address',
      city: 'School City',
      state: 'School State',
      zipcode: '12345',
      phone: '1234567890',
      rating: 5,
      max_tuition: 1000,
    }
    const { getByText } = render(
      <MemoryRouter>
        <School school={schoolData} />
      </MemoryRouter>);
    expect(getByText('Visit School Page').closest('a')).toHaveAttribute('href', '/schools/string');
  })
});