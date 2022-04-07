import React from 'react'
// @generated: @expo/next-adapter@2.1.5
import { View,Text, TouchableWithoutFeedback, StyleSheet, Linking} from 'react-native'

import Page from '../components/page/Page'
import { H1 } from '../components/webElements'
import VideoPlayer from '../components/VideoPlayer'

import { config } from '../config/config'

export default class Example extends React.Component {
  open=()=>{
      let url = 'http://www.apicazorla.com';
      Linking.openURL(url) 
  }
  render() {
      return (
          <View style={styles.container}>
               <TouchableWithoutFeedback onPress={this.open}>
                   <View style={styles.viewForText}>
                                               <Text> Haga clic aquí para abrir al web </Text>
                   </View>
              </TouchableWithoutFeedback>
          </View>

}

export default function StartPage () {
  return (
    <Page>
      <H1 style={styles.h1}>Escutoides de miel</H1>
      <Text style={styles.text}>Es un producto de {config.appName}</Text>
      <Text style={styles.text}>{config.appTagline}</Text>
      <VideoPlayer
        videoUrl='https://fisicayquimica2.s3.eu-west-3.amazonaws.com/escutoides.mp4'
      />
      <Text style={styles.text}>Más información en</Text>
      <Text style={styles.text}>https://www.apicazorla.com/post/getting-started.</Text>
    </Page>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#E5E5E5'
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12
  },
  viewForText:{
    justifyContent:'center',
    alignItems:'center'
  })
  