import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import PropTypes from 'prop-types';

class MenuButton extends Component {
    render() {
        const { tintColor, onPress, ...props } = this.props;
        return (
            <TouchableOpacity
                {...props}
                accessibilityRole="button"
                onPress={onPress}
                style={styles.buttonButton}
            >
                <Image source={images.iconMenu} style={{ height: 50, width: 50, tintColor }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonButton: {
        padding: 5,
        marginLeft: { android: 0, ios: -15 }[Platform.OS],
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

MenuButton.defaultProps = {
    tintColor: appColor.white,
    onPress: () => {}
};

MenuButton.propTypes = {
    tintColor: PropTypes.string,
    onPress: PropTypes.func
};

export default MenuButton;
