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
        "slug": "gostevoy-dom",
        "title": "Гостевой дом",
        "city": "Москва",
        "area": 171,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-10.jpg",
        "images": [
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-10.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-11.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-12.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-14.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-16.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-17.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-18.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-19.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-20.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-21.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-22.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-23.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-24.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-25.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-26.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-27.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-29.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-30.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-31.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-6.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-7.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-8.jpg",
            "/%D0%93%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9%20%D0%B4%D0%BE%D0%BC/New%20house_album_last-compressed-9.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "zagorodnyy-dom-na-volge",
        "title": "Загородный дом на Волге",
        "city": "Москва",
        "area": 201,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D0%BA%D1%83%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F%20%D1%84%D0%B8%D0%BD%203.jpg",
        "images": [
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D0%BA%D1%83%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F%20%D1%84%D0%B8%D0%BD%203.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D0%BA%D1%83%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F%20%D1%84%D0%B8%D0%BD%204%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%202%20%D0%B2%D0%B0%D1%80%201.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%203%20%D0%B2%D0%B0%D1%80%201.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%204%20%D0%B2%D0%B0%D1%80%201.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%20%D0%B2%D0%B0%D1%80%2011.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%20%D0%B2%D0%B0%D1%80%2015.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%20%D0%B2%D0%B0%D1%80%2016.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%20%D0%B2%D0%B0%D1%80%2017.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%20%D0%B2%D0%B0%D1%80%2018.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%83%D0%B3%D0%BB%D0%B8%D1%87%20%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F%202%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%20%D1%84%D0%B8%D0%BD%202%20-%20%D0%BF%D1%80%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20-%202.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%20%D1%84%D0%B8%D0%BD%202%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1).jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%20%D1%84%D0%B8%D0%BD%202%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%BE%D0%BC%20%D0%BD%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B5/%D1%85%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%20%D1%84%D0%B8%D0%BD3%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kvartira-dlya-molodoy-sem-i",
        "title": "Квартира для молодой семьи",
        "city": "Москва",
        "area": 128,
        "style": "Современный",
        "year": 2024,
        "category": "Апартаменты",
        "cover": "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/1.jpg",
        "images": [
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/1.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/10.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/11.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/12.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/13.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/14.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/15.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/16.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/17.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/18.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/19.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/2.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/20.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/21.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/22.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/23.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/24.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/3.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/4.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/7.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/8.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/9.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D1%81%D0%B5%D0%BC%D1%8C%D0%B8/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0%20%D0%B2%20%D0%A1%D0%9F%D0%91_%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%203D-6.jpg"
        ],
        "tags": [
            "Апартаменты",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kvartira-dlya-molodoy-devushki",
        "title": "Квартира  для молодой девушки",
        "city": "Москва",
        "area": 201,
        "style": "Современный",
        "year": 2024,
        "category": "Апартаменты",
        "cover": "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80_%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F4%D0%BD.jpg",
        "images": [
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80_%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F4%D0%BD.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80_%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F_7.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80%D0%B3%D0%BE%D1%813.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80%D0%B3%D0%BE%D1%814.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/292%D1%87%D1%80%D0%B3%D0%BE%D1%815.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F1.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F2.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F1.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F2.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F3.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%81%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F4.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%85%D0%BE%D0%BB%D0%BB1.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8/%D0%A7%D0%A0292_%D1%85%D0%BE%D0%BB%D0%BB2.jpg"
        ],
        "tags": [
            "Апартаменты",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kvartira-jk-chernaya-rechka",
        "title": "Квартира ЖК Черная речка",
        "city": "Москва",
        "area": 253,
        "style": "Современный",
        "year": 2024,
        "category": "Апартаменты",
        "cover": "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/11.jpg",
        "images": [
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/11.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/13.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/15.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/16-2.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/16-33.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/16.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/17.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/18.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/2.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/20.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/21.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/22.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/23.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/4.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/43.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/47.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/5.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/6.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/7.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/8.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%96%D0%9A%20%D0%A7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B5%D1%87%D0%BA%D0%B0/9.jpg"
        ],
        "tags": [
            "Апартаменты",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kvartira-petrovskiy-ostrov",
        "title": "Квартира Петровский остров",
        "city": "Москва",
        "area": 187,
        "style": "Современный",
        "year": 2024,
        "category": "Апартаменты",
        "cover": "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_01.jpg",
        "images": [
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_01.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_02.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_05.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_06.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_07.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_12.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_13.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2/3D_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-2%D0%BA%20(1)_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_03_%D0%A1%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_14.jpg"
        ],
        "tags": [
            "Апартаменты",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kvartira-smol-nyy",
        "title": "Квартира Смольный",
        "city": "Санкт-Петербург",
        "area": 259,
        "style": "Современный",
        "year": 2024,
        "category": "Апартаменты",
        "cover": "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/Gjcnhb_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_1%20%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
        "images": [
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/Gjcnhb_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_1%20%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View010000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View020000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View040000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View060000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View120000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View140000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View150000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/kg%2Bprih_View160000_Post.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_1.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_3.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_4-2%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_5.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%93%D0%B0%D1%80%D0%B4_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_2%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F%206.JPG",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_4.jpg",
            "/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D0%B0_%D0%A1%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9/%D0%A1%D0%BF%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F_%D1%81%D0%BC%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_1%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.jpg"
        ],
        "tags": [
            "Апартаменты",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kottedj-kazan",
        "title": "Коттедж  Казань",
        "city": "Казань",
        "area": 158,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/10295039_891751984201082_5108515464261219526_o.jpg",
        "images": [
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/10295039_891751984201082_5108515464261219526_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/25073059_1616404171735856_3615788745261325218_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/25073392_1616404248402515_2493442636749077676_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/27500730_1668833366492936_6870850173158253889_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/27503561_1670121656364107_3738282525121779764_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/27624987_1670121736364099_1607106172002019283_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/27628914_1670121856364087_5215002221833834966_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/27709781_1670121909697415_4315667854173924287_o.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/43565385_1987245057985097_5713752395830263808_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/43635905_1987245554651714_7416045031284277248_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44764840_1987244704651799_1526790633832841216_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44787247_1987244937985109_7661071188944224256_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44788963_1987245851318351_388305819977908224_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44797790_1987244741318462_4681941736245690368_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44903144_1987245751318361_2794574102399025152_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44905866_1987242897985313_6286995453124804608_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/44930583_1987243021318634_2058854008549801984_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/65312901_2354377154605217_2190956087199399936_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/65452324_2354380667938199_1236232402586566656_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/80982051_2721655204544075_3476294616112693248_n.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20_%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C/81567280_2721655477877381_288219295136088064_n.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kottedj-v-papushevo",
        "title": "Коттедж в Папушево",
        "city": "Москва",
        "area": 171,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/1-1.jpg",
        "images": [
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/1-1.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/1-7.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/11.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/12.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/16.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/18.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/19.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/2.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/26.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/28.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/29.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/3.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/30.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/40.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/41.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/5.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6%20%D0%B2%20%D0%9F%D0%B0%D0%BF%D1%83%D1%88%D0%B5%D0%B2%D0%BE/g21.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kottedj-klassika",
        "title": "Коттедж классика",
        "city": "Москва",
        "area": 103,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/1.jpg",
        "images": [
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/1.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/15f94eef-83f0-42f6-9406-bf4e928da0c6.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/3%20%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/3Bahroom%20201_Camera%203%20(1).jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/551e559a-0e64-4ac6-9031-a28ccb1cfda3.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/6.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/6b8289e8-364a-44b6-a985-717c7ec12994.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20201_Camera%201.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20201_Camera%202.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20201_Camera%203.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20201_%D1%81%D0%B8%D0%BD%D0%B8%D0%B9_1.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20201_%D1%81%D0%B8%D0%BD%D0%B8%D0%B9_2.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20204_Camera%201.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bahroom%20204_Camera%202.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bedroom%20206_Camera%201.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bedroom%20206_Camera%202.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Bedroom%20206_Camera%204.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_girl_Render%2001%20View01.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_girl_Render%2001%20View05.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_girl_View02_v2.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_girl_View03_v2.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_guest_View06.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/BR_guest_View07.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/e155b27b-b9b9-430b-b413-c90d83bc90a4.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/SR_View03.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/SR_View05.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/SR_View06.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/VZh_DR_View03.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/VZh_DR_View07.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/VZh_M_BR_View02_Post.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/VZh_M_BR_View04_Post.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/VZh_M_BR_View07_Post.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/Warderob%20M_View03.jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0/%D1%81%D0%BF%D0%B04.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "kottedj-mosk-obl-arhangel-skoe",
        "title": "Коттедж Моск. обл Архангельское",
        "city": "Москва",
        "area": 226,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/55_00%20(1).jpg",
        "images": [
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/55_00%20(1).jpg",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D1%84007.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D1%84015.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D1%84017.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D1%84020.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D1%84035.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D0%A4041.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D0%A4043.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D0%A4060.png",
            "/%D0%9A%D0%BE%D1%82%D1%82%D0%B5%D0%B4%D0%B6_%D0%9C%D0%BE%D1%81%D0%BA.%20%D0%BE%D0%B1%D0%BB_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5/%D0%A4065.png"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    },
    {
        "slug": "realizvannyy-proekt-villa-foto",
        "title": "Реализванный проект вилла фото",
        "city": "Москва",
        "area": 190,
        "style": "Современный",
        "year": 2024,
        "category": "Загородный дом",
        "cover": "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0278.jpg",
        "images": [
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0278.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0279.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0280.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0281.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0282.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0283.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0284.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0285.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0286.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0287.jpg",
            "/%D0%A0%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D0%B8%D0%BB%D0%BB%D0%B0_%D1%84%D0%BE%D1%82%D0%BE/FN5A0288.jpg"
        ],
        "tags": [
            "Загородный дом",
            "Премиум"
        ],
        "description": "Уникальный проект, разработанный нашей студией. Сочетание стиля и функциональности."
    }

];
