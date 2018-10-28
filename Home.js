import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "RN"
  };

  constructor(props) {
    super(props);

    this.state = {
      champs: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/8.21.1/data/ko_KR/champion.json"
    );
    const body = await response.json();

    const champs = Object.values(body.data);

    this.setState({
      champs
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.champs}
          renderItem={this.renderItem}
          numColumns={3}
        />
      </View>
    );
  }

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    return (
      <View style={{}}>
        <TouchableHighlight
          onPress={() => {
            navigate("SkinList", { champ: item });
          }}
        >
          <Image
            source={{
              url: `https://ddragon.leagueoflegends.com/cdn/8.21.1/img/champion/${
                item.id
              }.png`
            }}
            style={{ width: 120, height: 120 }}
          />
        </TouchableHighlight>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  }
});
