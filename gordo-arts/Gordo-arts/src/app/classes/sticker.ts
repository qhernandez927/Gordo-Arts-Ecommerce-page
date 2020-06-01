import { ISticker } from "./isticker";

export class Sticker implements ISticker {
    id: number;
    descriptiion: string;
    price: number;
    imgPath: string;
}