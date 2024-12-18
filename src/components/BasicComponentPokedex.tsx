import { useState } from "react";
import { Image, Text, TextInput, View, StyleSheet, Dimensions, FlatList, Pressable  } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
// import Button from "./Button";
// import useSignIn from "../hooks/useSignin";

function BasicComponentPokedex() {
  //const {email, setEmail, handleSubmit, loading} = useSignIn()
  const navigation = useNavigation<NavigationProp<any>>();
  const { height } = Dimensions.get('window');

  const pokemons = [
    { title: "Bulbasaur_1", num:"1", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_2", num:"2", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_3", num:"3", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_4", num:"4", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_5", num:"5", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_6", num:"6", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_7", num:"7", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_8", num:"8", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
    { title: "Bulbasaur_9", num:"9", image: "https://storage.googleapis.com/kagglesdsdata/datasets/6799/1408656/pokemon/pokemon/1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T135111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2900e7e3d9502fba930adde8b51f94f0ac9b88f3a421ab8bf722687d54331ea7d4a2a42bb98ebfbb69fc9cf6626b856fde5690c614afb3bd8e648c47214d4d7904612aeaf9f28e69dfa94949af032c6037b8271d5a87373483c75d0e521740f51b0208a7d372f5e3094898936c5eb5cd4d07169ceb15f325df5c9b17fb082682d9f4530bc038f9cc853e9c0f54219b86f61a664da7ce3e769d4488dbef980c7ced3df4c3cbe922c52ec37749d941b228605e389f25d7c6101f846050d569e9cbe2fea46dac978f959d8790f900de12bbf572ea1b254360b01059f2578ac64225fb54124661dee551aa7eadd2ba9feb2d2f9bddb87c6c7c16e34537d540b7c170" },
  ];

  return (
    <View style={[styles.body, { height }]}>


        {/* section header */}
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: "https://reactnative.dev/img/tiny_logo.png", }} />
          <Text style={styles.headerTitle}>Pokedex</Text>
        </View>

        {/* section after header Section */}
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="Searching"/>
        </View>

        {/* Section content */}
        <View style={styles.content}>
          <View style={styles.grid}>
            {pokemons.map((pokemon, index) => (
              <View key={index} style={styles.gridItem}>
                <Text style={{textAlign:'right'}}>{pokemon.num}</Text>
                {/* <Image source={{ uri: pokemon.image }} style={styles.imageList} /> */}
                {/* Pressable Image */}
                <Pressable onPress={() => navigation.navigate("PokedexDetail", { title: pokemon.title, num: pokemon.num, image: pokemon.image })}>
                  <Image source={{ uri: pokemon.image }} style={styles.imageList} />
                </Pressable>

                <Text style={{fontWeight:500, textAlign: 'center'}}>{pokemon.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* <View style={styles.content}>
          <View style={styles.grid}>
            Repeated TextInputs to form a 3-column grid
            {Array.from({ length: 9 }).map((_, index) => (
              <TextInput
                key={index}
                style={styles.textInput}
                placeholder={`Input ${index + 1}`}
                placeholderTextColor="#888"
              />
            ))}
            
            {images.map((src, index) => (
              <Image key={index} source={{ uri: src }} style={styles.imageList} resizeMode="cover" />
            ))}
          </View>
        </View>
         */}

        {/* <View style={styles.content}>
          <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3} // Adjust grid columns
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.imageList} resizeMode="cover" />
            )}
          />
        </View> */}

    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    flex: 1
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  image: {
    width: 24, 
    height: 24, 
    marginRight: 10, 
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
  },
  textInput: {
    width: /*'30%'*/'100%',          
    height: 40,             
    borderRadius: 25,      
    //borderWidth: 1,        
    //borderColor: '#ccc',    
    paddingHorizontal: 20,  
    fontSize: 14,           
    backgroundColor: '#fff', 
    color: '#333',          
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "30%", // Adjust this value for grid item width
    marginBottom: 10,
    backgroundColor: '#eee',
    padding: 15, 
    borderRadius: 15
  },
  imageList: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  
});

export default BasicComponentPokedex;
