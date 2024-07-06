import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ThankYou from '@/app/english-reading-basic-a1/thank-you/page';
 
describe('ThankYou', () => {
  it('renders a link', () => {
    render(<ThankYou />);
 
    const link = screen.getByRole('link', { name: /Welcome Page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/')
  })
})