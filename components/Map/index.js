import { Image, View, Animated, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles, { CARD_WIDTH } from "./style";
import { mapStyle } from '../../theme';

function Map({ initialRegion, coordinates }) {
  return (
    <>
      <MapView
        style={styles.container}
        customMapStyle={mapStyle}
        initialRegion={initialRegion}
        showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
        annotations={coordinates}
        scrollEnabled={false}
        rotateEnabled={false}
        minZoomLevel={0}
        maxZoomLevel={13}
      >
        {
          coordinates.map((marker, index) => (
            <Marker
              key={index}
              // title={marker.name}
              pinColor='#fdca40'
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lon
              }}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker} />
              </Animated.View>
            </Marker>

          ))}


      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
      >
        {coordinates.map((marker, index) => {
          return (
            <View style={styles.card} key={index}>
              <Image
                source={{ uri: marker.thumbnail }}
                style={styles.cardImage}
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.name}</Text>
                <Text numberOfLines={2} style={styles.cardDescription}>
                  {marker?.checkin_instructions}
                </Text>
              </View>
            </View>
          )
        }

        )}
      </Animated.ScrollView>
    </>

  )
}

export default Map;
