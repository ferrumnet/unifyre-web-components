import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { ThemedText } from "../ThemedText";
import { ListItem } from "../common/ListItem";
import { ThemeContext, Theme } from "unifyre-react-helper";

/**
 * List component
 * @param       {string} title
 * @param       {object} items
 * @constructor
 */
export function List({ title, items }) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  let itemsElement = items.map(({ title, icon }, index) => (
    <ListItem key={index} itemIndex={index} title={title} icon={icon} />
  ));

  return (
    <div style={styles.container}>
      <ThemedText.H4 text={title} style={styles.listHeaderTitle} />
      <div style={styles.listContainer}>{itemsElement}</div>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string
};

const themedStyles = function(theme) {
  return {
    container: {
      marginBottom: theme.get(Theme.Spaces.line)
    },
    listHeaderTitle: {
      marginLeft: theme.get(Theme.Spaces.screenMarginVertical),
      marginBottom: theme.get(Theme.Spaces.line) * 0.5
    },
    listContainer: {
      width: "100%"
    }
  };
};
