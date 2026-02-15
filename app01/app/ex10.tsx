import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Tipo de cada item de configuração
type SettingOption = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const settings: SettingOption[] = [
  { id: '1', name: 'Notificações', icon: 'notifications-outline' },
  { id: '2', name: 'Privacidade', icon: 'lock-closed-outline' },
  { id: '3', name: 'Segurança', icon: 'shield-checkmark-outline' },
  { id: '4', name: 'Idioma', icon: 'language-outline' },
  { id: '5', name: 'Tema', icon: 'sunny-outline' },
  { id: '6', name: 'Conta', icon: 'person-circle-outline' },
];

export default function Ex10() {

  const handleOptionPress = (optionName: string) => {
    Alert.alert('Opção clicada', `Você clicou em ${optionName}`);
  };

  const renderSetting = ({ item }: { item: SettingOption }) => (
    <View style={styles.settingContainer}>
      <TouchableOpacity
        style={styles.settingOption}
        onPress={() => handleOptionPress(item.name)}
      >
        <Ionicons name={item.icon} size={30} color="#333" style={styles.icon} />
        <Text style={styles.settingText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <FlatList
        data={settings}
        renderItem={renderSetting}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    width: '100%',
  },
  settingContainer: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  flatListContent: {
    paddingVertical: 10,
  },
});
