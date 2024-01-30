import { FullInformationCard } from 'modules/propertyDetailContent/components';

import { render, screen, mockPropertyDetail } from 'common/utils/test';

describe('FullInformationCard component', () => {
    it('should render description correctly', () => {
        const { description } = mockPropertyDetail;
        render(<FullInformationCard {...mockPropertyDetail} />);
        expect(screen.getByText(`Description: ${description}`)).toBeInTheDocument();
    });

    it('should display converted price in USD format', () => {
        render(<FullInformationCard {...mockPropertyDetail} />);
        expect(screen.getByText('$250,000.00')).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<FullInformationCard {...mockPropertyDetail} />);
        expect(container).toMatchSnapshot();
    });
});
