import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/profil.jpg")}
        style={styles.image}
      />
      <Text style={styles.title}>ARI AHMAD DAHRIL</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>105841111822</Text>

        <Text style={styles.label}>Kelas</Text>
        <Text style={styles.value}>6D</Text>

        <Text style={styles.label}>Program Studi</Text>
        <Text style={styles.value}>Informatika</Text>

        <Text style={styles.label}>Fakultas</Text>
        <Text style={styles.value}>Teknik</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#6C5CE7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D3436",
    marginBottom: 20,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  label: {
    fontSize: 14,
    color: "#636E72",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#2D3436",
    marginBottom: 12,
  },
});
