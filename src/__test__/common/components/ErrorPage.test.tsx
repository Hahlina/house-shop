import { ErrorPage } from 'common/components';

import { renderWithRoutes, screen } from 'common/utils/test';
import { APP_ROUTES } from 'common/constants';

describe('ErrorPage component', () => {
    it('should renders the ErrorPage with the 404 image', () => {
        renderWithRoutes(<ErrorPage />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    it('should renders the ErrorPage with the correct error code', () => {
        renderWithRoutes(<ErrorPage />);
        const errorCode = screen.getByText(/404/i);
        expect(errorCode).toBeInTheDocument();
    });

    it('should renders the ErrorPage with the "Go home" button', () => {
        renderWithRoutes(<ErrorPage />);
        const goHomeButton = screen.getByRole('button', { name: /go home/i });
        expect(goHomeButton).toBeInTheDocument();
    });

    it('should renders the ErrorPage with a link to the home page', () => {
        renderWithRoutes(<ErrorPage />);
        const goHomeButton = screen.getByRole('button', { name: /go home/i });
        expect(goHomeButton.closest('a')).toHaveAttribute('href', APP_ROUTES.HOME);
    });

    it('should take a snapshot', () => {
        const { container } = renderWithRoutes(<ErrorPage />);
        expect(container).toMatchSnapshot();
    });
});
