export const mockProperty = {
    address: '123 Main St',
    preview_image: 'image.jpg',
    price: 100000,
    title: 'Beautiful House',
    id: '123'
};

export const mockProperties = [
    {
        address: '3 Main Staks',
        preview_image: 'image.jpg',
        price: 100000,
        title: 'Beautiful House',
        id: '1'
    },
    {
        address: '123 Main St',
        preview_image: 'image_2.jpg',
        price: 6600000,
        title: 'Less Beautiful House',
        id: '2'
    },
    {
        address: 'USA',
        preview_image: 'image_2.jpg',
        price: 300000,
        title: 'More Beautiful House',
        id: '3'
    }
];

export const mockPropertiesDetail = [
    {
        id: '1',
        title: 'Cozy House near the Forest',
        price: 250000,
        address: 'Green Street, 123',
        preview_image: 'preview.jpg',
        photos: ['photo1.jpg', 'photo2.jpg'],
        description: 'A charming house nestled near a beautiful forest. Perfect for nature lovers.',
        seller: 'John Doe'
    },
    {
        id: '2',
        title: 'Luxurious Penthouse in the City Center',
        price: 800000,
        address: 'Independence Square, 1',
        preview_image: 'preview2.jpg',
        photos: ['photo1.jpg', 'photo2.jpg'],
        description: 'An upscale penthouse with stunning views of the city center.',
        seller: 'Jane Smith'
    }
];

export const mockPropertyDetail = mockPropertiesDetail[0];

export const mockCustomPathNames = [
    { name: 'Page 1', to: '/page1' },
    { name: 'Page 2', to: '/page1/page2' }
];

export const mockPathName = '/page1/page2';

export const mockCustomLinkProps = { target: '_blank' };

export const mockReduxStore = {
    properties: {
        data: mockProperties,
        loading: false,
        error: null
    },
    propertyDetail: {
        data: mockPropertyDetail,
        loading: false,
        error: null
    }
};
