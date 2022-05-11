import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate} from './util';

class EventForm extends Component {
  state = {
    title: '',
    date: Date.now(),
    description: '',
    showDatePicker: false
  };

  handleChangeTitle = (value) => {
    this.setState({
      title: value,
    });
  };

  handleChangeDescription = (value) => {
    this.setState({
      description: value,
    });
  };

  handleDatePress = () => {
    this.setState({showDatePicker: true});
  };
  
  handleDatePickerHide = () => {
    this.setState({showDatePicker: false});
  }

  handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({date: currentDate});
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View style={styles.formBox}>
        <Text style={styles.formTitle}>Add Event</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Event Title'
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Event Date'
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />
        {
          this.state.showDatePicker && <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        }
        <TextInput
          style={styles.inputBox}
          placeholder='Event Description'
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button
          title='Add'
          style={styles.addButton}
          onPress={() => {
            console.log(
              'Event information: ' +
                this.state.title +
                ', ' +
                this.state.date +
                ', ' +
                this.state.description
            );
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}
export default EventForm;

const styles = StyleSheet.create({
  formBox: {
    padding: 30,
  },
  formTitle: {
    fontSize: 30,
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  addButton: {
    marginBottom: 30
  }
});
