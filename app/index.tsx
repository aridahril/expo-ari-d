import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const initialImageGridData = [
  { id: 1, frontImage: 'https://picsum.photos/id/101/200', backImage: 'https://picsum.photos/id/102/200', flipped: false, scaleValue: 1 },
  { id: 2, frontImage: 'https://picsum.photos/id/103/200', backImage: 'https://picsum.photos/id/104/200', flipped: false, scaleValue: 1 },
  { id: 3, frontImage: 'https://picsum.photos/id/105/200', backImage: 'https://picsum.photos/id/106/200', flipped: false, scaleValue: 1 },
  { id: 4, frontImage: 'https://picsum.photos/id/107/200', backImage: 'https://picsum.photos/id/108/200', flipped: false, scaleValue: 1 },
  { id: 5, frontImage: 'https://picsum.photos/id/109/200', backImage: 'https://picsum.photos/id/110/200', flipped: false, scaleValue: 1 },
  { id: 6, frontImage: 'https://picsum.photos/id/111/200', backImage: 'https://picsum.photos/id/112/200', flipped: false, scaleValue: 1 },
  { id: 7, frontImage: 'https://picsum.photos/id/113/200', backImage: 'https://picsum.photos/id/114/200', flipped: false, scaleValue: 1 },
  { id: 8, frontImage: 'https://picsum.photos/id/115/200', backImage: 'https://picsum.photos/id/116/200', flipped: false, scaleValue: 1 },
  { id: 9, frontImage: 'https://picsum.photos/id/117/200', backImage: 'https://picsum.photos/id/118/200', flipped: false, scaleValue: 1 },
];

export default function Index() {
  const [imageGridData, setImageGridData] = useState(initialImageGridData);

  const onImagePress = (imageId: number) => {
    setImageGridData(currentGrid =>
      currentGrid.map(image => {
        if (image.id === imageId) {
          const updatedScale = Math.min(image.scaleValue * 1.2, 2);
          return {
            ...image,
            flipped: !image.flipped,
            scaleValue: updatedScale,
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerBox}>
        <Image
          source={{ uri: "https://img.icons8.com/m_rounded/512/chatgpt.png" }}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.orangeTriangle} />
      <View style={styles.userBadge}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.userIdText}>105841113522</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameRed}>AFIL ANUGRAH</Text>
        <Text style={styles.nameWhite}>105841113522</Text>
      </View>
      <View style={styles.blueDot}></View>

      <View style={styles.gridWrapper}>
        {imageGridData.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => onImagePress(image.id)}
            style={styles.gridItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: image.flipped ? image.backImage : image.frontImage }}
              style={[
                styles.gridImage,
                { transform: [{ scale: image.scaleValue }] }
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 60,
  },
  headerBox: {
    width: 220,
    height: 110,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  orangeTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
    marginBottom: 20,
  },
  userBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4a90e2",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userIdText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  nameContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  nameRed: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  nameWhite: {
    color: "white",
    fontWeight: "bold",
  },
  blueDot: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 100,
    marginTop: 10
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
    marginTop: 20,
  },
  gridItem: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',     // added
    justifyContent: 'center', // added
  },
  gridImage: {
    width: 100,
    height: 100,
  }
});
