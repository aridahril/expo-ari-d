import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const images = [
    require("../../assets/images/unismuhmakassar.jpg"),
    require("../../assets/images/unismuh2.jpg"),
    require("../../assets/images/unismuh3.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImagePress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Universitas Muhammadiyah Makassar</Text>

      {/* Gambar yang bisa diklik untuk berganti */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={images[currentIndex]} style={styles.banner} />
      </TouchableOpacity>

      {/* Deskripsi kampus */}
      <Text style={styles.content}>
        Universitas Muhammadiyah Makassar (Unismuh) merupakan institusi pendidikan tinggi swasta yang berkembang pesat di kawasan timur Indonesia. Berlokasi di Jalan Sultan Alauddin, Unismuh memadukan fondasi nilai-nilai Islam dengan kemajuan ilmu pengetahuan dan teknologi.
      </Text>
      <Text style={styles.content}>
        Kampus ini hadir sebagai ruang akademik yang modern dan religius, berfokus pada pengembangan sumber daya manusia yang profesional dan berintegritas. Dengan visi menjadi perguruan tinggi Islami yang unggul dalam ilmu, teknologi, serta budaya, Unismuh terus berkontribusi dalam pembangunan bangsa di era global.
      </Text>

      {/* Fakultas Teknik dan Daftar Jurusan */}
      <Text style={styles.subheading}>Fakultas Teknik</Text>
      <Text style={styles.content}>
        Fakultas Teknik Universitas Muhammadiyah Makassar memiliki beberapa program studi unggulan yang mendukung perkembangan teknologi dan inovasi, antara lain:
      </Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Teknik Sipil</Text>
        <Text style={styles.listItem}>• Teknik Elektro</Text>
        <Text style={styles.listItem}>• Teknik Mesin</Text>
        <Text style={styles.listItem}>• Teknik Informatika</Text>
        <Text style={styles.listItem}>• Perencanaan Wilayah dan Kota</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 16,
  },
  banner: {
    width: 300,
    height: 180,
    borderRadius: 14,
    marginBottom: 18,
  },
  content: {
    fontSize: 16,
    color: "#374151",
    textAlign: "justify",
    marginBottom: 14,
    lineHeight: 24,
  },
  subheading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E40AF",
    marginTop: 20,
    marginBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  listContainer: {
    width: "100%",
    paddingLeft: 12,
    marginBottom: 14,
  },
  listItem: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
  },
});
