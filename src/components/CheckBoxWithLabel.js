import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import {
    ThemedText,
    // @ts-ignore
} from 'unifyre-web-components';

/**
 * Single row layout - container
 * @param       {object} children
 * @constructor
 */
export function Checkbox({onChange,leftLabel,status, gapMarginTop, value}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <div style={{...styles.row,...styles.withPadding,...gapMarginTop}}>
            <ThemedText.H4>{leftLabel}</ThemedText.H4>
            <input
                type="checkbox"
                value={value}
                checked={status}
                onChange={()=>onChange()}
            />
        </div>
    );
}

const themedStyles = theme => ({
    row: {
        // width: '100%',
        marginTop: theme.get(Theme.Spaces.line),
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '88%'
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
    },
    input:{
        height: theme.get(Theme.Spaces.gap) / 2,
    }
});
