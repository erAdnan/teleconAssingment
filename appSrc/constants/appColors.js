export const appColor = {
    white: '#FFFFFF',
    black: '#000000',
    buttonDefault: '#2699FB',
    fabSelected: '#EB3C31',

    grey: {
        900: '#25282A',
        800: '#54585A',
        700: '#707372',
        600: '#898D8D',
        500: '#9EA2A2',
        400: '#B2B4B2',
        300: '#C7C9C7',
        100: '#F9F9F9'
    },

    cayenneLight: '#FDE9E0',
    cayenneMain: '#EB3C31',
    cayenneDark: '#B02D2A',

    grayLight: '#EDEDEE',
    grayMain: '#65686B',
    grayDark: '#53565A',

    randomColor() {
        return ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    },

    withAlpha(color, alpha) {
        let hex = (alpha * 100).toString(16);
        hex = hex.length % 2 ? `0${hex}` : hex;
        return color + hex;
    },

  };