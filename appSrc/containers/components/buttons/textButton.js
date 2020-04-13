import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { appColor } from '../../../constants/appColors';
import images from '../../../images';
import PropTypes from 'prop-types';

class TextButton extends Component {
    render() {
        const { title, onPress, ...props } = this.props;
        return (
            <TouchableOpacity
                {...props}
                accessibilityRole="button"
                onPress={onPress}
                style={styles.buttonButton}
            >
                <Text style={{ textAlign: 'center', color: appColor.white }}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonButton: {
        padding: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4BD964',
        borderRadius: 10
    }
});

TextButton.defaultProps = {
    title: 'Start Tracking',
    onPress: () => {}
};

TextButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};

export default TextButton;
