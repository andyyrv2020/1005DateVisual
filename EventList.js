import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Button } from 'react-native';
import EventCard from './EventCard';
import moment from 'moment';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events.map(item => ({
            ...item,
            date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
        }));

        this.setState({ events })

        setInterval(() => {
            this.setState({
                events: this.state.events.map(item => ({
                    ...item,
                    updateTime: Date.now()
                }))
            });
        }, 1000);
    }

    render() {
        return (
            <View>
                <View style={{ flex: 16, width: 800, alignSelf: 'center' }}>

                    <FlatList
                        data={this.state.events}
                        renderItem={({ item }) => <EventCard eventItem={item} />}>
                    </FlatList>

                </View>

                <View style={{ flex: 1, width: 800, alignSelf: 'center', margin: 15 }}>

                    <Button onPress={() => this.props.navigation.navigate('EventForm')}
                        title='Add Event'
                        color='#a8a8a8'
                    />
                </View>
            </View>
        )
    }
}

export default EventList;