import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cesta from './src/Telas/Cesta';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontCarregada) {
    return <Text>Não carregou</Text>;
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <Cesta />
    </SafeAreaView>
  );
}