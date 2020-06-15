import React, {useContext} from 'react';
import { ThemedText } from './ThemedText';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function ErrorMessage({text}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
        <ThemedText.H4 style={styles.errorMessage}>{text}</ThemedText.H4>
    )
}

const themedStyles = theme => ({
    errorMessage: {
        color: theme.get(Theme.Text.numberDownColor),
    },
});