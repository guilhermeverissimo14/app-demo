import { theme } from '@/theme/theme';
import { StyleSheet, TextComponent } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white[600],
    },
    header: {
        top: 0,
        width: '100%',
        marginTop: 30,
        flex: 0.4,
        zIndex: 1,
    },
    headerImage: {
        width: '100%',
        height: "100%",
    },

    containerHeader: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    contentHeader: {
        position: "absolute",
        bottom: 0,
        height: "70%",
        width: "100%",
        paddingLeft: "3%",
        gap: 20,
    },

    rating: {
        width: 60,
        padding: 3,
        borderRadius: 10,
        textAlign: "center",
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.sm,
        color: theme.colors.white[300],
        backgroundColor: theme.colors.orange[400]
    },
    headerTitle: {
        color: theme.colors.white[300],
        fontSize: theme.size.xl,
        fontFamily: theme.fonts.Inter_700Bold,
        zIndex: 1,
    },

    contentService: {
        flex: 0.7,
        backgroundColor: theme.colors.white[600],
        width: "100%",
        alignItems: "center",
        zIndex: 9,
        position: "relative"
    },

    scroolMain: {
        width: "90%",
        // position: "absolute",
        // zIndex: 50,
        // top: -40
    },

    boxPropertis: {
        width: "100%",
        backgroundColor: theme.colors.white[300],
        borderRadius: 8,
        padding: "5%",
        marginTop: 8,
        paddingTop: 20,
    },

    textProperty: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.mdl,
        color: theme.colors.black,
        borderLeftColor: theme.colors.secondary,
        borderLeftWidth: 4,
        paddingLeft: 10,
        marginBottom: 10
    },
    contentIcons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        paddingBottom: 20
    },
    boxIcons: {
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    IconSecundary: {
        backgroundColor: theme.colors.white[300],
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme.colors.gray[200]
    },
    IconPrimary: {
        backgroundColor: theme.colors.primary,
        padding: 20,
        borderRadius: 10,
    },
    titleCount: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.md,
        color: theme.colors.black
    },
    contentCounter: {
        padding: "5%",
        width: "100%",
        backgroundColor: theme.colors.white[300],
        borderRadius: 8,
        marginTop: 10
    },
    boxCounter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray[200],
        padding: 10
    },
    boxButtonCount: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    buttonDecrement: {
        backgroundColor: theme.colors.white[300],
        borderColor: theme.colors.gray[200],
        borderWidth: 1,
        borderRadius: 12,
        width: 36,
        height: 36,
    },
    textDecrement: {
        textAlign: "center",
        color: theme.colors.gray[200],
        fontSize: theme.size.xl,
        fontFamily: theme.fonts.Inter_700Bold
    },
    buttonIncrement: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.gray[200],
        borderWidth: 1,
        borderRadius: 12,
        width: 36,
        height: 36,
    },
    textIncrement: {
        textAlign: "center",
        color: theme.colors.white[300],
        fontSize: theme.size.lg,
        fontFamily: theme.fonts.Inter_700Bold
    },
    textCount: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.mdl
    },
    contentDescription: {
        width: "100%",
        backgroundColor: theme.colors.white[300],
        borderRadius: 8,
        padding: "5%",
        marginTop: 10,
        marginBottom: 10
    },
    titleDescription: {
        borderLeftColor: theme.colors.secondary,
        borderLeftWidth: 4,
        paddingLeft: 10,
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.mdl,
    }
});