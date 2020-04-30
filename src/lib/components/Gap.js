import React, { useContext } from "react";
import { ThemeContext, Theme } from "unifyre-react-helper";

export function Gap({ size }) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  return (
    <div style={{ ...styles.gap, ...(size === "small" ? styles.smallGap : {}) }}>
    </div>

    
  );
}

const themedStyles = function(theme) {
  return {
    gap: {
      width: "100%",
      height: theme.get(Theme.Spaces.gap)
    },
    smallGap: {
      height: theme.get(Theme.Spaces.gap) / 2
    }
  };
};
