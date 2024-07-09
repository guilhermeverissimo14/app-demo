import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contentInput: {
        backgroundColor: theme.colors.white[400],
        borderRadius: 10,
        width: "90%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10
    },
    input: {
        width: "85%"
    },
    iconInput: {
        backgroundColor: theme.colors.primary,
        height: "100%",
        padding: 15,
        borderRadius: 10,
        justifyContent: "center"
    }
});