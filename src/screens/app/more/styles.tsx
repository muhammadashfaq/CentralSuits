import { StyleSheet } from 'react-native';
import { HP, WP } from '../../../utils';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginHorizontal: HP(2),
        padding: HP(1),
        flexDirection: 'row',
        alignItems: 'center'
    },
    backIcon: {
        width: WP(4), height: WP(4), resizeMode: 'contain'
    },
    iconContainer: {
        width: 50, height: 50, backgroundColor: '#F5F5F5', borderRadius: 25, justifyContent: 'center', alignItems: 'center'
    },
    bottomLine: {
        width: WP(88), height: HP(0.1), backgroundColor: '#BDBDBD', alignSelf: 'center', opacity: 0.7, marginTop: HP(1)
    },
    timeVariations: {
        width: WP(20), height: HP(4), backgroundColor: '#1F8CCA', marginTop: HP(2), justifyContent: 'center', alignItems: 'center', borderRadius: 10, margin: HP(0.5)
    },
    innerContainer: {
        width: WP(90),
        marginTop: HP(3),
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1,
        alignSelf: 'center',
    },
    innerHeader: {
        margin: HP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#4F4F4F',
        fontWeight: '500',
        fontSize: 10
    },
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row',
    },
    load: {
        width: WP(5),
        height: WP(5),
        resizeMode: 'contain'
    },
    head: {
        height: 40,
        backgroundColor: '#1F8CCA',
    },

    row: {
        height: 40,
    },
    headingText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
        fontSize: 12
    },
    mapImage: {
        width: WP(90), height: HP(20), resizeMode: 'cover', marginVertical: HP(1), borderRadius: 5
    },
    mapContainer: {
        width: WP(90),
        marginTop: HP(3),
        alignSelf: 'center',
    }
});
