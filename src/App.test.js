import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing and shows the owner name', () => {
    const { container } = render(<App />);
    expect(container.textContent).toMatch(/Nafiz/i);
  });
});
