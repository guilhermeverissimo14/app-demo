import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: theme.colors.white[600],
        alignItems: "center"
    },
    contentBookings: {
        width: "90%",
        flex: 1
    },
    titleBooks: {
        marginTop: 20,
        paddingLeft: 10,
        borderLeftWidth: 4,
        borderColor: theme.colors.secondary,
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.xl
    },
    contentFilter: {
        flexDirection: "row",
        backgroundColor: theme.colors.white[300],
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 10,
        padding: 15,
    },
    buttonFilter: {
        padding: 8,
        borderRadius: 8,
    },
    textButtonFilter: {
        fontFamily: theme.fonts.Inter_600
    },
    contentEmptyData: {
        flex: 1,
        backgroundColor: theme.colors.white[300],
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 30
    },
    titleEmptyData: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.lg,
    },
    descriptionEmptyData: {
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.sm,
        color: theme.colors.gray[500]
    },
    buttonViewServices: {
        backgroundColor: theme.colors.primary,
        width: 166,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    textButtonView: {
        color: theme.colors.white[300],
    }
});