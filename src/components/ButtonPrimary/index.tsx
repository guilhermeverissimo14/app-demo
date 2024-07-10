import { TouchableOpacity, Text, ButtonProps } from "react-native";

import { ButtonPrimaryProps } from "./buttonPrimary";
import { styles } from "./styles";

export const ButtonPrimary = ({ label, otherButtonStyles, otherTextStyles }: ButtonPrimaryProps) => {
    return (
        <TouchableOpacity style={[styles.buttonPrimary, { ...otherButtonStyles }]} >
            <Text style={[styles.textButton, { ...otherTextStyles }]}>{label}</Text>
        </TouchableOpacity>
    )
}