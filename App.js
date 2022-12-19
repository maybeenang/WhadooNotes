import "react-native-gesture-handler";
import RootNavigation from "./src/RootNavigation";

// import redux
import { Provider } from "react-redux";
import Store from "./src/redux/Store";

// import reduc persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// persist store
let persistor = persistStore(Store);

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}
