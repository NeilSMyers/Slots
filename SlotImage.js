import React from "react"
import { View, StyleSheet, Image } from "react-native"

const SlotImage = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.5)"
  },
  image: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    opacity: 1
  }
})

export default SlotImage
