import Modal from "react-native-modal";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import React, { useState } from "react";

const ModalComponent = ({ visible }) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.modal}>
        <Text>Modal</Text>
      </View>
    </Modal>
  );
};

export default ModalComponent;
