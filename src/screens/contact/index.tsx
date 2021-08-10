import React, { useState } from 'react';
import {
  SafeAreaView, 
  Text, 
  TextInput, 
  View, 
  StyleSheet, 
  Modal, 
  Button, 
  TouchableOpacity, 
  ScrollView, 
  TouchableWithoutFeedback 
} from 'react-native';

interface ModalProps {
  show: boolean;
  onHide: any;
  message?: string;
};

const CustomModal = ({ show, onHide, message }: ModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={onHide}
    >
      <TouchableOpacity 
        style={styles.opacityContainer} 
        onPressOut={onHide}
      >
        <ScrollView 
          directionalLockEnabled={true} 
          contentContainerStyle={styles.modalScrollView}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text> Pregunta enviada exitosamente!</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>  
    </Modal>
  )
};

const Contact = () => {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalShow, setIsModalShow] = useState(false);

  const handleSuccessResponse = () => {
    setSending(false);
    setIsModalShow(true);
  }

  const handleCloseModal = () => {
    setIsModalShow(false);
  }

  const handleSubmit = () => {
    if(text.length < 10){
      setErrorMsg("*La pregunta debe tener al menos 10 caracteres.")
    } else if(text.length > 1300){
      setErrorMsg("*La pregunta no puede tener mas de 1.300 caracteres.")
    } else {
      setSending(true);
      setTimeout(function(){ handleSuccessResponse()}, 1500);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <CustomModal
          show={isModalShow}
          onHide={handleCloseModal}
        />
        <Text style={styles.title}> Formulario de contacto </Text>
        <Text style={styles.label}> Tu pregunta<Text style={styles.requiredMark}>*</Text>: </Text>
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.input}
          onChangeText={(val) => {
            setErrorMsg("");
            setText(val);
          }}
          value={text}
          placeholder="Maximo 1.300 caracteres"
          keyboardType="default"
          editable
        />
        <Text style={styles.textError}>{errorMsg}</Text>
        <Button
          title="Enviar"
          disabled={sending}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  centeredContainer: {
    position: 'relative',
    backgroundColor: '#031524',
    padding: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 20,
    color: 'white'
  },
  label: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    marginTop: 12,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: 'white',
    width: 300,
  },
  requiredMark: {
    color: 'red'
  },
  textError: {
    marginBottom: 15,
    color: 'red'
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },
  modalScrollView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  opacityContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

export default Contact;