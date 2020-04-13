import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import { IconButton } from '../../components/buttons';
import NavigationService from '../../../services/navigationService';
import images from '../../../images';
import { appColor } from '../../../constants/appColors';

const ListComponent = props => {

    const handleOnPress = (item, index) => {
        NavigationService.navigate('DetailScreen', {
            data: item
        })
    }
    return (
        <View style={{ flex: 1 }}>
            {
                props.data.length > 0 ? (
                    <FlatList
                        key={props.isGridView ? 2 : 1}
                        style={styles.tasks}
                        columnWrapperStyle={styles.listContainer}
                        data={props.data}
                        extraData={props.data}
                        numColumns={props.isGridView ? 2 : 1}
                        keyExtractor={index => String(index)}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={[styles.card, { borderColor: appColor.randomColor() }]}
                                    onPress={() => handleOnPress(item, index)}
                                >
                                    {props.isGridView && <Image style={styles.avatar} source={{ uri: item.event_icon }} />}

                                    <View style={styles.cardContent}>
                                        <Text style={[styles.description]}>{item.event_name}</Text>
                                        <Text style={styles.date}>{item.event_location}</Text>
                                        <Text style={styles.events}>{item.event_type}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                )
                    :
                    (
                        <Text style={[styles.description, { alignSelf: 'center', color: 'white', marginTop: 20 }]}>No tasks to show</Text>
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    tasks: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 25,
        height: 25,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white',
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
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        padding: 10,
        borderLeftWidth: 6,
        borderRadius: 5
    },

    description: {
        fontSize: 16,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },
    events: {
        fontSize: 14,
        flex: 1,
        color: 'green',
        marginTop: 5
    },
});

ListComponent.propTypes = {
    isGridView: PropTypes.bool,
    data: PropTypes.array
};

ListComponent.defaultProps = {
    isGridView: false,
    data: []
};

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(null, mapDispatchToProps)(ListComponent);
