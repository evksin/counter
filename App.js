import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            accessibilityRole="button"
            style={[styles.button, styles.plusButton]}
            onPress={() => setCount((prev) => prev + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            style={[styles.button, styles.resetButton]}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Сброс</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#101114"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  countText: {
    fontSize: 72,
    fontWeight: "700",
    color: "#F5F5F7",
    textAlign: "center",
    marginBottom: 32
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 16
  },
  button: {
    minWidth: 120,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  plusButton: {
    backgroundColor: "#4C8BF5"
  },
  resetButton: {
    backgroundColor: "#2D2E33"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF"
  }
});
