
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import NotificationsAndReminders from './NotificationsAndReminders';

test('renders NotificationsAndReminders component', () => {
  render(<NotificationsAndReminders />);
  
  const headingElement = screen.getByText(/Notificaciones/i);
  expect(headingElement).toBeInTheDocument();

  const notificationItems = screen.getAllByText(/Este contenido podría interesarte/i);
  expect(notificationItems).toHaveLength(4);
});