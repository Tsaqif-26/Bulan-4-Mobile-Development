import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Switch,
  Modal,
  Button,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />

      {/* Text */}
      <Text style={styles.title}>Halo React Native 👋</Text>

      {/* Image */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />

      {/* TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Ketik sesuatu..."
        value={text}
        onChangeText={setText}
      />

      {/* Switch */}
      <View style={styles.row}>
        <Text>Mode Aktif:</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>

      {/* Button untuk buka Modal */}
      <Button title="Tampilkan Modal" onPress={() => setModalVisible(true)} />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Ini contoh Modal!</Text>
            <Button title="Tutup" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
  image: { width: 80, height: 80, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
});
