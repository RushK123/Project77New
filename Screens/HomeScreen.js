import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, },

  droidSafeArea: { marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.35,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 150,
    right: 10,
    bottom: -20,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -70
  }
})

export default class HomeScren extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('../assets/main-icon.png')} style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}> Stellar App</Text>

          </View>
          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("SpaceCrafts")}>
            <Text style={styles.routeText}> Space Crafts</Text>
            <Image source={require('../assets/rocket_icon.png')} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("StarMap")}>
            <Text style={styles.routeText}> Star Map</Text>
            <Image source={require('../assets/star_map.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={() => this.props.navigation.navigate("DailyPic")}>
            <Text style={styles.routeText}> Daily Pictures</Text>
            <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage} />
          </TouchableOpacity>

        </ImageBackground>

      </View>
    )
  }
}

