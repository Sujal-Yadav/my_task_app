import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Text, SafeAreaView, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState("");

  function handleButton() {
    setTaskList((task) => [
      ...task, text
    ])
  }

  function handleText(text) {
    setText(text);
  }

  function handleRemoveTask(indexToRemove) {
    Alert.alert("Want to delete!", 'Delete', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Ok',
        style: 'destructive'
      }
    ])
    setTaskList(taskList.filter((_, index) => index !== indexToRemove));
  }

  return (
    <ScrollView className="mt-10">
      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-4xl">My Task App</Text>
      </View>

      <View className="flex justify-center items-center mt-5">
        <TextInput className="border-2 rounded-sm border-red-500 p-2 w-4/5" onChangeText={handleText} placeholder='Enter your text'></TextInput>
      </View>

      <View className="flex justify-center items-center mt-5">
        <TouchableOpacity className="bg-blue-500 p-2 rounded-md" title='ADD NEW TASK' onPress={handleButton}><Text className="text-white">+ ADD NEW TASK</Text></TouchableOpacity>
      </View>

      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-4xl border-b-2 border-red-500">My Task List</Text>
      </View>

      <View className="mt-4 px-4">
        {taskList.map((task, index) => <View className="flex-row justify-evenly items-center">
          <Text className="text-white text-xl w-11/12 ml-2 mb-2 p-2 rounded-md bg-slate-500" >{task}</Text>
          <TouchableOpacity onPress={() => handleRemoveTask(index)} className="flex justify-center mb-2 p-2 ml-2 rounded-md h-11" title='DELETE TASK'><FontAwesome6 name="trash" size={20} duotone={false}/></TouchableOpacity>
        </View>)}

      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}


