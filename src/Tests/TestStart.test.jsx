import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import DashboardUser from './DashboardUser';

test('renders DashboardUser component', () => {
  render(<DashboardUser />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});

test('renders dashboard illustration', () => {
  render(<DashboardUser />);
  const illustration = screen.getByAltText('Dashboard illustration');
  expect(illustration).toBeInTheDocument();
});