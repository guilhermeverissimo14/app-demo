import { TextInput, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';

import { SearchInputProps } from "./searchInput";
import { styles } from "./styles";
import { theme } from "@/theme/theme";


export const SearchInput = ({ label, value, onChangeText, keyboardType }: SearchInputProps) => {
    return (
        <View style={styles.contentInput}>
            <TextInput
                style={styles.input}
                placeholder={label}
                placeholderTextColor={theme.colors.gray[500]}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
            />
            <View style={styles.iconInput}>
                <Icon name="search" size={20} color={theme.colors.white[300]} />
            </View>
        </View>
    )
}