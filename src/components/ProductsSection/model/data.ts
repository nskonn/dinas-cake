import { CategoryMeta, ProductCategories } from './types';

export const categories: CategoryMeta[] = [
    {
        category: 'Торты',
        key: 'cake',
        description: 'Элегантные многоярусные торты для вашего идеального дня',
        image:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2689&q=80',
    },
    {
        category: 'Бенто-торты',
        key: 'bento',
        description: 'Индивидуальные дизайны, которые делают дни рождения незабываемыми',
        image:
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    },
    {
        category: 'Десерты',
        key: 'desert',
        description: 'Лакомства, идеальные для любого мероприятия',
        image:
            'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    },
];

export const productCategories: ProductCategories = {
    cake: {
        title: 'Торты',
        description:
            'Авторские торты для особых случаев - свадебные, на дни рождения и другие праздники',
        items: [
            {
                label: 'Сникерс',
                image:
                    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
            },
        ],
    },
    desert: {
        title: 'Десерты',
        description:
            'Лакомства, идеальные для любого мероприятия',
        items: [
            {
                label: 'Сникерс',
                image:
                    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
            },
        ],
    },
    bento: {
        title: 'Бенто-торты',
        description:
            'Индивидуальные дизайны, которые делают дни рождения незабываемыми',
        items: [
            {
                label: 'Сникерс',
                image:
                    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
            },
        ],
    },
};


