import { StyleSheet } from 'react-native';
import { theme } from '@/theme/theme';

export const styles = StyleSheet.create({
    inputArea: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 10,
        paddingBottom: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: theme.colors.gray[200]
    }
});