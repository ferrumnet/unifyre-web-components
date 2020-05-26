
import React, {useContext, useState} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function PageTopPart({children}) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  return ( <div style={styles.container}>{children}</div>);
}

const themedStyles = theme => ({
    container: {
      backgroundColor: theme.get(Theme.Colors.bkgShade3),
      borderRadius: `0pt 0pt ${theme.get(Theme.Spaces.line) * 2}pt ${theme.get(Theme.Spaces.line) * 2}pt`,
      padding: theme.get(Theme.Spaces.line),
    },
});