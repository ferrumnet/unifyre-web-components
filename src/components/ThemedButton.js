import React, {useContext, useState} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import { ThemedText } from './ThemedText';
import '../css/main.css';

export function ThemedButton({text, disabled, highlight, onClick,testStyle}) {
  const theme = useContext(ThemeContext);
  const styles = themedStyles(theme);
  return ( <a className={'button'}
    style={{...styles.btn, ...(highlight? styles.highlight : {}), ...(disabled ? styles.disabled : {})}}
    onClick={() => disabled ? { } : onClick()}>
    <ThemedText.P style={{...styles.btnText,...testStyle}}>{text}</ThemedText.P></a> );
}

const themedStyles = theme => ({
    btn: {
      backgroundColor: theme.get(Theme.Button.btnPrimary),
      color: theme.get(Theme.Button.btnPrimaryTextColor),
      borderRadius: theme.get(Theme.Button.btnBorderRadius),
      padding: theme.get(Theme.Button.btnPadding) / 2,
      textAlign: 'center',
      display: 'block',
      flex: 1,
    },
    highlight: {
      backgroundColor: theme.get(Theme.Button.btnHighlight),
      color: theme.get(Theme.Button.btnHighlightTextColor),
    },
    btnText: {
      color: theme.get(Theme.Button.btnPrimaryTextColor),
    },
    disabled: {
      backgroundColor: theme.get(Theme.Button.inverseBtnPrimary),
      color: theme.get(Theme.Button.inverseBtnPrimaryTextColor),
    },
});