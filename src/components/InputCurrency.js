import React, {useContext, useState, useEffect} from 'react';
import {InputGroupAddon} from './InputGroupAddon';
import {NakedDropDown} from "./NakedDropDown";
import {ThemeContext, Theme} from "unifyre-react-helper";
import {widthFactor} from "./ThemedText";

export function InputCurrency({currencies, placeHolder, amountStr, onAmountChanged,
    currency, onCurrencyChanged, autoFocus, formatter, formatDigits = 6, ...props}) {
    if (!formatter || !formatter.format || !formatter.unFormat) {
        throw new Error('Formatter is requried')
    }
    const [value, setValue] = useState('');
    useEffect(() => {
        if (amountStr && formatter.unFormat(value || '0') !== amountStr) {
            setValue(formatter.unFormat(amountStr));
        }
    }, [amountStr]);
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
        <InputGroupAddon
            value={value}
            placeholder={placeHolder}
            onChange={v => {
                const numv = formatter.unFormat(v);
                if (numv) {
                    setValue(v);
                    onAmountChanged(numv);
                }
                }
            }
            autoFocus={autoFocus}
            inputMode={'decimal'}
            textStyle={styles.textStyle}
            editable={undefined}
            rightAddon={<NakedDropDown
                items={currencies.map(c => ({label: c.label, key: c.key}))}
                value={currency}
                style={styles.currencyWrapperStyle}
                textStyle={styles.textStyle}
                onSelectionChange={p => onCurrencyChanged(p.key)}
            />}
            {...props}
        />
    );
}

const themedStyles = theme => ({
    textStyle: {
        fontSize: theme.get(Theme.Text.h3Size) * widthFactor(),
        color: theme.get(Theme.Input.inputTextColor),
    },
    currencyWrapperStyle: {
        width: theme.get(Theme.Spaces.line) * 6,
    }
});
