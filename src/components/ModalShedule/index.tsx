import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';


import { styles } from "./styles";
import { ModalSheduleProps } from "./modalSchedule";
import { ButtonPrimary } from "../ButtonPrimary";
import { DatePicker } from "../DatePicker";
import { TimePicker } from "../TimePicker";


export const ModalSchedule = ({ visible, setModalVisible }: ModalSheduleProps) => {

    const [billDetails, setBillDetails] = useState(true);

    const [date, setDate] = useState(new Date());

    const showBillDetails = () => setBillDetails(!billDetails);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.boxTextTitle}>
                        <Text style={styles.textTitle}>Select your Date & Time?</Text>
                        <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                            <Text style={styles.textClose}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <DatePicker date={date} setDate={setDate} />
                        <TimePicker date={date} setDate={setDate} />
                    </View>


                    <View style={styles.boxDetails}>
                        {billDetails && (
                            <View style={styles.textsValues}>
                                <Text style={styles.textTotal}>Total:</Text>
                                <Text style={styles.textValue}>UD 150.50</Text>
                            </View>
                        )}

                        <TouchableOpacity style={styles.buttonDetails} onPress={showBillDetails}>
                            <Text style={styles.textButtonDetails}>View Details</Text>
                            <View>
                                {billDetails ?
                                    <Icon name="keyboard-arrow-down" color="#FC944D" size={25} />
                                    :
                                    <Icon name="keyboard-arrow-up" color="#FC944D" size={25} />
                                }
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentButtons}>
                        <ButtonPrimary
                            onPress={() => setModalVisible(false)}
                            label="Continue"
                            otherButtonStyles={styles.buttonSave}
                        />
                    </View>
                </View>

            </View>
        </Modal>
    )
}