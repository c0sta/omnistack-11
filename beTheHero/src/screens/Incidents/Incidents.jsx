import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import styles from "./Indicidents.style";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

export const Incidents = () => {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const navigateToDetail = () => {
    navigation.navigate("Detail");
  };

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get("/incidents");
      console.log(response);
      setIncidents(response.data);
    }
    return () => {};
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <FlatList
        style={styles.IncidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
