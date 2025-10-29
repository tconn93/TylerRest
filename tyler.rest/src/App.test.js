import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tyler Rest title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Tyler Rest/i);
  expect(titleElement).toBeInTheDocument();
});
