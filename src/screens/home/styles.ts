import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white[600],
        alignItems: "center",
        flexDirection: "column",
        gap: 20
    },
    contentHeader: {
        paddingTop: 50,
        backgroundColor: theme.colors.white[300],
        flex: 0.1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    contentHome: {
        flex: 0.9,
        width: "95%",
        backgroundColor: theme.colors.white[300],
        borderRadius: 8,
        padding: '4%'
    },
    boxTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },

    title: {
        borderLeftColor: theme.colors.secondary,
        borderLeftWidth: 4,
        paddingLeft: 13,
        color: theme.colors.black,
        fontSize: theme.size.mdl,
        fontFamily: theme.fonts.Inter_600
    },
    boxIcons: {
        flexDirection: "row",
        gap: 10
    },
    iconList: {
        backgroundColor: theme.colors.white[200],
        color: theme.colors.primary,
        padding: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    iconGrid: {
        backgroundColor: theme.colors.white[600],
        padding: 8,
        borderRadius: 8,
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    },

    itemContainer: {
        width: "100%",
        flexDirection: 'row',
        backgroundColor: theme.colors.white[300],
        padding: 10,
        marginBottom: 3,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    image: {
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        gap: 7
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontFamily: theme.fonts.Inter_700Bold,
        fontSize: theme.size.sm,
        color: theme.colors.black,
        marginRight: 5,
    },
    reviewsText: {
        fontSize: theme.size.xs,
        color: theme.colors.gray[500],
        fontFamily: theme.fonts.Inter_600
    },
    titleCard: {
        fontFamily: theme.fonts.Inter_600,
        fontSize: theme.size.md,
    },
    description: {
        fontFamily: theme.fonts.Inter_500,
        fontSize: theme.size.xs,
        color: theme.colors.gray[500],
    },
    price: {
        textAlign: 'center',
        backgroundColor: theme.colors.green,
        color: theme.colors.black,
        fontFamily: theme.fonts.Inter_700Bold,
        padding: 5,
        width: 40,
        borderRadius: 6,
        fontSize: theme.size.xs,
    },
});