import type { ReactNode } from 'react';

import { Container } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('Container components', () => {
    const children: ReactNode = <p>Children</p>;

    it('should render children', () => {
        render(<Container>{children}</Container>);
        const textInContainer = screen.getByText(/children/i);
        expect(textInContainer).toBeInTheDocument();
    });

    it('should render without children', () => {
        render(<Container />);
        const containerElement = screen.queryByTestId('container-id');
        expect(containerElement).toBeInTheDocument();
    });

    it('should take a snapshot without children', () => {
        const { container } = render(<Container />);
        expect(container).toMatchSnapshot();
    });

    it('should take a snapshot with children', () => {
        const { container } = render(<Container>{children}</Container>);
        expect(container).toMatchSnapshot();
    });
});
