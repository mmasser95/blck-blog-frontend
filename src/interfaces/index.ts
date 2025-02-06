export default interface Index {
    id: number;
    content: string;
    image: {
        url: string,
        name: string,
        caption: string,
        width: number,
        height: number
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string
}