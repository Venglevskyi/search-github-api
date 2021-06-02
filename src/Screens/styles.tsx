import { StyleSheet } from 'react-native';
import colors from '../configs/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20
    },
    title: {
        color: colors.textHeaderColor,
        textAlign: 'center'
    },
    header: {
        paddingBottom: 30,
        borderBottomColor: colors.textHeaderColor,
        borderBottomWidth: 0.5
    },
    input: {
        marginVertical: 40,
        borderRadius: 30
    },
    card: { borderRadius: 20, marginBottom: 20 }
});

export { styles };
