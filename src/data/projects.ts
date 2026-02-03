
export interface Project {
    slug: string;
    title: string;
    city: string;
    area: number;
    style: string;
    year: number;
    category: string;
    cover: string;
    images: string[];
    tags: string[];
    description: string;
}

export const projects: Project[] = [
    {
        slug: "residence-barvikha",
        title: "Резиденция в Барвихе",
        city: "Москва",
        area: 450,
        style: "Минимализм",
        year: 2024,
        category: "Загородный дом",
        cover: "https://images.unsplash.com/photo-1600596542815-3ad195bb4a77?auto=format&fit=crop&q=80&w=1200",
        images: [
            "https://images.unsplash.com/photo-1600596542815-3ad195bb4a77?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
        ],
        tags: ["Минимализм", "Дом", "Бассейн"],
        description: "Просторная резиденция в окружении соснового леса. Основная задача — стереть границу между интерьером и природой."
    },
    {
        slug: "penthouse-neva",
        title: "Пентхаус на Неве",
        city: "Санкт-Петербург",
        area: 280,
        style: "Современный",
        year: 2023,
        category: "Пентхаус",
        cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"],
        tags: ["Видовой", "Терраса", "Премиум"],
        description: "Двухуровневый пентхаус с панорамным остеклением и видом на акваторию Невы."
    },
    {
        slug: "apartment-sadovaya",
        title: "Квартира на Садовой",
        city: "Москва",
        area: 110,
        style: "Джапанди",
        year: 2024,
        category: "Апартаменты",
        cover: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=1200"],
        tags: ["Тишина", "Уют", "Натуральные материалы"],
        description: "Оазис спокойствия в шумном мегаполисе. Светлые тона и тактильные материалы."
    },
    {
        slug: "office-city",
        title: "Офис IT-компании",
        city: "Дубай",
        area: 1200,
        style: "Хай-тек",
        year: 2023,
        category: "Коммерция",
        cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"],
        tags: ["Офис", "Инновации", "Свет"],
        description: "Современное рабочее пространство, способствующее коллаборации и творчеству."
    },
    {
        slug: "villa-sochi",
        title: "Вилла в Сочи",
        city: "Сочи",
        area: 600,
        style: "Средиземноморский",
        year: 2022,
        category: "Вилла",
        cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"],
        tags: ["Море", "Отдых", "Горы"],
        description: "Летняя резиденция для большой семьи с видом на море и горы."
    },
    {
        slug: "loft-red-october",
        title: "Лофт Красный Октябрь",
        city: "Москва",
        area: 150,
        style: "Индастриал",
        year: 2023,
        category: "Лофт",
        cover: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
        images: ["https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"],
        tags: ["Кирпич", "История", "Арт"],
        description: "Брутальный лофт в историческом здании кондитерской фабрики."
    }
];
