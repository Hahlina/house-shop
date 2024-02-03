import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import { Image } from 'common/components';

import { APP_ROUTES } from 'common/constants';
import { ErrorInfoStyled, ErrorPageStyled, ErrorContent } from './ErrorPage.styled';

export const ErrorPage = () => (
    <ErrorPageStyled>
        <ErrorContent>
            <Image src="/images/404.png" />
            <ErrorInfoStyled>
                <Typography className="code">Opps...404</Typography>
                <Link to={APP_ROUTES.HOME}>
                    <Button variant="contained" color="error">
                        Go home
                    </Button>
                </Link>
            </ErrorInfoStyled>
        </ErrorContent>
    </ErrorPageStyled>
);
