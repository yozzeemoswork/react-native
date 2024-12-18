import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
// import Button from "../components/Button";
// import Touches from "../components/Touches";
import BasicComponentPokedexDetail from "../components/BasicComponentPokedexDetail";
import { StaticScreenProps } from "@react-navigation/native";

const PokedexDetail = (/*{route}: StaticScreenProps<{title: string, image: string, num: string}> -- onyl using props*/) => {
  //const [render, setIsRender] = useState(false);

  //const {title, image, num} = route.params -- only using props
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <Text>Pokedex detail</Text>
          <BasicComponentPokedexDetail /*title={title} image={image} num={num} -- only using props*/ />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokedexDetail;
