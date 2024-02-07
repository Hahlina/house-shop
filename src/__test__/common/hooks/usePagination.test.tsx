import { usePagination } from 'common/hooks';

import { renderHook, act } from 'common/utils/test';

describe('usePagination', () => {
    const initialPage = 1;
    const itemsPerPage = 10;
    const totalItems = 30;

    it('should initialize with correct values', () => {
        const { result } = renderHook(() => usePagination({ initialPage, itemsPerPage, totalItems }));
        expect(result.current.activePage).toBe(initialPage);
    });

    it('should update activePage when setActivePage is called', () => {
        const { result } = renderHook(() => usePagination({ initialPage, itemsPerPage, totalItems }));
        const newActivePage = 2;
        act(() => {
            result.current.setActivePage(newActivePage);
        });
        expect(result.current.activePage).toBe(newActivePage);
    });

    it('should recalculate pagesNumber when totalItems changes', () => {
        const { result, rerender } = renderHook(
            ({ totalItems }) => usePagination({ initialPage, itemsPerPage, totalItems }),
            { initialProps: { totalItems: 30 } }
        );
        const newTotalItems = 40;
        rerender({ totalItems: newTotalItems });
        expect(result.current.pagesNumber).toBe(Math.ceil(newTotalItems / itemsPerPage));
    });

    it('should take a snapshot', () => {
        const { result } = renderHook(() => usePagination({ initialPage, itemsPerPage, totalItems }));
        expect(result).toMatchSnapshot();
    });
});
