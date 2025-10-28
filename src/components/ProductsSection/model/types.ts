export type CategoryKey = 'cake' | 'bento' | 'desert';

export interface CategoryItem {
    label: string;
    image: string;
}

export interface ProductCategory {
    title: string;
    description: string;
    items: CategoryItem[];
}

export type ProductCategories = Record<CategoryKey, ProductCategory>;

export interface CategoryMeta {
    category: string;
    key: CategoryKey;
    description: string;
    image: string;
}


