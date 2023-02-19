// import { Participant } from 'components';
import { InputTask } from 'components';
import { Header } from 'components/Header';
import { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';

const PARTICIPANT_DEFAULT: string[] = [];

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [participants, setParticipants] = useState(PARTICIPANT_DEFAULT);

  const handleParticipantAdd = () => {
    if (!inputValue) return;

    if (participants.includes(inputValue))
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante com esse nome na lista',
      );

    setParticipants((prev) => [...prev, inputValue]);
    return setInputValue('');
  };

  const handleParticipantRemove = (i: number) =>
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${participants[i]}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          style: 'destructive',
          onPress: () => {
            setParticipants((prev) => prev.filter((_, index) => index !== i));
          },
        },
      ],
    );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.box}>
        <InputTask />
        {/* <FlatList
          style={styles.participantsContainer}
          contentContainerStyle={styles.participants}
          data={participants}
          keyExtractor={(_, index) => `index-${index}`}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.withoutParticipants}>Nenhum participante</Text>
          )}
          renderItem={({ item, index }) => (
            <Participant
              data={{ name: item, index }}
              remove={handleParticipantRemove}
            />
          )}
        /> */}
      </View>
    </SafeAreaView>
  );
};
