import React, { useContext } from "react";
import { ThemeContext, ResourceContext } from "unifyre-react-helper";
import { getRenderedResource } from "unifyre-native-assets";

/**
 * Get big logo component
 *
 * @constructor
 */
export function BigLogo() {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const resources = useContext(ResourceContext);
  const logoSource = getRenderedResource("App.Icon.Big", "App.Icon.Big");

  return (
    <div style={{...styles.container}}>
      <img style={{...styles.logo}} src={logoSource} alt="big logo" />
    </div>
  );
}

const themedStyles = function(theme) {
  return {
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    },
    logo: {
      position: "absolute"
    }
  };
};
