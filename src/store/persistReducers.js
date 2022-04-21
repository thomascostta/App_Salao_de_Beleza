import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "salao_de_beleza_barber_rock_bar",
      storage: AsyncStorage,
      whitelist: [],
      blacklist: [],
    },
    reducers
  );
  return persistedReducer;
};
