import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDate, getCountdownParts } from './util';

export default function EventCard({ eventItem }) {
    const countdown = getCountdownParts(eventItem.date);

    return (
        <View style={styles.eventCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{eventItem.title}</Text>
                <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
            </View>
            <Text style={styles.description}>{eventItem.description}</Text>
            <View style={styles.counterContainer}>
                <View>
                    <Text style={styles.counterText}>{countdown.days}</Text>
                    <Text style={styles.counterLabel}>DAYS</Text>
                </View>
                <View>
                    <Text style={styles.counterText}>{countdown.hours}</Text>
                    <Text style={styles.counterLabel}>HOURS</Text>
                </View>
                <View>
                    <Text style={styles.counterText}>{countdown.minutes}</Text>
                    <Text style={styles.counterLabel}>MINUTES</Text>
                </View>
                <View>
                    <Text style={styles.counterText}>{countdown.seconds}</Text>
                    <Text style={styles.counterLabel}>SECONDS</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventCard: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#04b032',
        width: '100%'
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'left',
        width: '70%'
    },
    description: {
        fontSize: 24,
        marginTop: 16,
        color: '#fff'
    },
    date: {
        fontWeight: 200,
        fontSize: 35,
        color: '#ffffff',
        width: '30%',
        textAlign: 'right'
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        marginTop: 30
    },
    counter: {
        width: '25%'
    },
    counterText: {
        fontSize: 40,
        textAlign: 'center',
        width: '100%',
        color: '#ffffff'
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: 100,
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 0,
        width: '100%'
    }
});