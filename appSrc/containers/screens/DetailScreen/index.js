import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import { BackButton, TextButton } from '../../components/buttons';
import { addToTrackedList } from '../../../actions/eventActions';

class DetailScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Details Page',
        headerTitleStyle: {
            fontWeight: '500',
            fontStyle: 'italic',
            fontSize: 24,
            color: appColor.white,
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%'
        },
        headerStyle: {
            backgroundColor: appColor.cayenneDark,
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0
        },
        headerLeft: () => <BackButton />
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { navigation } = this.props;
    }

    onTrackPress = (item) => {
        this.props.dispatch(addToTrackedList(item));
    }

    render() {
        const { navigation } = this.props;
        const detailsData = navigation.getParam('data');
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.container, { margin: 10 }]}>
                    <Image style={styles.avatar} source={{ uri: detailsData.event_icon }} />
                    <View style={styles.bodyContent}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.name}>Event Name: </Text>
                                <Text style={styles.nameValue}>{detailsData.event_name}</Text>
                            </View>

                            <View style={styles.titleContainer}>
                                <Text style={styles.name}>Event Location: </Text>
                                <Text style={styles.nameValue}>{detailsData.event_location}</Text>
                            </View>

                            <View style={styles.titleContainer}>
                                <Text style={styles.name}>Entry Type: </Text>
                                <Text style={styles.nameValue}>{detailsData.event_type}</Text>
                            </View>

                            <View style={styles.titleContainer}>
                                <TextButton onPress={() => this.onTrackPress(detailsData)}/>
                            </View>
                        </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.cayenneDark,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: appColor.white,
        // marginBottom: 10,
        // alignSelf: 'center',
    },
    bodyContent: {
        // flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: appColor.cayenneMain,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: appColor.white,
    },
    titleContainer: { margin: 5, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
    name: {
        fontSize: 16,
        color: "black",
        fontWeight: "600"
    },
    nameValue: {
        fontSize: 20,
        color: "white",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
});

const mapDispatchToProps = dispatch => ({
    dispatch
})
export default connect(null, mapDispatchToProps)(DetailScreen);