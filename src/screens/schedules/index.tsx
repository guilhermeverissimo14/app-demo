import { Text, TouchableOpacity, View, Image } from "react-native"
import { useState } from "react"

import { styles } from "./styles"
import { theme } from "@/theme/theme"
import { ButtonPrimary } from "@/components/ButtonPrimary"
import IconBook from "@/assets/icon-book.png"


export const Schedules = () => {
    const [upcomingState, setUpcomingState] = useState(true)
    const [emptyDataState, setEmptyDataState] = useState(false)

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
                    <View>
                        <Text>UpComig teste</Text>
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