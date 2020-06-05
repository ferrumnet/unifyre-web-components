import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function ListItem({onClick, children}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <a style={Object.assign(styles.listItemContainer)} onClick={onClick}>
            {children}
        </a>
    );
}

export function List({items, itemRenderer}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <div style={Object.assign(styles.listContainer)}>
            {items.map((i, idx) => itemRenderer({index: idx, item: i}))}
        </div>
    );
}

const themedStyles = theme => ({
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: theme.get(Theme.Spaces.line) * 4,
        padding: theme.get(Theme.Spaces.line),
    },
});