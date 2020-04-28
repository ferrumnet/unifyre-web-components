import React, {useContext} from 'react';
import {ThemedText} from "./ThemedText";
import {Theme, ThemeContext} from 'unifyre-react-helper';
import {PropTypes} from 'prop-types';

export function ThemedLink({text, onPress, disabled}) {
    const theme = useContext(ThemeContext)
    const styles = themedStyles(theme);
    return (
        <button onPress={onPress}><ThemedText.H4 text={text} style={styles.link}/></button>
    )
}

ThemedLink.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
}

const themedStyles =  function(theme){
    return {
        link: {
            color: theme.get(Theme.Text.linkColor),
        }
    }
}
