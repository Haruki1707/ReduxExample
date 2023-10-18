import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {obtener, rendimiento} from "../redux/actions/depositoAction";

export default function Home() {
  const dispatch = useDispatch();
  let saldos = useSelector((store) => store.depositoStore.state);

  const obtenerRendimiento = () => {
    dispatch(rendimiento());
    console.log(saldos);
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList data={saldos.saldo} renderItem={({item}) => (<Text>{item.mes}: {item.saldo}</Text>)}/>
      <Text>{saldos.rendimiento}</Text>
      <Button title="Calcular Rendimiento" onPress={obtenerRendimiento}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
