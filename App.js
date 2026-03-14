import {Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import Cesta from './src/Telas/Cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <Text>Não carregou</Text>;
  }

  return (
    <SafeAreaView>
      <Cesta />
    </SafeAreaView>
  );
}