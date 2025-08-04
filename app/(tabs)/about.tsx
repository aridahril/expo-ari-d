import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Informasi Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dikembangkan sebagai bagian dari tugas akhir lab mata kuliah Aplikasi Komputasi Bergerak. Proyek ini dirancang menggunakan Expo Router dengan navigasi berbasis tab untuk memberikan pengalaman pengguna yang intuitif dan efisien.
      </Text>

      <Text style={styles.sectionTitle}>Fitur Utama:</Text>
      <Text style={styles.bullet}>• Halaman Beranda: Menyajikan gambaran singkat tentang Universitas Muhammadiyah Makassar.</Text>
      <Text style={styles.bullet}>• Halaman Tentang: Menjelaskan latar belakang dan struktur dari aplikasi ini.</Text>
      <Text style={styles.bullet}>• Halaman Profil: Memuat biodata pembuat aplikasi lengkap dengan gambar profil lokal.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#EFEFEF",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E272E",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    color: "#485460",
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E272E",
    marginBottom: 10,
  },
  bullet: {
    fontSize: 15,
    color: "#1E272E",
    marginBottom: 8,
  },
});
