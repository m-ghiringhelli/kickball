import { render, screen } from '@testing-library/react';
import App from './App';

test('contains home', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
