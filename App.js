import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import SlotImage from "./SlotImage"

const images = [
  require("./assets/apple.png"),
  require("./assets/cherry.png"),
  require("./assets/star.png")
]

export default function App() {
  const [firstRender, setFirstRender] = useState(true)
  const [credits, setCredits] = useState(1000)
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)

  useEffect(() => {
    setFirstRender(false)
  }, [])

  useEffect(() => {
    if (firstRender) return
    if (first === 0 && second === 0 && third === 0) {
      setCredits(credits + 25)
    }
    if (first === 1 && second === 1 && third === 1) {
      setCredits(credits + 50)
    }
    if (first === 2 && second === 2 && third === 2) {
      setCredits(credits + 100)
    }
  }, [first, second, third])

  const Spin = () => {
    setCredits(credits - 10)
    setFirst(Math.floor(Math.random() * 3))
    setSecond(Math.floor(Math.random() * 3))
    setThird(Math.floor(Math.random() * 3))
  }

  return (
    <View style={styles.container}>
      <View style={styles.skewedContainer} />
      <View style={styles.gameContainer}>
        <View style={styles.titleContainer}>
          <FontAwesome name="star" size={40} color="yellow" />
          <Text style={styles.title}>RN Slots!</Text>
          <FontAwesome name="star" size={40} color="yellow" />
        </View>
        <View style={styles.credits}>
          <Text>Credits: {credits}</Text>
        </View>
        <View style={styles.imageContainer}>
          <SlotImage image={images[first]} />
          <SlotImage image={images[second]} />
          <SlotImage image={images[third]} />
        </View>
        <TouchableOpacity style={styles.button} onPress={Spin}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Spin</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BF91F8",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  skewedContainer: {
    transform: [{ rotate: "45deg" }],
    backgroundColor: "#C3ABF9",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  gameContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30
  },
  credits: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: "100%"
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#EB455A",
    borderRadius: 20
  }
})
