
import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import { Hourglass } from 'react-spinners-css';
import { FullScreen } from './FullScreen';
import { ThemedText } from './ThemedText';
import { Gap, Row } from './Layouts';

export function Waiting({show, message}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    if (!show) {
        return (<div />);
    }
    const messageComp = message ? (
        <>
        <Row withPadding centered>
            <div style={{textAlign: 'center'}}>
            <ThemedText.H3>{message}</ThemedText.H3>
            </div>
        </Row>
        </>
    ) : undefined;
    return (
        <FullScreen>
            <div style={styles.subContainer}>
                {messageComp}
                <Gap />
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
        flexDirection: 'column',
        backgroundColor: theme.get(Theme.Colors.bkgShade0).substr(0, 7) + 'CC',
    }
});