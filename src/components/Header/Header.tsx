import { Image, View } from 'react-native';
import { logo } from 'assets';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};
