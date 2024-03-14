import { View, Text } from "react-native";
export default function Task({task}){
    return (
        <View>
            <Text>{task}</Text>
        </View>
    );
}