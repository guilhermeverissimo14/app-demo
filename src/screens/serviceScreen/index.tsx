import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react";
import Icon from '@expo/vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./styles"
import { Props } from "./serviceScreen";
import { DataServices } from "../home/home";
import { Footer } from "@/components/Footer";
import { InputArea } from "@/components/InputArea";


export const Service = ({ route }: Props) => {

    const params: Readonly<unknown> | any = route.params;
    const [dataService, setDataService] = useState<DataServices>()
    const [countUnits, setCountUnits] = useState(0);
    const [countBedrooms, setCountBedrooms] = useState(0);

    const incrementCountUnits = () => {
        setCountUnits(countUnits + 1);
    };

    const decrementCountUnits = () => {
        if (countUnits > 0) {
            setCountUnits(countUnits - 1);
        }
    };

    const incrementCountBedrooms = () => {
        setCountBedrooms(countBedrooms + 1);
    };

    const decrementCountBedrooms = () => {
        if (countBedrooms > 0) {
            setCountBedrooms(countBedrooms - 1);
        }
    };

    useEffect(() => {
        setDataService(params)
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
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroolMain}>
                    <View style={styles.boxPropertis}>
                        <Text style={styles.textProperty}>Type of Property</Text>
                        <View style={styles.contentIcons}>
                            <View style={styles.boxIcons}>
                                <TouchableOpacity style={styles.IconSecundary} >
                                    <Icon name="home" color="#D1D3D4" size={25} />
                                </TouchableOpacity>
                                <Text>Home</Text>
                            </View>

                            <View style={styles.boxIcons}>
                                <TouchableOpacity style={styles.IconPrimary}>
                                    <MaterialCommunityIcons name="office-building-outline" color="#ffffff" size={25} />
                                </TouchableOpacity>
                                <Text>Office</Text>
                            </View>

                            <View style={styles.boxIcons}>
                                <TouchableOpacity style={styles.IconSecundary}>
                                    <Icon name="villa" color="#D1D3D4" size={25} />
                                </TouchableOpacity>
                                <Text>Vila</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentCounter}>
                        <View style={styles.boxCounter}>

                            <Text style={styles.titleCount}>Number of Units</Text>

                            <View style={styles.boxButtonCount}>
                                <TouchableOpacity style={styles.buttonDecrement} onPress={decrementCountUnits}>
                                    <Text style={styles.textDecrement}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.textCount}>{countUnits}</Text>
                                <TouchableOpacity style={styles.buttonIncrement} onPress={incrementCountUnits}>
                                    <Text style={styles.textIncrement}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.boxCounter}>

                            <Text style={styles.titleCount}>Number of Bedrooms</Text>

                            <View style={styles.boxButtonCount}>
                                <TouchableOpacity style={styles.buttonDecrement} onPress={decrementCountBedrooms}>
                                    <Text style={styles.textDecrement}> - </Text>
                                </TouchableOpacity>
                                <Text style={styles.textCount}>{countBedrooms}</Text>
                                <TouchableOpacity style={styles.buttonIncrement} onPress={incrementCountBedrooms}>
                                    <Text style={styles.textIncrement}> + </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentDescription}>
                        <Text style={styles.titleDescription}>Description</Text>
                        <InputArea label="Description" />
                    </View>
                </ScrollView>
            </View>
            <Footer />
        </View>
    );
}
