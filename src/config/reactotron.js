import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reactotronRedux } from "reactotron-redux";

Reactotron
  .useReactNative()
  .configure({ host: '' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron;
export default Reactotron;
