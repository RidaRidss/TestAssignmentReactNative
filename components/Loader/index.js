import { ActivityIndicator, StyleSheet, View } from "react-native";
import styles from "./style";

function Loader({loading}) {
return(
    <View style={styles.container}>
        <ActivityIndicator color={"rgba(0,5,120, 0.6)"} animating={loading}/>
    </View>
)
}

export default Loader; 
