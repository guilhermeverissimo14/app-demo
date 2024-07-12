import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
        backgroundColor: theme.colors.white[300],
        height: "40%",
        width: "100%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: "6%"
    },
    boxTextTitle: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textTitle: {
        color: theme.colors.black,
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.mdl
    },
    buttonClose: {
        backgroundColor: theme.colors.white[700],
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 36
    },
    textClose: {
        fontSize: theme.size.md,
        fontFamily: theme.fonts.Inter_700Bold
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
        width: "100%",
        backgroundColor: theme.colors.white[200],
        borderWidth: 2,
        borderColor: theme.colors.white[700],
        padding: 15,
        borderRadius: 12,
        color: "white"
    },
    textButton: {
        color: theme.colors.white[300],
    }
});