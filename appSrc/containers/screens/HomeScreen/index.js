import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    UIManager,
    StyleSheet,
} from 'react-native';

import { appColor } from '../../../constants/appColors';
import { MenuButton, IconButton } from '../../components/buttons';
import NavigationService from '../../../services/navigationService';
import { drawer } from "../../../navigation/appNavigation";
import ListComponent from '../../components/todo/listComponent';
import { getEvents } from '../../../actions/eventActions';
import { updateInputField } from '../../../actions/addNameAction';
import images from '../../../images';

class EventsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Event Lists',
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
        headerRight: () => <IconButton
            imgSrc={navigation.getParam('isGridView', false) ? images.icGrid : images.icList}
            wrapperStyle={{ width: 30, height: 30 }}
            onPress={navigation.getParam('toggleListGridView')}
        />,
    });

    constructor(props) {
        super(props);

        this.state = {
            isGridView: false
        }
    }

    componentDidMount() {
        const { navigation, dispatch } = this.props;
        
        dispatch(getEvents()); //--get event lists
        navigation.setParams({
            toggleListGridView: this.toggleListGridView,
            isGridView: this.state.isGridView
        });

        setTimeout(() => {
            NavigationService.navigate('AddNameModal')
        }, 100);
    }

    toggleListGridView = () => {
        this.setState({
            isGridView: !this.state.isGridView
        }, () => {
            this.props.navigation.setParams({
                isGridView: this.state.isGridView
            });
        })
    }


    render() {
        const { eventsList, dispatch } = this.props;
        return (
            <View style={styles.container}>
                <ListComponent
                    isGridView={this.state.isGridView}
                    data={eventsList}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColor.cayenneMain
    },
});

EventsScreen.propTypes = {
    eventsList: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

EventsScreen.defaultProps = {
    eventsList: [],
};

const mapStateToProps = state => ({
    eventsList: state.event.eventsList
})

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
