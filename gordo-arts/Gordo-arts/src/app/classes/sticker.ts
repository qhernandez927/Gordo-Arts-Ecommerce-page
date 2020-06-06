import { ISticker } from "./isticker";

export class Sticker implements ISticker {
    id: number;
    description: string;
    price: number;
    imgPath: string;
}