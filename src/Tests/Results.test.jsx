import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResultsPage from './ResultsPage';

describe('ResultsPage', () => {
  it('renders the congratulations message', () => {
    render(<ResultsPage />);
    expect(screen.getByText('¡Congratulations!')).toBeInTheDocument();
  });

  it('renders the Header component', () => {
    render(<ResultsPage />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the ResultsCard component', () => {
    render(<ResultsPage />);
    expect(screen.getByText('English test')).toBeInTheDocument();
    expect(screen.getByText('C1 - Avanzado')).toBeInTheDocument();
  });

  it('renders the ScoreMeaning component', () => {
    render(<ResultsPage />);
    expect(screen.getByText('WHY DOES MY SCORE MEAN?')).toBeInTheDocument();
  });

  it('renders the RadarChart component', () => {
    render(<ResultsPage />);
    expect(screen.getByText('Grammar')).toBeInTheDocument();
    expect(screen.getByText('Listening')).toBeInTheDocument();
    expect(screen.getByText('Vocabulary')).toBeInTheDocument();
    expect(screen.getByText('Reading')).toBeInTheDocument();
  });
});