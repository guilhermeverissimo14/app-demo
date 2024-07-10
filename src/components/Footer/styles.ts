import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerFooter: {
        position: 'static',
        bottom: 0,
        backgroundColor: theme.colors.white[600],
        width: "100%",
        elevation: 2,
        padding: 20,
        gap: 10
    },
    boxDetails: {
        flexDirection: "row",
    },
    textsValues: {
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        gap: 5,
    },
    textValue: {
        fontSize: theme.size.md,
        fontFamily: theme.fonts.Inter_700Bold,
        color: theme.colors.black
    },
    textTotal: {
        fontSize: theme.size.sm,
        fontFamily: theme.fonts.Inter_500,
        color: theme.colors.gray[400]
    },
    buttonDetails: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "60%",
    },
    textButtonDetails: {
        fontSize: theme.size.sm,
        fontFamily: theme.fonts.Inter_500,
        color: theme.colors.orange[500],
    },
    contentButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonSave: {
        width: "40%",
        backgroundColor: theme.colors.white[200],
        borderWidth: 2,
        borderColor: theme.colors.white[700],
        padding: 15,
        borderRadius: 12,
        color: "white"
    },
    buttonBook: {
        width: "40%",
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 12
    },
    textButton: {
        color: theme.colors.white[300],
    }

});