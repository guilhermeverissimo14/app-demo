import { theme } from '@/theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white[600],
    },
    header: {
        top: 0,
        width: '100%',
        backgroundColor: 'red',
        marginTop: 30,
        flex: 0.4,
        zIndex: 1,
    },
    headerImage: {
        width: '100%',
        height: "100%",
        zIndex: 1,
    },

    contentHeader: {
        position: "absolute",
        bottom: 0,
        height: "70%",
        width: "100%",
        paddingLeft: "3%",
        gap: 20,
        zIndex: 1,
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

    },
    boxPropertis: {
        width: "100%",
        backgroundColor: theme.colors.white[300],
        elevation: 100,
        borderRadius: 8,
        zIndex: 999,
    },
});