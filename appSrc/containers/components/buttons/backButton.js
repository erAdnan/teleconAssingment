import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import PropTypes from 'prop-types';
import NavigationService from '../../../services/navigationService';

class BackButton extends Component {
    render() {
        const { tintColor, onPress, ...props } = this.props;
        return (
            <TouchableOpacity
                {...props}
                accessibilityRole="button"
                onPress={onPress}
                style={styles.button}
            >
                <Image source={images.icBack} style={{ height: 25, width: 25, tintColor: appColor.white }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        marginLeft: { android: 0, ios: -15 }[Platform.OS],
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

BackButton.defaultProps = {
    onPress: () => NavigationService.goBack()
};

BackButton.propTypes = {
    onPress: PropTypes.func
};

export default BackButton;
