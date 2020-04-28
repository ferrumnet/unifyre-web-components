import React, {useContext} from 'react';
import {ThemedText} from "./ThemedText";
import {Theme, ThemeContext} from 'unifyre-react-helper';
import {PropTypes} from "prop-types";

/**
 * Theme App Button component
 *
 * @param       {string}  text
 * @param       {string}  type
 * @param       {Boolean}  disabled
 * @param       {Boolean} isSmall              add this attribute to make button smaller
 * @param       {callback}  onPress
 * @param       {String}  [position='normal'}]
 * @constructor
 */
export function ThemedButton({text, type, disabled, isSmall, onPress, position = 'normal'}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let bkgStyle, textStyle, buttonPositionStyle;

    // position changer
    if (position === 'sticky-bottom')
        buttonPositionStyle = styles.stickyBottom;
    else
        buttonPositionStyle = styles.common;

    // Button size mutator
    let buttonSizeStyle, textSizeStyle;
    if (isSmall !== undefined) {
        buttonSizeStyle = styles.smallButton;
        textSizeStyle = styles.smallText;
    }

    switch (type) {
        default:
        case 'primary':
            bkgStyle = styles.primary;
            textStyle = styles.textPrimary;
            break;
        case 'highlight':
            bkgStyle = styles.highlight;
            textStyle = styles.textHighlight;
            break;
        case 'inverse':
            bkgStyle = styles.inverse;
            textStyle = styles.textInverse;
            break;
        case 'notification':
            bkgStyle = styles.primary;
            textStyle = styles.textInverse;
            textSizeStyle = styles.smallText;
            buttonPositionStyle = styles.notification;
            break;
    }

    return (
        <button onClick={onPress} disabled={disabled} style={{...bkgStyle, ...buttonPositionStyle, ...buttonSizeStyle}}  >
            <ThemedText.H4 text={text} style={{...textStyle, ...textSizeStyle}} />
        </button>
    );
}

ThemedButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'highlight', 'inverse', 'notification']),
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
}

const themedStyles = function(theme){
    return {
    common: {
        width: '100%',
        borderRadius: theme.get(Theme.Button.btnBorderRadius),
        paddingVertical: theme.get(Theme.Button.btnPadding) * 0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        height: '35px',
    },
    smallButton: {
        paddingVertical: theme.get(Theme.Button.btnPadding) / 4,
    },
    smallText: {
        fontSize: theme.get(Theme.Text.h2Size) * 0.5,

    },
    notification: {
        width: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: theme.get(Theme.Button.btnBorderRadius),
        borderBottomLeftRadius: theme.get(Theme.Button.btnBorderRadius),
        paddingVertical: theme.get(Theme.Spaces.gap) / 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.get(Theme.Button.btnHighlight),
        cursor: 'pointer',
    },
    stickyBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: theme.get(Theme.Button.btnPadding),
        left: theme.get(Theme.Spaces.screenMarginVertical),
        width: '100%',
        borderRadius: theme.get(Theme.Button.btnBorderRadius),
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primary: {
        backgroundColor: theme.get(Theme.Button.btnPrimary),
        // outline: 'none', 
    },
    highlight: {
        backgroundColor: theme.get(Theme.Button.btnHighlight),
    },
    inverse: {
        backgroundColor: theme.get(Theme.Button.inverseBtnPrimary),
        outline: 'none', 
    },
    textPrimary: {
        color: theme.get(Theme.Button.btnPrimaryTextColor),
    },
    textHighlight: {
        color: theme.get(Theme.Button.btnHighlightTextColor),
    },
    textInverse: {
        color: theme.get(Theme.Button.inverseBtnPrimaryTextColor),
    },

    }
};

