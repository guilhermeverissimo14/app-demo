import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { styles } from './styles';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { TimePickerProps } from './timePicker';

export const TimePicker = ({ date, setDate }: TimePickerProps) => {
    const [showTimePicker, setShowTimePicker] = useState(false);


    const onChangeTime = (event: any) => {
        if (event.type === "set") {
            const timestamp = event.nativeEvent.timestamp;
            const currentDate = new Date(timestamp);
            setShowTimePicker(Platform.OS === 'ios');
            setDate(currentDate);
        } else {
            setShowTimePicker(false);
        }
    };

    return (
        <View>
            <TouchableOpacity style={[styles.pickerContainer, styles.timeContainer]} onPress={() => setShowTimePicker(true)}>
                <FontAwesomeIcon icon={faClock} size={24} color="#4F4F4F" />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>TIME</Text>
                    <Text style={styles.text}>{date.toLocaleTimeString()}</Text>
                </View>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={date}
                    mode="time"
                    display="default"
                    onChange={onChangeTime}
                />
            )}
        </View>
    );
};