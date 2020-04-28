import React, { useContext } from "react";
import { ThemeContext } from "unifyre-react-helper";
import { getRenderedResource } from "unifyre-native-assets";

/**
 * Get app logo - will be modified soon to be used widely
 *
 * @constructor
 */
export function Logo() {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const logoSource = getRenderedResource("App.Icon.Small");

  return (
    <div style={{ alignItems: "center" }}>
      <img
        style={styles.logo}
        resizeMode="contain"
        resizeMethod="resize"
        src={logoSource}
        alt="logo"
      />
    </div>
  );
}

const themedStyles = function(theme) {
  return {
    logo: {
      height: 60
    }
  };
};
