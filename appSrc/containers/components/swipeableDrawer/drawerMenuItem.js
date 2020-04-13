import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import DraggableFlatList from '../draggableList';

import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import { TextButton } from '../buttons';
import { removeItem } from '../../../actions/eventActions';

const DrawerMenuItem = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={[styles.description, { color: 'white' }]}>Tracking for user {props.registeredUser}</Text>
                {
                    props.trackedList.length > 0 ? (
                        <DraggableFlatList
                            style={{ flex: 1 }}
                            data={props.trackedList}
                            extraData={props.trackedList}
                            // key={index => String(index)}
                            keyExtractor={(item, index) => `draggable-item-${index}`}
                            onDragEnd={({ data }) => {}}
                            renderItem={({ item, index, drag, isActive }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: isActive ? "grey" : 'transparent',
                                            justifyContent: "center"
                                        }}
                                        onLongPress={drag}
                                    >
                                        <View style={styles.card}>
                                            <Text style={[styles.description]}>{item.event_name}</Text>
                                            <View style={{ margin: 5, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                                <TextButton
                                                    title={'Stop Tracking'}
                                                    onPress={() => props.dispatch(removeItem(index))}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    )
                        :
                        (
                            <Text style={[styles.description, { alignSelf: 'center', color: 'white', marginTop: 20 }]}>No tracked events to show</Text>
                        )
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.cayenneDark,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 10,
        borderLeftWidth: 6,
        borderRadius: 5
    },

    description: {
        fontSize: 16,
        color: "#008080",
        fontWeight: 'bold',
    },
});

DrawerMenuItem.propTypes = {
    trackedList: PropTypes.array,
    registeredUser: PropTypes.String
};

DrawerMenuItem.defaultProps = {
    trackedList: [],
    registeredUser: ''
};

const mapStateToProps = state => ({
    trackedList: state.event.eventListByName[state.addName.registeredUser],
    registeredUser: state.addName.registeredUser
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenuItem);
