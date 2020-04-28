import React, {useContext} from 'react';
import {Theme, ThemeContext} from "unifyre-react-helper";

export function PageMainContent({children}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
        <div style={[styles.mainSection]}>
            {children}
        </div>
    );
}

const themedStyles = function(theme){
    return{
        mainSection: {
            width: '100%',
            backgroundColor: theme.get(Theme.Colors.bkgShade0),
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginVertical),
        },
    };
}
