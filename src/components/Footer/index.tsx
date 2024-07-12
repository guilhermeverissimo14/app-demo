import { Text, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import Icon from '@expo/vector-icons/MaterialIcons';

import { ButtonPrimary } from "../ButtonPrimary"
import { styles } from "./styles"

export interface FooterProps {
    onPressSave?: () => void;
    onPressBook?: () => void;
}

export const Footer = ({ onPressSave, onPressBook }: FooterProps) => {

    const [billDetails, setBillDetails] = useState(true);

    const showBillDetails = () => setBillDetails(!billDetails);

    return (
        <View style={styles.containerFooter}>
            <View style={styles.boxDetails}>
                {billDetails && (
                    <View style={styles.textsValues}>
                        <Text style={styles.textTotal}>Total:</Text>
                        <Text style={styles.textValue}>UD 150.50</Text>
                    </View>
                )}

                <TouchableOpacity style={styles.buttonDetails} onPress={showBillDetails}>
                    <Text style={styles.textButtonDetails}>Bill Details</Text>
                    <View>
                        {billDetails ?
                            <Icon name="keyboard-arrow-down" color="#FC944D" size={25} />
                            :
                            <Icon name="keyboard-arrow-up" color="#FC944D" size={25} />
                        }
                    </View>

                </TouchableOpacity>
            </View>
            <View style={styles.contentButtons}>
                <ButtonPrimary
                    onPress={onPressSave}
                    label="Save Draft"
                    otherButtonStyles={styles.buttonSave}
                />
                <ButtonPrimary
                    onPress={onPressBook}
                    label="Book Now"
                    otherButtonStyles={styles.buttonBook}
                    otherTextStyles={styles.textButton}
                />
            </View>
        </View>
    )
}