import { TextInput } from "react-native"

import { InputAreaProps } from "./inputArea"
import { theme } from "@/theme/theme"
import { styles } from "./styles"

export const InputArea = ({ label, value, onChangeText, keyboardType }: InputAreaProps) => {
    return (
        <TextInput
            style={styles.inputArea}
            placeholder={label}
            placeholderTextColor={theme.colors.gray[500]}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            multiline={true}
        />
    )
}