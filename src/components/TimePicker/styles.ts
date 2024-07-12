import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        marginBottom: 20,
    },
    timeContainer: {
        backgroundColor: theme.colors.green,
    },
    textContainer: {
        marginLeft: 16,
    },
    label: {
        fontSize: theme.size.xs,
        color: theme.colors.gray[400],
        fontFamily: theme.fonts.Inter_500,
    },
    text: {
        fontSize: 18,
        color: theme.colors.black,
        fontFamily: theme.fonts.Inter_700Bold,
    },
});