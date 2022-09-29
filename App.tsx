import { Dimensions } from "react-native";
import { Provider } from "react-redux";
import Contact from "./src/screens/Contact/Contact";
import { store } from "./src/store/store";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Contact />
    </Provider>
  );
}
