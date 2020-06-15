
import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import { Hourglass } from 'react-spinners-css';
import { FullScreen } from './FullScreen';

export function Waiting({show}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    if (!show) {
        return (<div />);
    }
    return (
        <FullScreen>
            <div style={styles.subContainer}>
                <Hourglass color={theme.get(Theme.Colors.bkgShade3)} />
            </div>
        </FullScreen>
    )
}

const themedStyles = theme => ({
    subContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.get(Theme.Colors.bkgShade0).substr(0, 7) + 'CC',
    }
});