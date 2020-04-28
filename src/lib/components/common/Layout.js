import { PropTypes } from "prop-types";
import React, { useContext } from 'react';
import { ThemeContext, Theme } from 'unifyre-react-helper';

/**
 * Single row layout - container
 * @param       {object} children
 * @constructor
 */
export function Row({ withPadding, gapMarginTop, children, noMarginTop }) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let withPaddingStyle, withGapMarginTop, noMarginTopStyle;

    if (withPadding !== undefined) {
        withPaddingStyle = styles.withPadding;
    }

    if (noMarginTop !== undefined) {
        noMarginTopStyle = styles.noMarginTop;
    }

    if (gapMarginTop !== undefined) {
        withGapMarginTop = styles.gapMarginTop;
    }

    return (
        <div style={{ ...styles.row, ...withPaddingStyle, ...withGapMarginTop, ...noMarginTopStyle }}>
            {children}
        </div>
    );
}

Row.propTypes = {
    children: PropTypes.node,
}


/**
 * Sticky bottom container
 *
 * @param       {object} children
 * @constructor
 */
export function StickyBottom({ children }) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <div style={styles.stickyBottom}>
            {children}
        </div>
    );
}

StickyBottom.propTypes = {
    children: PropTypes.node,
}

const themedStyles = function (theme) {
    return {
        row: {
            width: '100%',
            marginTop: theme.get(Theme.Spaces.line),
        },
        withPadding: {
            paddingLeft: theme.get(Theme.Spaces.screenMarginVertical),
            paddingRight: theme.get(Theme.Spaces.screenMarginVertical),
        },
        stickyBottom: {
            position: 'absolute',
            bottom: theme.get(Theme.Button.btnPadding),
            left: 0,
            right: 0,
            width: '100%',
            color: theme.get(Theme.Colors.textColor),
        },
        gapMarginTop: {
            marginTop: theme.get(Theme.Spaces.gap),
        },
        noMarginTop: {
            marginTop: 0,
        },
    }
}
