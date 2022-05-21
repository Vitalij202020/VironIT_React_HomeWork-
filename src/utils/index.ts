import {IProduct} from "../types/product";

export const isExist = (arr: IProduct[], id: string): boolean => {
    return arr.some(item => item.id === id)
}