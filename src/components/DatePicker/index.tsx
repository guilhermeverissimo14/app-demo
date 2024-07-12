import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from './styles';
import { DatePickerProps } from './datePicker';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';



export const DatePicker = ({ date, setDate }: DatePickerProps) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChangeDate = (event: any) => {
        if (event.type === "set") {
            const timestamp = event.nativeEvent.timestamp;
            const currentDate = new Date(timestamp);
            setShowDatePicker(Platform.OS === 'ios');
            setDate(currentDate);
        } else {
            setShowDatePicker(false);
        }
    };

    return (
        <View>
            <TouchableOpacity style={[styles.pickerContainer, styles.dateContainer]} onPress={() => setShowDatePicker(true)}>
                <FontAwesomeIcon icon={faCalendar} size={24} color="#4F4F4F" />
                <View style={styles.textContainer}>
                    <Text style={styles.label}>DATE</Text>
                    <Text style={styles.text}>{date.toLocaleDateString()}</Text>
                </View>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={date || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}
        </View>
    );
};