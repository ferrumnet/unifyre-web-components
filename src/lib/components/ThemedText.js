import React, { useContext } from "react";
import { ThemeContext, Theme } from "unifyre-react-helper";
import { useWindowSize } from "./Helper";

export class ThemedText {
  static H1({ text, style }) {
    return ThemedText.text({ text, style }, s => s.h1);
  }

  static H2({ text, style }) {
    return ThemedText.text({ text, style }, s => s.h2);
  }

  static H3({ text, style }) {
    return ThemedText.text({ text, style }, s => s.h3);
  }

  static H4({ text, style }) {
    return ThemedText.text({ text, style }, s => s.h4);
  }

  static P({ text, style }) {
    return ThemedText.text({ text, style }, s => s.p);
  }

  static SMALL({ text, style }) {
    return ThemedText.text({ text, style }, s => s.small);
  }

  static text({ text, style = {} }, styleSelector) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
      <div style={{ ...styles.commonText, ...styleSelector(styles), ...style }}>
        {text}
      </div>
    );
  }
}

export function widthFactor() {
  const size = useWindowSize();
  const w = size.width;
  let wf = 1;
  if (w <= 320) {
    wf = 0.7;
  }
  return wf;
}

const themedStyles = function(theme) {
  return {
    commonText: {
      fontFamily: theme.get(Theme.Font.main),
      color: theme.get(Theme.Colors.textColor)
    },
    h1: {
      fontSize: theme.get(Theme.Text.h1Size) * widthFactor()
    },
    h2: {
      fontSize: theme.get(Theme.Text.h2Size) * widthFactor()
    },
    h3: {
      fontSize: theme.get(Theme.Text.h3Size) * widthFactor()
    },
    h4: {
      fontSize: theme.get(Theme.Text.h4Size) * widthFactor()
    },
    p: {
      fontSize: theme.get(Theme.Text.h2Size) * 0.7 * widthFactor()
    },
    small: {
      fontSize: theme.get(Theme.Text.h3Size) * 0.7 * widthFactor()
    }
  };
};
