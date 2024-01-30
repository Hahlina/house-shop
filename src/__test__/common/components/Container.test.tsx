import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import { Container } from 'common/components/Container/Container';

describe('Container components', () => {
    let children: ReactNode;

    beforeEach(() => {
        children = <p>Children</p>;
    });

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

    it('should math snapshot without children', () => {
        render(<Container />);
        const containerElement = screen.queryByTestId('container-id');
        expect(containerElement).toMatchSnapshot();
    });

    it('should math snapshot with children', () => {
        render(<Container>{children}</Container>);
        const containerElement = screen.queryByTestId('container-id');
        expect(containerElement).toMatchSnapshot();
    });
});
