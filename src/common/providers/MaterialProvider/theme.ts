import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'rectangular' && {
                        transform: 'scale(1, 1)',
                        borderRadius: 10
                    }),
                    height: 50,
                    animation: 'wave'
                })
            }
        }
    }
});
