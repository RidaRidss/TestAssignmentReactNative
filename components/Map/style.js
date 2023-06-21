import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
export const CARD_WIDTH = width - 20;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
      borderRadius : 12,
      shadowColor: 'rgba(0,5,120,  0.4)',
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 30,
      elevation: 4,
      borderColor: 'rgba(0,5,120,  0.4)',
      backgroundColor: '#fff',
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
      resizeMode: "cover"
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
    },
    marker: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(0,5,120, 0.9)",
    },
    ring: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "rgba(0,5,120, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(0,5,120, 0.5)",
    },
  });

  export default styles;
  