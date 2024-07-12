import { TouchableOpacity, Text, ButtonProps } from "react-native";

import { ButtonPrimaryProps } from "./buttonPrimary";
import { styles } from "./styles";

export const ButtonPrimary = ({ label, otherButtonStyles, otherTextStyles, onPress }: ButtonPrimaryProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonPrimary, { ...otherButtonStyles }]} >
            <Text style={[styles.textButton, { ...otherTextStyles }]}>{label}</Text>
        </TouchableOpacity>
    )
}