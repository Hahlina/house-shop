import { type CSSProperties, useState } from 'react';

interface ImageStyle {
    thumbnail: CSSProperties;
    fullSize: CSSProperties;
}

interface ImageOnLoadType {
    handleImageOnLoad: () => void;
    css: ImageStyle;
    isLoaded: boolean;
}

export const useImageOnLoad = (): ImageOnLoadType => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const handleImageOnLoad = () => {
        setIsLoaded(true);
    };

    const css: ImageStyle = {
        thumbnail: {
            visibility: isLoaded ? 'hidden' : 'visible',
            transition: 'visibility 200ms ease-out 700ms'
        },
        fullSize: {
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 800ms ease-in 0ms'
        }
    };

    return { isLoaded, handleImageOnLoad, css };
};
