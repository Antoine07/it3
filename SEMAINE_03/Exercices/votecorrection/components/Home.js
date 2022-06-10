import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { set_choice } from '../store/actions_types/actions-types';
import Favorite from './Favorite';

export default function Home() {
    const { candidates, count, max } = useSelector(state => state.c);
    const dispatch = useDispatch();

    const onPress = (choice) => {
        dispatch(set_choice(choice));
    }

    console.log(choicesM);

    if (count < max) {

        const { choice_1, choice_2 } = candidates[count];


        return (
            <View style={styles.container}>
                <View style={styles.countContainer}>
                    <Text>Count: {count}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPress(choice_1)}
                >
                    <Text>{choice_1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPress(choice_2)}
                >
                    <Text>{choice_2}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return <Favorite />

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
