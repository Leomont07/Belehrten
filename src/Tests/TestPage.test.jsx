import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EnglishTest from './EnglishTest';

describe('EnglishTest', () => {
  it('renders the English Test title', () => {
    render(<EnglishTest />);
    expect(screen.getByText('English Test')).toBeInTheDocument();
  });

  it('renders the question', () => {
    render(<EnglishTest />);
    expect(screen.getByText('¿Lorem ipsum dolor sit amet consectetur?')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<EnglishTest />);
    expect(screen.getByAltText('Previous question')).toBeInTheDocument();
    expect(screen.getByAltText('Next question')).toBeInTheDocument();
  });
});