import { clipboardActive, clipboardInactive } from 'assets';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

type EmptyTaskProps = {
  active: boolean;
};

export const EmptyTask = ({ active = false }: EmptyTaskProps) => {
  return (
    <View style={styles.container}>
      {active ? (
        <Image source={clipboardActive} />
      ) : (
        <Image source={clipboardInactive} />
      )}
      <View style={styles.text}>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subTitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};
