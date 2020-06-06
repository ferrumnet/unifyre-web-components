import React, {useContext, useState} from 'react';
import {Theme, ThemeContext} from "unifyre-react-helper";
import {ThemedText} from "./ThemedText";

export function NakedDropDown({items, value, style, textStyle, onSelectionChange}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
        <select style={Object.assign(styles.selectContainer)}>
            {items.map((i, idx) => (<option key={idx} value={i.key}>{i.label}</option>))}
        </select>
    );
}

const themedStyles = theme => ({
    selectContainer: {
        backgroundColor: 'transparent',
        border: 0,
        marginRight: theme.get(Theme.Spaces.line) * 0.5,
        color: theme.get(Theme.Input.inputTextColor),
    },
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: theme.get(Theme.Spaces.line) * 6,
    },
    dropdownIcon: {
        width: theme.get(Theme.Spaces.line) * 2,
        alignItems: 'center',
        marginTop: 3,
    },
    dropdownText: {
        alignItems: 'center',
        marginTop: 3,
    },
    text: {
       color: theme.get(Theme.Input.inputTextColor),
    }
});
