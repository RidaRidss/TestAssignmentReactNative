import React, { useEffect, useState, useRef } from 'react';
import { Image, View } from 'react-native';
import { appImages } from '../../config/theme';
import { applicationStyles } from '../../config/applicationStyles';
import styles from './style';

function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            // we can acheive this splash screen using "react-native-splash-screen" 
            // but this is also possible that we have another splash screen as the requirement to show some content with some actions to perform

            // here we are showing an example to navigate a screen to another
            navigation.navigate("Dashboard");
        }, 3000);
    }, []);

    return (
        <View style={applicationStyles.commonCenterView}>
            <Image source={appImages.appIcon} style={styles.appIcon} />
        </View>
    )
}
export default SplashScreen;