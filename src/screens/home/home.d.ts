import { ImageSourcePropType } from "react-native";

export type DataServices = {
    id: string;
    image: ImageSourcePropType,
    rating: number,
    reviews: number,
    title: string,
    description: string,
    price: number,
}