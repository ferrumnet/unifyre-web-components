import React, {useContext} from 'react';
import {ThemedText} from "./ThemedText";
import {Theme, ThemeContext} from 'unifyre-react-helper';

export function ThemedLink({text, onClick, disabled, type}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
        <a onClick={onClick} >
            <ThemedText.H4 text={text} style={type === 'primary' ? styles.primaryLink : styles.link}>
                {text}
            </ThemedText.H4>
        </a>
    )
}

const themedStyles = theme => ({
    link: {
        color: theme.get(Theme.Text.linkColor),
    },
    primaryLink: {
        color: theme.get(Theme.Text.linkColor),
    }
});
