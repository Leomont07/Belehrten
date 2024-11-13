import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RegistrationPage from './RegistrationPage';

describe('RegistrationPage', () => {
  it('renders without crashing', () => {
    render(<RegistrationPage />);
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });

  it('displays the registration form', () => {
    render(<RegistrationPage />);
    expect(screen.getByPlaceholderText('Ingresa tu correo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirmar Contraseña')).toBeInTheDocument();
  });

  it('shows the side image', () => {
    render(<RegistrationPage />);
    const sideImage = screen.getByAltText('Registration illustration');
    expect(sideImage).toBeInTheDocument();
  });

  it('displays the header with navigation items', () => {
    render(<RegistrationPage />);
    expect(screen.getByText('English test')).toBeInTheDocument();
    expect(screen.getByText('Plan de estudio')).toBeInTheDocument();
    expect(screen.getByText('Herramientas')).toBeInTheDocument();
  });
});