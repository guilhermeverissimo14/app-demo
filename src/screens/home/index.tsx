import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';

import { styles } from "./styles";
import { SearchInput } from "@/components/SearchInput";
import { AcServicesData } from "@/service/services";
import { useEffect, useState } from "react";
import { DataServices } from "./home";

export const Home = () => {

    const [data, setData] = useState<DataServices[]>()

    const fetchData = () => {
        try {
            const response = AcServicesData;
            setData(response)

        } catch (error) {
            console.log("Erro ao buscar serviços AC", error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [data])


    const ServiceItem = ({ item }: { item: DataServices }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                    <Text style={styles.reviewsText}>({item.reviews})</Text>
                </View>
                <Text style={styles.titleCard}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <Text>...</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <SearchInput label="Search Category" />
            </View>
            <View style={styles.contentHome}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>Appliance Repair</Text>
                    <View style={styles.boxIcons}>
                        <TouchableOpacity>
                            <Icon style={styles.iconList} name="list" size={28} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconGrid}>
                            <Icon name="grid-view" size={25} color="blue" />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ServiceItem item={item} />}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}