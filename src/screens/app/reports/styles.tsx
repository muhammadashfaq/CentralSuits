import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../utils';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: WP(4),
        marginTop: HP(2),
    },
    tabViewContainer: {
        width: WP(92),
        alignSelf: 'center',
        marginTop: HP(2)
    }
});
