import { render, screen } from '@testing-library/react';
import App from './App';
test('renders portfolio work and contact link',()=>{render(<App/>);expect(screen.getByText('SignalForge Health AI')).toBeInTheDocument();expect(screen.getByText('Projects with a purpose.')).toBeInTheDocument();expect(screen.getByRole('link',{name:'Get in touch'})).toHaveAttribute('href','mailto:tayllor.robertson@gmail.com');});
