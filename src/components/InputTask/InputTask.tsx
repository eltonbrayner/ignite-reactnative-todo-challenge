import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

import { plusIcon } from 'assets';
import { theme, labels } from 'utils';

export const InputTask = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={labels.inputTask.placeholder}
        placeholderTextColor={theme.colors.GRAY_300}
        // value={inputValue}
        // onChangeText={setInputValue}?
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={handleParticipantAdd}
      >
        <Image source={plusIcon} />
      </TouchableOpacity>
    </View>
  );
};
