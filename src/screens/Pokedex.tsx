import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
// import AnimatedExample from "../components/AnimatedExample";
// import BasicComponent from "../components/BasicComponent";
import Button from "../components/Button";
import Touches from "../components/Touches";
import BasicComponentPokedex from "../components/BasicComponentPokedex";
// import ModalExample from "../components/ModalExample";

const Pokedex = () => {
  const [render, setIsRender] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <Button onPress={() => setIsRender(!render)} title="render" /> */}

          <BasicComponentPokedex />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Pokedex;
