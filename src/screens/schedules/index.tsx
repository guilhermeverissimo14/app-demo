import { Text, TouchableOpacity, View, Image } from "react-native"
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles"
import { theme } from "@/theme/theme"
import { ButtonPrimary } from "@/components/ButtonPrimary"
import IconBook from "@/assets/icon-book.png"
import IconInstallation from "@/assets/icon-installation.png"
import IconUnion from "@/assets/Union.png"
import IconWesting from "@/assets/hestingHouse.png"
import IconMulti from "@/assets/icon-multi.png"
import IconSidenayu from "@/assets/sidenaiyu.png"
import { useNavigation } from "@react-navigation/native";


export const Schedules = () => {
    const [upcomingState, setUpcomingState] = useState(true)
    const [emptyDataState, setEmptyDataState] = useState(false)

    const navigation = useNavigation()

    const stateUpcoming = () => {
        setUpcomingState(true);
        setEmptyDataState(false)
    }

    const statEmpty = () => {
        setEmptyDataState(true)
        setUpcomingState(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentBookings}>
                <Text style={styles.titleBooks}>Bookings </Text>
                <View style={styles.contentFilter}>
                    <TouchableOpacity
                        style={[styles.buttonFilter, upcomingState ? { backgroundColor: theme.colors.secondary } : null]}
                        onPress={stateUpcoming}
                    >
                        <Text
                            style={[styles.textButtonFilter, upcomingState ? { color: theme.colors.primary } : null]}
                        >
                            Upcoming
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonFilter, emptyDataState ? { backgroundColor: theme.colors.secondary } : null]}
                        onPress={statEmpty}
                    >
                        <Text
                            style={[styles.textButtonFilter, emptyDataState ? { color: theme.colors.primary } : null]}
                        >
                            Empty data</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonFilter}>
                        <Text style={styles.textButtonFilter}>Draft</Text>
                    </TouchableOpacity>
                </View>

                {upcomingState && (
                    <View style={styles.contentUpComing}>
                        <View style={styles.contentInstallation}>
                            <View style={styles.iconInstallation}>
                                <Image style={styles.icon} source={IconInstallation} />
                            </View>
                            <View>
                                <Text style={styles.titleInstallation}>Multi Mask Facial</Text>
                                <Text style={styles.descriptionInstallation}>Reference Code: #D-571224</Text>
                            </View>
                        </View>
                        <View style={styles.contentStatus}>
                            <Text style={styles.textStatus}>Status</Text>
                            <Text style={styles.textConfirmed}>Confirmed</Text>
                        </View>
                        <View style={styles.contentShedule}>
                            <View style={styles.iconShedule} >
                                <Image style={styles.icon} source={IconUnion} />
                            </View>
                            <View>
                                <Text style={styles.textData}>8:00-9:00 AM, 09 Dec</Text>
                                <Text style={styles.textShedule}>Schedule</Text>
                            </View>
                        </View>
                        <View style={styles.contentCall}>
                            <View style={styles.boxWesting}>
                                <View style={styles.IconWesting}>
                                    <Image style={styles.icon} source={IconWesting} />
                                </View>
                                <View>
                                    <Text style={styles.textWesting}>Westinghouse</Text>
                                    <Text style={styles.textService}>Service provider</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttonCall}>
                                <Ionicons name="call" size={18} color="white" />
                                <Text style={styles.textButtonCall}>Call</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.contentInstallation}>
                            <View style={styles.iconMulti}>
                                <Image style={styles.icon} source={IconMulti} />
                            </View>
                            <View>
                                <Text style={styles.titleInstallation}>AC Installation</Text>
                                <Text style={styles.descriptionInstallation}>Reference Code: #D-571224</Text>
                            </View>
                        </View>
                        <View style={styles.contentStatus}>
                            <Text style={styles.textStatus}>Status</Text>
                            <Text style={styles.textPeding}>Peding</Text>
                        </View>
                        <View style={styles.contentShedule}>
                            <View style={styles.iconShedule} >
                                <Image style={styles.icon} source={IconUnion} />
                            </View>
                            <View>
                                <Text style={styles.textData}>8:00-9:00 AM, 09 Dec</Text>
                                <Text style={styles.textShedule}>Schedule</Text>
                            </View>
                        </View>
                        <View style={styles.contentCall}>
                            <View style={styles.boxWesting}>
                                <View style={styles.IconWesting}>
                                    <Image source={IconSidenayu} />
                                </View>
                                <View>
                                    <Text style={styles.textWesting}>Sindenayu</Text>
                                    <Text style={styles.textService}>Service provider</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttonCall}>
                                <Ionicons name="call" size={18} color="white" />
                                <Text style={styles.textButtonCall}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {emptyDataState && (
                    <View style={styles.contentEmptyData}>

                        <Image source={IconBook} />

                        <Text style={styles.titleEmptyData}>No Upcoming Order</Text>

                        <View>
                            <Text style={styles.descriptionEmptyData}>Currently you don’t have any upcoming order.</Text>
                            <Text style={styles.descriptionEmptyData}>Place and track your orders from here.</Text>
                        </View>

                        <ButtonPrimary
                            onPress={() => navigation.navigate("Home")}
                            otherTextStyles={styles.textButtonView}
                            otherButtonStyles={styles.buttonViewServices}
                            label="View all services"
                        />
                    </View>
                )}
            </View>
        </View>
    )
}