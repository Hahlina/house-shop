export interface IProperty {
    id: string;
    title: string;
    price: number | null;
    address: string;
    preview_image: string;
}

export type TPropertyList = IProperty[];

export interface IPropertyDetail extends IProperty {
    preview_image: string;
    photos: string[];
    description: string;
    seller: string;
}
