import { View, Text } from 'react-native';
import { labels, theme } from 'utils';
import { styles } from './styles';

type StaticsTaskProps = {
  type: string;
  value: number;
};

const typeColor = {
  [labels.staticsTask.maked]: theme.colors.BLUE_LIGHT,
  [labels.staticsTask.finished]: theme.colors.PURPLE_DARK,
};

export const StaticsTask = ({
  type = 'Criadas',
  value = 0,
}: StaticsTaskProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.type, color: typeColor[type] }}>{type}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
