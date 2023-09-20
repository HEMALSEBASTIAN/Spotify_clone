
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

export interface IDummyUser {
    id:number;
    firstName:string;
    lastName:string
}

export interface IDummyResponse {
    limit: number;
    skip: number;
    total:number;
    users: Array<IDummyUser>
}

