import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { ThemeContext, Theme } from "unifyre-react-helper";
import { getRenderedResource } from "unifyre-native-assets";
import { Icon } from "@iconify/react";
import mdArrowDropdown from "@iconify/icons-ion/md-arrow-dropdown";

/**
 * InputSearch components
 * @param       {[type]} open [description]
 * @constructor
 */
export function InputSearch({ open }) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);

  let searchIconSearch = getRenderedResource("Icon.Search");
  let iconDropDownStyle = {
    size: theme.get(Theme.Text.h2Size),
    color: theme.get(Theme.Colors.bkgShade3)
  };

  return (
    <div style={styles.inputContainer}>
      <img style={styles.icon} source={searchIconSearch} />
      <input type="text" style={styles.input} maxlength="40" />
      <div style={styles.dropdownContainer}>
        <Icon
          icon={mdArrowDropdown}
          size={iconDropDownStyle.size}
          color={iconDropDownStyle.color}
        />
      </div>
    </div>
  );
}

InputSearch.propTypes = {
  open: PropTypes.func
};

const themedStyles = function(theme) {
  return {
    inputContainer: {
      borderRadius: theme.get(Theme.Button.btnBorderRadius),
      borderColor: theme.get(Theme.Input.inputBackground),
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: theme.get(Theme.Input.inputBackground),
      flexDirection: "row",
      borderBottomWidth: 1,
      paddingHorizontal: theme.get(Theme.Button.btnBorderRadius)
    },
    input: {
      backgroundColor: theme.get(Theme.Input.inputBackground),
      fontSize: theme.get(Theme.Input.inputTextSize) * 0.5,
      color: theme.get(Theme.Colors.textColor),
      paddingLeft: theme.get(Theme.Button.btnBorderRadius),
      flex: 1
    },
    icon: {
      height: theme.get(Theme.Text.h3Size),
      width: theme.get(Theme.Text.h3Size),
      justifyContent: "center",
      alignSelf: "center"
    },
    dropdownContainer: {
      alignItems: "center",
      marginTop: 3
    }
  };
};
