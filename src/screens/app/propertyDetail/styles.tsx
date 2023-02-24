import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../utils';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImg: {
        width: WP(100),
        height: WP(70)
    },
    backImg: {
        width: WP(10),
        height: WP(10)
    },
    btnContainer: {
        margin: HP(2)
    },
    userContainer: {
        marginTop: HP(1.5),
        marginHorizontal: WP(4),
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HP(1.5),
        marginStart: WP(1.5),
    },
    locationIcon: {
        width: WP(6),
        height: WP(6),
        resizeMode: 'contain'
    },
    locationText: {
        fontSize: WP(4),
        marginStart: WP(3),
        fontWeight: 'bold'
    },
    detail: {
        fontSize: HP(2),
        fontWeight: '600'
    },
    detailsContainer: {
        marginTop: HP(2),
    },
    amenitiesView: {
        width: WP(44),
        height: HP(10),
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: WP(2),
        margin: WP(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    amenitiesImg: {
        width: WP(5),
        height: HP(5),
        resizeMode: 'contain'
    }
});
