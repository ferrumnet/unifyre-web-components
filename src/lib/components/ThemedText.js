import React, { useContext } from "react";
import { ThemeContext, Theme } from "unifyre-react-helper";

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

  static text({ text, style }, styleSelector) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);

    return (
      <div>
        {text}
      </div>
    );
  }
}

const themedStyles = function(theme) {
  return {
    commonText: {
      fontFamily: theme.get(Theme.Font.main),
      color: theme.get(Theme.Colors.textColor)
    },
    h1: {
      fontSize: theme.get(Theme.Text.h1Size)
    },
    h2: {
      fontSize: theme.get(Theme.Text.h2Size)
    },
    h3: {
      fontSize: theme.get(Theme.Text.h3Size)
    },
    h4: {
      fontSize: theme.get(Theme.Text.h4Size)
    },
    p: {
      fontSize: theme.get(Theme.Text.h2Size) * 0.5
    },
    small: {
      fontSize: theme.get(Theme.Text.h3Size) * 0.5
    }
  };
};
