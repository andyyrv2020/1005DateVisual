import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from './util.js';

class EventForm extends Component {

    state = {
        title: '',
        date: Date.now(),
        showDatePicker: false
    };

    handleDatePress = () => {
        this.setState({ showDatePicker: true });
    }
    handleDatePickerHide = () => {
        this.setState({ showDatePicker: false });
    }
    handleDatePicked = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.date;
        this.state.date = currentDate;
        this.handleDatePickerHide();
    }

    componentDidMount() {
        const events = require("./data.json").events;
        this.setState({ events });
    }

    processForm() {
        alert(this.state.title);
        this.state.events.push({
            title: this.state.title,
            date: this.state.date
        });
        this.props.navigation.navigate('EventList')
    }


    render() {
        return (
            <View>
                <TextInput
                    placeholder='Event Title'
                    value={this.state.title}
                    style={styles.input}
                    onChangeText={(value) => { this.setState({ title: value }); }}
                ></TextInput>

                <TextInput
                    placeholder='Event date'
                    value={formatDate(this.state.date)}
                    style={{ backgroundColor: '#a8a8a8', paddingHorizontal: '1em', paddingVertical: '0.5em', marginVertical: '1em', marginHorizontal: '2em' }}
                    editable={!this.state.showDatePicker && <DateTimePicker value={this.state.date} mode="datetime" is24Hour={true} onChange={this.handleDatePicked} />}
                    onFocus={this.handleDatePress}
                ></TextInput>

                <Button title='Add'
                    onPress={() => this.processForm()}
                />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#a8a8a8',
        paddingHorizontal: '1em',
        paddingVertical: '0.5em',
        marginVertical: '1em',
        marginHorizontal: '2em'

    }
});
export default EventForm;
