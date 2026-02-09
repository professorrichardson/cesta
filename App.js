import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';


export default function App() {
  return (
    <SafeAreaView>
      <Text>Richardson</Text>
      <Sobrenome sobrenome="Schawarski" />
      <Sobrenome sobrenome="joao" />
      <Sobrenome sobrenome="silva" />
      <Sobrenome sobrenome="marinho" />
      <Sobrenome sobrenome="sei lá" />

    </SafeAreaView>
  );
}
