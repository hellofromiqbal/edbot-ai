import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CustomTabPanel from '@/components/CustomTabPanel/CustomTabPanel';

describe('CustomTabPanel', () => {
  it('renders children when selected', () => {
    const index = 0;
    const value = 0;

    render(
      <CustomTabPanel index={index} value={value}>
        <div>Tab Panel Content</div>
      </CustomTabPanel>
    );

    // Check if the panel is visible when selected
    const tabPanel = screen.getByRole('tabpanel', { hidden: false });
    expect(tabPanel).toBeInTheDocument();

    // Verify the content is rendered when the tab is selected
    const panelContent = screen.getByText('Tab Panel Content');
    expect(panelContent).toBeInTheDocument();
  });
});
