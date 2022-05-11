import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { formatDate, getCountdownParts } from './util.js';


export default function EventCard({ eventItem }) {

    const countdown
        = getCountdownParts(eventItem.date);
    return (
        <View style={styles.eventCard}>
            <View style={styles.eventHeader}>
                <Text style={styles.title}>{eventItem.title} - {eventItem.date}</Text>
                <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
            </View>
            <View style={styles.counterContainer}>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{countdown.days}</Text>
                    <Text style={styles.counterLabel}>DAYS</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{countdown.hours}</Text>
                    <Text style={styles.counterLabel}>HOURS</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{countdown.minutes}</Text>
                    <Text style={styles.counterLabel}>MINUTES</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{countdown.seconds}</Text>
                    <Text style={styles.counterLabel}>SECONDS</Text>
                </View>

            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{eventItem.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        border: '2px solid gray ',
        borderColor: '#FAE407',
        margin: '0.2rem',
        padding: '1.1rem',
        backgroundColor: '#a8a8a8',
        width: '100%'
    },

    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right'
    },

    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
        width: '70%'
    },

    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%'
    },

    counter: {
        width: '25%',
        flex: 1
    },

    counterText: {
        fontSize: 40,
        textAlign: 'center'
    },

    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0
    }

})