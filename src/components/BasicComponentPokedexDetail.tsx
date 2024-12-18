import { StaticScreenProps } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, View, StyleSheet, Dimensions, FlatList } from "react-native";

function BasicComponentPokedexDetail({title, image, num}:{title: string, image: string, num: string}/*props:{title: string, image: string, num: string}*/) {
  // Ensure route and route.params are available
  // if (!route || !route.params) {
  //   return (
  //     <View style={styles.body}>
  //       <Text style={styles.errorText}>Error: Unable to load data</Text>
  //     </View>
  //   );
  // }

  // Destructure data passed from the previous screen
  // const { title, image, num } = props; -- only using props
  const { height } = Dimensions.get('window');

  return (
    <View style={[styles.body, { height }]}>
      
      {/* section header */}
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Section after header */}
      {/* <View style={styles.container}>
        <Text style={styles.statsTitle}>Stats:</Text>
      </View> */}

      {/* Section content with stats */}
      {/* <View style={styles.content}>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f8f8f8', // Light background color for better visibility
    flex: 1,
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  image: {
    width: 80, // Increased size for better visibility
    height: 80,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333', // Dark color for contrast
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 3, // For a nice shadow effect
  },
  statItem: {
    marginBottom: 15,
  },
  statLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  statValue: {
    fontSize: 16,
    color: '#777',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BasicComponentPokedexDetail;
