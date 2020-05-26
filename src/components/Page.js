import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function Page({children}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
    <div style={{...styles.fullScreen, ...styles.smallGap}}>
        {children}
    </div>
    );
}

const themedStyles = theme => ({
    fullScreen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.get(Theme.Colors.bkgShade0),
        fontSize: theme.get(Theme.Text.pSize),
        minHeight: window.innerHeight,
    },
    smallGap: {
    }
});