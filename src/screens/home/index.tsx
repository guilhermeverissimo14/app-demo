import { Text, View } from "react-native";

import { styles } from "./styles";
import { SearchInput } from "@/components/SearchInput";

export const Home = () => {
    return (
        <View style={styles.container}>
            <SearchInput label="Search Category" />
        </View>
    )
}