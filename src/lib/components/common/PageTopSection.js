import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function PageTopSection({children}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <div style={styles.topContainer}>
            {children}
        </div>
    );
}

const themedStyles = function(theme){
    return {
        topContainer: {
            width: '100%',
            paddingTop: theme.get(Theme.Spaces.line) * 2,
            backgroundColor: theme.get(Theme.Colors.bkgShade1),
            paddingBottom: theme.get(Theme.Spaces.line) * 2,
            borderBottomLeftRadius: theme.get(Theme.Spaces.line) * 2,
            borderBottomRightRadius: theme.get(Theme.Spaces.line) * 2,
            // paddingLeft: theme.get(Theme.Spaces.screenMarginHorizontal),
            // paddingRight: theme.get(Theme.Spaces.screenMarginHorizontal),
        },
    }
};
