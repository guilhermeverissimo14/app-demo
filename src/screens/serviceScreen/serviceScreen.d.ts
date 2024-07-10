import { DataServices } from "../home/home";
import { RouteProp } from "@react-navigation/native";

type Service = {
    description: string;
    id: string;
    image: number;
    price: number;
    rating: number;
    reviews: number;
    title: string;
};

type ParamList = {
    ServiceDetail: {
        params: Service[];
    };
};

type Props = {
    route: RouteProp<ParamList, 'Service'>;
};