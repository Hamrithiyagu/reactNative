import React from 'react';
import {StyleSheet, View} from 'react-native';

const FlexComponent = ({ color }) => (
    <View style = {[styles.flexboxes, {backgroundColor:color}]}></View>
);

const styles = StyleSheet.create({
    flexboxes: {
        height: 125
    }
});

export default FlexComponent