import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default class SkinList extends React.Component {
  static navigationOptions = {
    title: "스플래시 아트"
  };

  constructor(props) {
    super(props);

    this.state = {
      champ: props.navigation.getParam("champ")
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              this.state.champ.id
            }_0.jpg`
          }}
          style={{
            width: 380,
            height: 200
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});
