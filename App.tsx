import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
   return (
      <NavigationContainer>
         <View style={styles.container}>
            <Text>PokeDex</Text>
         </View>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#444",
      alignItems: "center",
      justifyContent: "center",
   },
});
