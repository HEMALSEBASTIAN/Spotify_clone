export interface IMusic {
    id: number;
    albumName: string;
    authorName: string;
    category: string;
    imageUrl: string;
}
export interface IUser {
    id?: number;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    year: number;
    month: number;
    day: number;
    gender: string;

}