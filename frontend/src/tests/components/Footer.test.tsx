import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../components';

describe('Footer', () => {
  test('renders footer', () => {
    render(<Footer />);
  });
});

describe('Footer', () => {
  test('renders footer links', () => {
    render(<Footer />);
    const aboutUs = screen.getByText('About Us');
    const contactUs = screen.getByText('Contact Us');
    expect(aboutUs).toBeInTheDocument();
    expect(contactUs).toBeInTheDocument();
  })
});

describe('Footer', () => {
  test('footer links have correct href', () => {
    render(<Footer />);
    const aboutUs = screen.getByText('About Us');
    const contactUs = screen.getByText('Contact Us');
    expect(aboutUs).toHaveAttribute('href', '#');
    expect(contactUs).toHaveAttribute('href', '#');
  })
});

describe('Footer', () => {
  test('renders current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const year = screen.getByText(`© ${currentYear} YourSchools`);
    expect(year).toBeInTheDocument();
  })
})
