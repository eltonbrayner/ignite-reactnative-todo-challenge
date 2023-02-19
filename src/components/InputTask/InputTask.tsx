import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { plusIcon } from 'assets';

export const InputTask = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#6B6B6B"
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
