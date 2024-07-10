import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react";
import Icon from '@expo/vector-icons/MaterialIcons';

import { styles } from "./styles"
import { Props } from "./serviceScreen";
import { DataServices } from "../home/home";
import { Footer } from "@/components/Footer";


export const Service = ({ route }: Props) => {

    const params: Readonly<unknown> | any = route.params;
    const [dataService, setDataService] = useState<DataServices>()

    const [units, setUnits] = useState(2);
    const [bedrooms, setBedrooms] = useState(0);



    const incrementUnits = () => setUnits(units + 1);
    const decrementUnits = () => units > 0 && setUnits(units - 1);

    const incrementBedrooms = () => setBedrooms(bedrooms + 1);
    const decrementBedrooms = () => bedrooms > 0 && setBedrooms(bedrooms - 1);



    useEffect(() => {
        setDataService(params)
        console.log(dataService)
    }, [dataService])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://s3-alpha-sig.figma.com/img/c88c/d0f0/e38bd9f4e9ddaa793e4a9977de62dce4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dnDwrUeR2VmkNmwxVivfasZjt3scX8CS2qTtHkzKGA34MAE6vQP1jtK9dZzBPd-LfZh2fGUHzxGzUp-t2xhsAoUCXDg5qhrUO8tdb1Se2-uogRpO7kf2yhPJ~jiBBvLDVnE0xmYsRcndhefo305Nq9VL1sB-qbzb0jmwqr8kyyGhYfEmDuU8AFovB9ly~OfRZ8yosMRzqFJO5Xh-5W-YVU2ySxoSIj3nv0RYWbD7r13oDXpnNImlxBsU5q1vPCx9CzB14yEuq5R5jAVm5uyuwp7mSgDV-Q9cdGjQCe1WCYrnDCxZBlX7Tx2OMnwBf05Ud8NuIa~94L-kkPaTsqwGzg__' }}
                    style={styles.headerImage}
                />
                <View style={styles.contentHeader}>

                    <Text style={styles.rating}>⭐ {dataService?.rating}</Text>
                    <Text style={styles.headerTitle}>{dataService?.title}</Text>
                </View>
            </View>

            <View style={styles.contentService}>
                <ScrollView style={styles.scroolMain}>
                    <View style={styles.boxPropertis}>
                        <Text>Type of Property</Text>
                        <View>
                            <Icon name="home" size={25} />
                            <Icon name="home" size={25} />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </View>
    );
}
