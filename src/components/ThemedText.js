import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export class ThemedText {
    static H1({style, children}) {
        return ThemedText.text({children, style}, s => s.h1);
    }

    static H2({style, children}) {
        return ThemedText.text({children, style}, s => s.h2);
    }

    static H3({style, children}) {
        return ThemedText.text({children, style}, s => s.h3);
    }

    static H4({style, children}) {
        return ThemedText.text({children, style}, s => s.h4);
    }

    static P({style, children}) {
        return ThemedText.text({children, style}, s => s.p);
    }

    static MONO({style, children}) {
        return ThemedText.text({children, style}, s => s.mono);
    }

    static SMALL({style, children }) {
        return ThemedText.text({children, style}, s => s.small);
    }

    static text({children, style}, styleSelector) {
        const theme = useContext(ThemeContext);
        const styles = themedStyles(theme);

        return (
            <span style={{...styles.commonText, ...styleSelector(styles), ...(style || {})}}
            >{children}</span>
        );
    }
}


const W = {};

export function widthFactor() {
    if (W.val) {
        return W.val;
    }
    const win = window.innerWidth;
    const baseSize = 375; // iPhoneX https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
    W.val = Math.min(win/baseSize, 1);
    return W.val;
}

const themedStyles = theme => ({
    commonText: {
        fontFamily: theme.get(Theme.Font.main),
        color: theme.get(Theme.Colors.textColor),
    },
    h1: {
        fontSize: theme.get(Theme.Text.h1Size) * widthFactor(),
    },
    h2: {
        fontSize: theme.get(Theme.Text.h2Size) * widthFactor(),
    },
    h3: {
        fontSize: theme.get(Theme.Text.h3Size) * widthFactor(),
    },
    h4: {
        fontSize: theme.get(Theme.Text.h4Size) * widthFactor(),
    },
    p: {
        fontSize: theme.get(Theme.Text.h2Size) * 0.7 * widthFactor(),
    },
    small: {
        fontSize: theme.get(Theme.Text.h3Size) * 0.7 * widthFactor(),
    },
    mono: {
        fontFamily: 'Courier, monospace',
        fontSize: theme.get(Theme.Text.h3Size) * widthFactor(),
    }
});
