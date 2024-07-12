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
        marginBottom: 5,
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
    },
    contentUpComing: {
        flex: 1,
        backgroundColor: theme.colors.white[300],
        width: "100%",
        padding: 15,

    },
    contentInstallation: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
    },
    iconInstallation: {
        backgroundColor: theme.colors.orange[300],
        padding: 10,
        borderRadius: 36,
    },
    titleInstallation: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.md
    },
    descriptionInstallation: {
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.sm,
    },
    contentStatus: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStatus: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.sm,
        color: theme.colors.gray[500]
    },
    textConfirmed: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.sm,
        color: theme.colors.green,
        backgroundColor: "#ECF8F1",
        padding: 5,
        borderRadius: 8
    },

    contentShedule: {
        flexDirection: "row",
        gap: 20,
        marginTop: 10
    },
    iconShedule: {
        backgroundColor: theme.colors.white[300],
        padding: 10,
        borderRadius: 36,
        borderColor: theme.colors.gray[200],
        borderWidth: 2
    },
    textData: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.sm,
    },
    textShedule: {
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.xs,
        color: theme.colors.gray[500]
    },
    contentCall: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40
    },
    boxWesting: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    IconWesting: {
        backgroundColor: theme.colors.white[300],
        padding: 12,
        borderRadius: 36,
    },
    textWesting: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.sm,
    },
    textService: {
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.xs,
        color: theme.colors.gray[500]
    },
    buttonCall: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    textButtonCall: {
        color: theme.colors.white[300],
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.sm
    },
    iconMulti: {
        backgroundColor: theme.colors.secondary,
        padding: 10,
        borderRadius: 36,
    },
    icon: {
        width: 20,
        height: 20
    },
    textPeding: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.sm,
        color: theme.colors.orange[500],
        backgroundColor: "#EB833C1A",
        padding: 5,
        borderRadius: 8
    }


});