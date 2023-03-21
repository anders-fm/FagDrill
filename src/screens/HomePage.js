import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/screens/HomeStyle";
import { GoToQuiz } from "../components/GoToQuiz";

const HomePage = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("loginpage");
      })
      .catch((error) => console.log(error));
  };
  const goToUser = () => {
    navigation.navigate("userpage");
  };

  return (
    <ImageBackground
      source={require("../assets/images/home_page_bg.png")}
      style={{ flex: 1, width: null, alignSelf: "stretch" }}
    >
      <SafeAreaView style={styles.containerTo}>
        <View>
          <Text style={styles.letsplay}>Let's play</Text>
        </View>

        <ScrollView style={styles.container}>
          <TouchableOpacity
            style={styles.imgBtn_profile}
            onPress={() => goToUser()}
          >
            <ImageBackground
              source={require("../assets/images/Propile_btn_bg.png")}
              style={styles.imgButton}
            ></ImageBackground>
          </TouchableOpacity>
          <View style={styles.containerthre}>
            <GoToQuiz nav={navigation} num={1} quiz={"dFPZQ3bseEkoPMqlrzz7"} />
            <GoToQuiz nav={navigation} num={2} quiz={"ad8usDZM4b5GWrpoV6nb"} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
    </ImageBackground>
  );
};

export default HomePage;
