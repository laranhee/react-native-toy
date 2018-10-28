import { createStackNavigator } from "react-navigation";
import Home from "./Home";
import SkinList from "./SkinList";

export default createStackNavigator({
  Home: { screen: Home },
  SkinList: { screen: SkinList }
});
