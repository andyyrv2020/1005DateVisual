import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import EventCard from "./EventCard";
import moment from "moment";

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    const events = require("./data.json").events.map(item => ({
      ...item, //всички останали свойства
      date: moment(item.date, "DD/MM/YYYY HH:mm").toDate()
    }));
    this.setState({ events });

    setInterval(() => {
      this.setState({
        events: this.state.events.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      })
    }, 1000); //1000 милисекунди = 1 секунда
  }

  render() {
    return (
      <View 
      style={styles.listView}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <EventCard eventItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("EventForm")}
          title="Add event"
        />
      </View>
    );
  }
}

export default EventList;

const styles = StyleSheet.create({
  eventList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  listView: {
    paddingBottom: 40
  }
});
