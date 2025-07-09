import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Persegi Panjang dengan Nama */}
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>ARI AHMAD DAHRIL</Text>
      </View>

      {/* Bentuk Pil (Capsule) dengan NIM */}
      <View style={styles.capsule}>
        <Text style={styles.capsuleText}>10584111822</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "blue",
  },

  rectangle: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },

  rectangleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  capsule: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 50,
  },

  capsuleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
