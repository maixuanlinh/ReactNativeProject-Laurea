// src/screens/MainScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MainScreen = () => {
  const [task, setTask] = useState<string>(''); // task is of type string
  const [tasks, setTasks] = useState<string[]>([]); // tasks is an array of strings

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 8,
  },
  task: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default MainScreen;
