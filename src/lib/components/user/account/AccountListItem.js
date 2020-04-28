import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { ThemedText } from "../../../components/ThemedText";
import { getRenderedResource } from "unifyre-native-assets";
import {
  ThemeContext,
  Theme,
  ResourceContext,
  ResourceKeys
} from "unifyre-react-helper";
import { InputSwitch } from "../../common/InputSwitch";

/**
 * Account security list item settings
 *
 * @param       {string} name       component list name, to be used on toggling identifier etc.
 * @param       {string} title       Title of list
 * @param       {string} description Item description
 * @param       {boolean} value       switch value
 * @param       {function} toggle      callback
 * @param       {boolean} padTop      add padding top
 * @param       {boolean} padBottom   add padding bottom
 * @param       {boolean} noBorder    no border on bottom
 * @param       {boolean} noSwitch    remove switch , add arrow icon
 *
 * @constructor
 */
export function AccountListItem({
  name,
  title,
  description,
  value,
  toggle,
  padTop,
  padBottom,
  noBorder,
  noSwitch
}) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  const resources = useContext(ResourceContext);
  const arrowIconSource = getRenderedResource("Icon.Arrow.Right");

  let stylePadTop, stylePadBottom, styleNoBorder, actionElement;

  if (padTop !== undefined) {
    stylePadTop = styles.padTop;
  }

  if (padBottom !== undefined) {
    stylePadBottom = styles.padBottom;
  }

  if (noBorder !== undefined) {
    styleNoBorder = styles.noBorder;
  }

  if (noSwitch !== undefined) {
    actionElement = (
      <img style={styles.arrowIcon} src={arrowIconSource} alt="icon" />
    );
  } else {
    actionElement = (
      <InputSwitch
        onChange={value => toggle(value, name)}
        value={value}
        style={styles.actionSwitch}
      />
    );
  }

  return (
    <div
      style={{
        ...styles.container,
        ...stylePadBottom,
        ...stylePadTop,
        ...styleNoBorder
      }}
    >
      <div style={styles.textContainer}>
        <ThemedText.P text={title} />
        <ThemedText.SMALL text={description} />
      </div>
      <div style={styles.iconContainer}>{actionElement}</div>
    </div>
  );
}

AccountListItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.bool,
  toggle: PropTypes.func,
  padTop: PropTypes.bool,
  padBottom: PropTypes.bool,
  noBorder: PropTypes.bool
};

const themedStyles = function(theme) {
  return {
    container: {
      flexDirection: "row",
      // borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.get(Theme.List.listItemBorderColor)
    },
    textContainer: {
      flex: 5
    },
    iconContainer: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center"
    },
    padTop: {
      paddingTop: theme.get(Theme.Spaces.line)
    },
    padBottom: {
      paddingBottom: theme.get(Theme.Spaces.line)
    },
    noBorder: {
      borderBottomWidth: 0
    },
    actionSwitch: {
      marginRight: -2
    },
    arrowIcon: {
      height: 10
    }
  };
};
