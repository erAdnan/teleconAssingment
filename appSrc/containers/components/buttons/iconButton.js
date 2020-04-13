import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import PropTypes from 'prop-types';

class IconButton extends Component {
    render() {
        const { tintColor, imgSrc, onPress, wrapperStyle, showTint, ...props } = this.props;
        return (
            <TouchableOpacity
                {...props}
                accessibilityRole="button"
                onPress={onPress}
                style={[styles.buttonButton, {...wrapperStyle}]}
            >
                <Image source={imgSrc} style={{ height: 20, width: 20, tintColor: showTint && tintColor }} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonButton: {
        padding: 5,
        backgroundColor: appColor.white,
        // margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
        shadowColor: 'rgba(0,0,0, .5)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    }
});

IconButton.defaultProps = {
    tintColor: 'white',
    onPress: () => { },
    imgSrc: images.icAddWhite,
    wrapperStyle: {},
    showTint: false
};

IconButton.propTypes = {
    tintColor: PropTypes.string,
    showTint: PropTypes.bool,
    onPress: PropTypes.func,
    imgSrc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    wrapperStyle: PropTypes.shape({})
};

export default IconButton;
