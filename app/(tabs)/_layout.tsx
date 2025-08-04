import { Tabs } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E88E5",
        tabBarInactiveTintColor: "#B0BEC5",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0.3,
          borderTopColor: "#E0E0E0",
          height: 65,
        },
        headerStyle: {
          backgroundColor: "#1E88E5",
        },
        headerTintColor: "#FFFFFF",
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerTitle: "Halaman Utama",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Info",
          headerTitle: "Informasi Aplikasi",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Akun",
          headerTitle: "Data Pengguna",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
