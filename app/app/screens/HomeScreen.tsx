import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

type PlayerStats = {
  money: number;
  experience: number;
  level: number;
  reputation: number;
};

export default function HomeScreen() {
  const [playerStats, setPlayerStats] = useState<PlayerStats>({
    money: 1000,
    experience: 0,
    level: 1,
    reputation: 50,
  });

  const [currentQuests] = useState([
    {
      id: 1,
      title: "Première Vente",
      description: "Réalisez votre première vente pour gagner de l'expérience",
      reward: "100€ + 50XP",
      progress: 0,
      total: 1,
    },
    {
      id: 2,
      title: "Networking",
      description: "Rencontrez 3 entrepreneurs potentiels",
      reward: "200€ + 100XP",
      progress: 1,
      total: 3,
    }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EntrepreneurQuest</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Stats Panel */}
        <View style={styles.statsPanel}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="currency-eur" size={24} color="#4CAF50" />
            <Text style={styles.statValue}>{playerStats.money}€</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="star" size={24} color="#FFC107" />
            <Text style={styles.statValue}>Niv. {playerStats.level}</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialCommunityIcons name="trophy" size={24} color="#2196F3" />
            <Text style={styles.statValue}>{playerStats.experience} XP</Text>
          </View>
        </View>

        {/* Experience Bar */}
        <View style={styles.expBarContainer}>
          <View style={[styles.expBar, { width: `${(playerStats.experience % 100)}%` }]} />
        </View>

        {/* Quests Section */}
        <Text style={styles.sectionTitle}>Quêtes Actives</Text>
        {currentQuests.map((quest) => (
          <TouchableOpacity key={quest.id} style={styles.questCard}>
            <View style={styles.questHeader}>
              <Text style={styles.questTitle}>{quest.title}</Text>
              <Text style={styles.questReward}>{quest.reward}</Text>
            </View>
            <Text style={styles.questDescription}>{quest.description}</Text>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${(quest.progress / quest.total) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>
              {quest.progress}/{quest.total}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976D2',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statsPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  expBarContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 24,
  },
  expBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  questTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questReward: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  questDescription: {
    color: '#666',
    marginBottom: 12,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});