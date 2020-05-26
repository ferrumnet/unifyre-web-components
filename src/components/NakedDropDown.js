import React, {useContext, useState} from 'react';
import {Theme, ThemeContext} from "unifyre-react-helper";
import {ThemedText} from "./ThemedText";

export function NakedDropDown({items, value, style, textStyle, onSelectionChange}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
        <select style={Object.assign(styles.selectContainer)}>
            {items.map((i, idx) => (<option key={idx} value={i.key}>{i.label}</option>))}
        </select>
    );
}

export function NakedDropDown_({items, value, style, textStyle, onSelectionChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    let iconDropDownStyle = {
        size: theme.get(Theme.Text.h2Size),
        color: theme.get(Theme.Colors.bkgShade2)
    };

    const selectedItem = items.find(i => i.key === value);
    const selectedLabel = selectedItem ? selectedItem.shortLabel || selectedItem.label : value;
    const icon = items.length > 1 ? (
        <Ionicons name="md-arrow-dropdown" size={iconDropDownStyle.size}
                  color={iconDropDownStyle.color} />
    ) : undefined;

    return (
        <>
            <TouchableOpacity
                style={[styles.dropdownContainer, style || {}]}
                onPress={() => items.length > 1 ? setIsOpen(true) : {}}
            >
                <View style={styles.dropdownIcon}>{icon}</View>
                <View style={styles.dropdownText}>
                    <ThemedText.H3 text={selectedLabel} style={[textStyle, styles.text]} />
                </View>
            </TouchableOpacity>
            <ModalSelector
                data={items}
                initValue={value}
                onChange={(v) => onSelectionChange(v)}
                customSelector={<View/>}
                visible={isOpen}
                onModalClose={() => setIsOpen(false)}
            />
        </>
    );
}

const themedStyles = theme => ({
    selectContainer: {
        backgroundColor: 'transparent',
        border: 0,
        marginRight: theme.get(Theme.Spaces.line) * 0.5,
        color: theme.get(Theme.Input.inputTextColor),
    },
    dropdownContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: theme.get(Theme.Spaces.line) * 6,
    },
    dropdownIcon: {
        width: theme.get(Theme.Spaces.line) * 2,
        alignItems: 'center',
        marginTop: 3,
    },
    dropdownText: {
        alignItems: 'center',
        marginTop: 3,
    },
    text: {
       color: theme.get(Theme.Input.inputTextColor),
    }
});
