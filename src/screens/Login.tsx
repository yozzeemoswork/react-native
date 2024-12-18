import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import Button from "../components/Button";

const Login = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View>
      <Text>Just text Login</Text>
      <Button title="Home Trainocate" onPress={() => navigation.navigate("Home")} />
      <Button title="Pokedex" onPress={() => navigation.navigate("Pokedex")} />
    </View>
  );
};
export default Login;
