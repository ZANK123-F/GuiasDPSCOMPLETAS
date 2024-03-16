import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions, Modal, Button, TouchableHighlight } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.banner}
          source={require('./src/img/bg.jpg')}
        />
      </View>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <Text style={styles.titulo}>Platillos Salvadoreños</Text>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/mejores1.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/mejores2.jpg')}
                />
              </View>
              <View>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/mejores3.jpg')}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Rutas Turísticas</Text>
        <View style={styles.rutasContainer}>
          <View style={styles.rutasRow}>
            <View style={styles.rutasItem}>
              <Image
                style={styles.rutas}
                source={require('./src/img/ruta1.jpg')}
              />
            </View>
            <View style={styles.rutasItem}>
              <Image
                style={styles.rutas}
                source={require('./src/img/ruta2.jpg')}
              />
            </View>
          </View>
          <View style={styles.rutasRow}>
            <View style={styles.rutasItem}>
              <Image
                style={styles.rutas}
                source={require('./src/img/ruta3.jpg')}
              />
            </View>
            <View style={styles.rutasItem}>
              <Image
                style={styles.rutas}
                source={require('./src/img/ruta4.jpg')}
              />
            </View>
          </View>
        </View>

        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ marginRight: 10 }}>
              <TouchableHighlight
                onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}
              >
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad2.jpg')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad3.jpg')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad5.jpg')}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Modal para "Ir a la playa" */}
      <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
        <View style={styles.vistaModal}>
          <View style={styles.modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
            <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
  },
  mejores: {
    width: 360,
    height: 200,
    marginVertical: 5,
  },
  rutasContainer: {
    marginBottom: 10,
  },
  rutasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rutasItem: {
    flexBasis: '48%',
  },
  rutas: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});

export default App;
