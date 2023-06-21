import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import { applicationStyles } from '../../config/applicationStyles';
import { Text, View } from 'react-native';
import apisauce from '../../services/apisauce';
import { API_GET_VENUES } from '../../config/constants';
import { Loader, Map } from '../../components';

function Dashboard({ navigation }) {
  const [coords, setCoords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failure, setFailure] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      // The screen is focused
      getVenues();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  function getVenues() {
    apisauce.get(API_GET_VENUES, {}).then(res => {
      if (res?.results?.length > 0) {
        let coordinates = res?.results;
        if (coordinates?.length > 0) {
          setLoading(false);
          setCoords(coordinates);
        }
      }
      else {
        setLoading(false);
        setFailure(true);
      }
    })
      .catch(err => {
        setLoading(false);
        setFailure(true);
      })
  }

  if (loading) return <Loader loading={loading} />
  if (failure) return <View style={applicationStyles.commonCenterView}><Text style={applicationStyles.noDataText}>No Data Found!</Text></View>
  if (coords.length > 0) {
    let initialRegion = {
      latitude: coords[0].lat,
      longitude: coords[0].lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    return <Map
      initialRegion={initialRegion}
      coordinates={coords}
    />
  }
}
export default Dashboard;