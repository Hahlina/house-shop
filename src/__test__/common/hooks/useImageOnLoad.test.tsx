import { useImageOnLoad } from 'common/hooks';
import { renderHook, act } from 'common/utils/test';

describe('useImageOnLoad', () => {
    it('should set isLoaded to true after handling image onLoad', () => {
        const { result } = renderHook(() => useImageOnLoad());
        act(() => {
            result.current.handleImageOnLoad();
        });
        expect(result.current.isLoaded).toBe(true);
    });

    it('should set thumbnail visibility to hidden after handling image onLoad', () => {
        const { result } = renderHook(() => useImageOnLoad());
        act(() => {
            result.current.handleImageOnLoad();
        });
        expect(result.current.css.thumbnail.visibility).toBe('hidden');
    });

    it('should set fullSize opacity to 1 after handling image onLoad', () => {
        const { result } = renderHook(() => useImageOnLoad());
        act(() => {
            result.current.handleImageOnLoad();
        });
        expect(result.current.css.fullSize.opacity).toBe(1);
    });

    it('should set thumbnail visibility to visible before handling image onLoad', () => {
        const { result } = renderHook(() => useImageOnLoad());
        expect(result.current.css.thumbnail.visibility).toBe('visible');
    });

    it('should set fullSize opacity to 0 before handling image onLoad', () => {
        const { result } = renderHook(() => useImageOnLoad());
        expect(result.current.css.fullSize.opacity).toBe(0);
    });

    it('should take a snapshot', () => {
        const { result } = renderHook(() => useImageOnLoad());
        expect(result).toMatchSnapshot();
    });
});
