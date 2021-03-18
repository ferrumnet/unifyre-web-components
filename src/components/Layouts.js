import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';


/**
 * Single row layout - container
 * @param       {object} children
 * @constructor
 */
export function Row({withPadding, withPaddingLeftOnly, gapMarginTop, children, noMarginTop, centered}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let withPaddingStyle, withGapMarginTop, noMarginTopStyle, withCentered;

    if (withPadding !== undefined) {
        withPaddingStyle = styles.withPadding;
    }

    if (withPaddingLeftOnly !== undefined) {
        withPaddingStyle = styles.withPaddingLeftOnly;
    }

    if (noMarginTop !== undefined) {
        noMarginTopStyle = styles.noMarginTop;
    }

    if (gapMarginTop !== undefined) {
        withGapMarginTop = styles.gapMarginTop;
    }

    if (centered !== undefined) {
        withCentered = styles.centered;
    }

    return (
        <div style={{...styles.row,
            ...withPaddingStyle, ...withGapMarginTop, ...noMarginTopStyle, ...withCentered}}>
            {children}
        </div>
    );
}

export function Line() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{width: '90%', borderWidth: 1, height: 1, borderColor: theme.get(Theme.Colors.bkgShade1)}}/>
    );
}

export function Gap({size}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const smallSt = size === 'small' ? styles.smallGap : {};
    return (
        <div style={{...styles.gap, ...smallSt}}> </div>
    );
}

const themedStyles = theme => ({
    row: {
        // width: '100%',
        marginTop: theme.get(Theme.Spaces.line),
        display: 'flex',
        flexDirection: 'row',
    },
    withPadding: {
        paddingLeft: theme.get(Theme.Spaces.screenMarginVertical),
        paddingRight: theme.get(Theme.Spaces.screenMarginVertical),
    },
    withPaddingLeftOnly: {
        paddingLeft: theme.get(Theme.Spaces.screenMarginVertical),
    },
    gapMarginTop: {
        marginTop: theme.get(Theme.Spaces.gap),
    },
    noMarginTop: {
        marginTop: 0,
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap: {
        width: '100%',
        height: theme.get(Theme.Spaces.gap),
    },
    smallGap: {
        height: theme.get(Theme.Spaces.gap) / 2,
    }
});
