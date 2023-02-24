import { ColorModeProvider } from "./components/providers";
import Router from "./routes";

const App = () => (
  <ColorModeProvider>
    <Router />
  </ColorModeProvider>
);

export default App;
