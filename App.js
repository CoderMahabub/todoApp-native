import { StatusBar } from 'expo-status-bar';
// Components
import Home from './components/Home';

// Styled Components
import { Container } from "./styles/appStyles";


export default function App() {
  return (
    <Container>
      <Home></Home>
      <StatusBar style="light" />
    </Container>
  );
}
