// import { Participant } from 'components';
import { EmptyTask, InputTask, StaticsTask, Task } from 'components';
import { Header } from 'components/Header';
import { TaskProps } from 'models';
import { useState } from 'react';
import { Text, View, SafeAreaView, Alert, FlatList } from 'react-native';
import { labels } from 'utils';
import { styles } from './styles';

export const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleInsertTask = () => {
    if (!inputValue) return;

    setTasks((prev) => [
      ...prev,
      {
        title: inputValue,
        isFinished: false,
      },
    ]);
    return setInputValue('');
  };

  const handleRemove = (i: number) =>
    Alert.alert(
      'Remover tarefa',
      `Deseja remover a tarefa "${tasks[i].title}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            setTasks((prev) => prev.filter((_, index) => index !== i));
          },
        },
      ],
    );

  const handleFinish = (i: number) => {
    const findTask = tasks[i];

    if (findTask.isFinished) {
      return Alert.alert(
        'Desmarcar tarefa',
        `Deseja desmarcar essa tarefa? "${tasks[i].title}"`,
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Sim',
            style: 'destructive',
            onPress: () => {
              setTasks((prev) =>
                prev.map((task, index) => {
                  if (index === i) {
                    return {
                      ...task,
                      isFinished: false,
                    };
                  }
                  return task;
                }),
              );
            },
          },
        ],
      );
    }

    return Alert.alert(
      'Concluir tarefa',
      `Deseja concluir essa tarefa? "${tasks[i].title}"`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            setTasks((prev) =>
              prev.map((task, index) => {
                if (index === i) {
                  return {
                    ...task,
                    isFinished: true,
                  };
                }
                return task;
              }),
            );
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.box}>
        <InputTask
          setInputValue={setInputValue}
          inputValue={inputValue}
          handleInsertTask={handleInsertTask}
        />
        <View style={styles.statics}>
          <StaticsTask type={labels.staticsTask.maked} value={tasks.length} />
          <StaticsTask
            type={labels.staticsTask.finished}
            value={tasks.filter((el: TaskProps) => el.isFinished).length}
          />
        </View>
        <FlatList
          style={styles.taskList}
          contentContainerStyle={styles.taskListContainer}
          data={tasks}
          keyExtractor={(_, index) => `index-${index}`}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyTask active={inputValue.length !== 0} />
          )}
          renderItem={({ item, index }) => (
            <Task
              task={item}
              index={index}
              handleRemove={handleRemove}
              handleFinish={handleFinish}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
