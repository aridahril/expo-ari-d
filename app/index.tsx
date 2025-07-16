import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Animated, Button,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const rawImages = [
  { id: 1, mainUrl: 'https://picsum.photos/id/101/200', altUrl: 'https://picsum.photos/id/102/200' },
  { id: 2, mainUrl: 'https://picsum.photos/id/103/200', altUrl: 'https://picsum.photos/id/104/200' },
  { id: 3, mainUrl: 'https://picsum.photos/id/105/200', altUrl: 'https://picsum.photos/id/106/200' },
  { id: 4, mainUrl: 'https://picsum.photos/id/107/200', altUrl: 'https://picsum.photos/id/108/200' },
  { id: 5, mainUrl: 'https://picsum.photos/id/109/200', altUrl: 'https://picsum.photos/id/110/200' },
  { id: 6, mainUrl: 'https://picsum.photos/id/111/200', altUrl: 'https://picsum.photos/id/112/200' },
  { id: 7, mainUrl: 'https://picsum.photos/id/113/200', altUrl: 'https://picsum.photos/id/114/200' },
  { id: 8, mainUrl: 'https://picsum.photos/id/115/200', altUrl: 'https://picsum.photos/id/116/200' },
  { id: 9, mainUrl: 'https://picsum.photos/id/117/200', altUrl: 'https://picsum.photos/id/118/200' },
];

function createAnimatedImageData() {
  return rawImages.map(image => ({
    ...image,
    flipped: false,
    scale: 1,
    flipAnim: new Animated.Value(0),
    scaleAnim: new Animated.Value(1),
  }));
}

export default function ProfileGalleryScreen() {
  const [images, setImages] = useState(createAnimatedImageData());

  const onImagePress = (imageId: number) => {
    setImages(current =>
      current.map(img => {
        if (img.id === imageId) {
          const newScale = Math.min(img.scale * 1.2, 2);

          // Flip animation
          Animated.timing(img.flipAnim, {
            toValue: img.flipped ? 0 : 180,
            duration: 400,
            useNativeDriver: true,
          }).start();

          // Scale animation
          Animated.timing(img.scaleAnim, {
            toValue: newScale,
            duration: 400,
            useNativeDriver: true,
          }).start();

          // Auto revert after 3 seconds
          setTimeout(() => {
            Animated.parallel([
              Animated.timing(img.flipAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
              }),
              Animated.timing(img.scaleAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
              }),
            ]).start();

            setImages(currentImgs =>
              currentImgs.map(i =>
                i.id === imageId
                  ? { ...i, flipped: false, scale: 1 }
                  : i
              )
            );
          }, 3000);

          return { ...img, flipped: !img.flipped, scale: newScale };
        }
        return img;
      })
    );
  };

  const resetAll = () => {
    setImages(prev =>
      prev.map(img => {
        Animated.parallel([
          Animated.timing(img.flipAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(img.scaleAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]).start();

        return { ...img, flipped: false, scale: 1 };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerBox}>
        <Image
          source={{ uri: "https://img.icons8.com/m_rounded/512/chatgpt.png" }}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.triangleIndicator} />

      <View style={styles.idPill}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.idText}>105841113522</Text>
      </View>

      <View style={styles.nameBox}>
        <Text style={styles.nameText}>AFIL ANUGRAH</Text>
        <Text style={styles.nimText}>105841113522</Text>
      </View>

      <View style={styles.circleDecoration}></View>

      <View style={styles.imageGrid}>
        {images.map(img => {
          const rotateY = img.flipAnim.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
          });

          return (
            <TouchableOpacity
              key={img.id}
              onPress={() => onImagePress(img.id)}
              style={styles.imageCell}
            >
              <Animated.Image
                source={{ uri: img.flipped ? img.altUrl : img.mainUrl }}
                style={[
                  styles.cellImage,
                  {
                    transform: [
                      { scale: img.scaleAnim },
                      { rotateY: rotateY },
                    ],
                  },
                ]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Reset Semua Gambar" onPress={resetAll} color="#d9534f" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
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
  triangleIndicator: {
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
  idPill: {
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
  idText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  nameBox: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  nameText: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  nimText: {
    color: "white",
    fontWeight: "bold",
  },
  circleDecoration: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 100,
    marginTop: 10
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
    marginTop: 20,
  },
  imageCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cellImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backfaceVisibility: 'hidden',
  }
});
