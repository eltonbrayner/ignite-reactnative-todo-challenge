import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TaskProps } from 'models';
import { checkIcon, trashIcon } from 'assets';
import { styles } from './styles';

interface Props {
  task: TaskProps;
  handleRemove: (i: number) => void;
  handleFinish: (i: number) => void;
  index: number;
}

export const Task = ({ task, index, handleRemove, handleFinish }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleFinish(index)}>
        {task.isFinished ? (
          <View style={[styles.circle, styles.checkedCircle]}>
            <Image source={checkIcon} style={styles.checkIcon} />
          </View>
        ) : (
          <View style={[styles.circle, styles.emptyCircle]} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, task.isFinished && styles.textThrough]}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => handleRemove(index)}>
        <Image source={trashIcon} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
};
