export interface IProperty {
    id: string;
    title: string;
    price: number;
    address: string;
    preview_image: string;
}

export type TPropertyList = IProperty[];

export interface IPropertyDetail {
    id: string | null;
    title: string | null;
    price: number | null;
    address: string | null;
    preview_image: string | null;
    photos: string[] | null;
    description: string | null;
    seller: string | null;
}
