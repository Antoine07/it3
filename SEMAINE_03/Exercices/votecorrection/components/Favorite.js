import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { set_reset } from '../store/actions_types/actions-types';


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Favorite() {
    const { choices } = useSelector(state => state.c);
    const dispatch = useDispatch();

    const renderItem = ({ item }) => (
        <Item title={item.choice} />
    );

    const reset = () => {
        dispatch(set_reset())
    }

    return (
        <SafeAreaView style={styles.countContainer}>
            <FlatList
                data={choices}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={reset}
            >
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:  0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0
    }
});
