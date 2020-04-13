import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, Platform, TouchableOpacity, TextInput, Alert } from 'react-native';

import { appColor } from '../../../constants/appColors';
import metrics from '../../../constants/metrics';
import NavigationService from '../../../services/navigationService';
import {
    addUser,
    updateInputField
} from '../../../actions/addNameAction';

class AddNameModal extends Component {

    onCancel = () => {
        NavigationService.goBack()
    };

    onConfirm = () => {
        const { dispatch, prePopulateValue, indexToUpdate } = this.props;

        if(prePopulateValue.length > 0) {
            dispatch(addUser(prePopulateValue));
            NavigationService.goBack()
        } else {
            Alert.alert('Please enter your name')
        }
    };

    renderHeader = () => {
        const { textHeadear } = this.props;
        return (
            <View style={styles.header}>
                <Text style={[styles.buttonTextHeader]}>{textHeadear}</Text>
                <View style={styles.topBorderView} />
            </View>
        );
    };

    renderFooter = () => {
        const { textCancel, textConfirm } = this.props;
        return (
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={this.onCancel}
                    style={styles.buttonAction}
                >
                    <Text
                        style={{color: 'red'}}
                    >
                        {textCancel}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.onConfirm}
                    style={styles.buttonAction}
                >
                    <Text
                        style={{color: 'green'}}
                    >
                        {textConfirm}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const { prePopulateValue, dispatch } = this.props;        
        return (
            <View style={styles.container}>
                <View style={styles.overlayContainer} />
                <View style={styles.modalContainer}>
                    {
                        this.renderHeader()
                    }
                    <View style={styles.listContainer}>

                        <TextInput 
                            style={styles.inputs}
                            placeholder="Enter name here"
                            underlineColorAndroid='transparent'
                            multiline
                            value={prePopulateValue}
                            onChangeText={desc => dispatch(updateInputField(desc))} />
                    </View>
                    {
                        this.renderFooter()
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        backgroundColor: appColor.withAlpha(appColor.black, 0.4),
        minHeight: metrics.screenHeight * 3,
        minWidth: metrics.screenWidth,
    },
    container: {
        flex: 1,
        minHeight: metrics.screenHeight,
        minWidth: metrics.screenWidth,
        justifyContent: 'center'
    },
    modalContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: metrics.screenWidth - 40,
        backgroundColor: appColor.white,
        paddingVertical: 10,
        borderRadius: 10,
        borderTopWidth: { android: 1 }[Platform.OS],
        borderTopColor: { android: appColor.grey[300] }[Platform.OS],
        elevation: 1,
        zIndex: 1
    },
    header: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    topBorderView: {
        height: 1,
        width: '100%',
        backgroundColor: appColor.grayLight,
        marginVertical: 5,
        marginHorizontal: 40
    },
    footer: {
        height: 40,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: appColor.grayLight,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonAction: {
        height: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        color: appColor.buttonDefault
    },
    listContainer: {
        padding: 10,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: 200,
    },
    listItem: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appColor.white,
    },
    buttonTextHeader: {
        alignSelf: 'center',
        paddingVertical: 10,
        fontSize: 20
    },
    inputs: {
        height: 100,
        width: '100%',
        borderColor: 'green',
        borderWidth: 1,
        height: 180,
        padding: 10,
        borderRadius: 10
    },
});

AddNameModal.propTypes = {
    textHeadear: PropTypes.string,
    textCancel: PropTypes.string,
    textConfirm: PropTypes.string,
    prePopulateValue: PropTypes.string,
    indexToUpdate: PropTypes.number
};

AddNameModal.defaultProps = {
    textHeadear: "Add Your Name",
    textCancel: "CANCEL",
    textConfirm: "DONE",
    prePopulateValue: '',
    indexToUpdate: 0
};

const mapStateProps = (state, props) => ({
    textHeadear: props.navigation.getParam('title') || "Add Your Name",
    indexToUpdate: props.navigation.getParam('index') || 0,
    prePopulateValue: state.addName.inputFieldText || ''
});

const mapDispatchToProps = dispatch => ({
    dispatch
 })

export default connect(mapStateProps, mapDispatchToProps)(AddNameModal);
