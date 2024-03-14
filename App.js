import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Text, SafeAreaView, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Task from './components/Task';

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
  return (
    <ScrollView className="mt-10">
      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-4xl">My Task App</Text>
      </View>

      <View className="flex justify-center items-center mt-5">
        <TextInput className="border-2 rounded-sm border-red-500 p-2 w-4/5" onChangeText={handleText} placeholder='Enter your text'></TextInput>
      </View>

      <View className="flex-row justify-center items-center mt-5">
        <TouchableOpacity className="bg-blue-500 mr-10 p-2 rounded-md" title='ADD NEW TASK' onPress={handleButton}><Text className="text-white">+ ADD NEW TASK</Text></TouchableOpacity>
        <TouchableOpacity className="bg-red-500 p-2 rounded-md" title='DELETE TASK'><Text className="text-white">- DELETE TASK</Text></TouchableOpacity>
      </View>

      <View className="flex justify-center items-center mt-10">
        <Text className="text-center text-4xl border-b-2 border-red-500">My Task List</Text>
      </View>

      <View className="flex justify-start mt-4 px-4">
        {taskList.map((task) => <Text className="text-white text-xl mb-2 p-2 rounded-sm bg-slate-500" >{task}</Text>)}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}


