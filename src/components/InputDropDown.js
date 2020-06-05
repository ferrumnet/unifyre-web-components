import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext, Theme} from "unifyre-react-helper";
import {widthFactor} from "./ThemedText";

export function InputDropDown({items, selectedKey, onItemSelected, itemRenderer}) {
    const [open, setOpen] = useState(false);
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    const dropDownItem = (i, idx) => {
        const firstItemStyle = (idx === 1 ? styles.firstItem : {})
        const lastItemStyle = (idx === items.length-1 ? styles.lastItem : {})
        return (
            <a key={idx} style={{...styles.item, ...firstItemStyle, ...lastItemStyle}} onClick={() => {
                setOpen(false);
                onItemSelected(i.key);
            }}>
                <div style={Object.assign(styles.selectPart)}>{itemRenderer(i)}</div>
            </a>
        );
    }
    const selectedItem = (items || []).find(i => i.key === selectedKey);
    return (
        <div style={Object.assign(styles.container)}>
            <div style={Object.assign(styles.containerInner, styles.open)}>
            <a style={Object.assign(styles.menuContainer, styles.item)} onClick={() => setOpen(!open)} >
                <div style={styles.selectPart}>{itemRenderer(selectedItem || items[0])}</div>
                <div style={styles.icon}>🡇</div>
            </a>
            {open ? (
                <>
                {items.filter(i => i.key !== (selectedKey || 0)).map((i, idx) => dropDownItem(i, idx+1))}
                </>
            ) : undefined}
            </div>
        </div>
    );
}

const themedStyles = theme => ({
    container: {
        fontSize: theme.get(Theme.Text.h3Size) * widthFactor(),
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        minHeight: theme.get(Theme.Spaces.line) * 4,
    },
    containerInner: {
        position: 'relative',
    },
    open: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
    },
    menuContainer: {
        color: theme.get(Theme.Input.inputTextColor),
        borderColor: theme.get(Theme.Colors.bkgShade4),
        borderRadius: theme.get(Theme.Spaces.line) * 2,
        backgroundColor: theme.get(Theme.Input.inputBackground),
    },
    item: {
        height: theme.get(Theme.Spaces.line) * 4,
        display: 'block',
        borderColor: theme.get(Theme.Colors.bkgShade4),
        borderWidth: 1,
        backgroundColor: theme.get(Theme.Input.inputBackground),
        color: theme.get(Theme.Input.inputTextColor),
        paddingLeft: theme.get(Theme.Spaces.line) * 2,
        paddingRight: theme.get(Theme.Spaces.line) * 2,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        width: 45,
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectPart: {
        flex: 1,
    },
    firstItem: {
        borderTopLeftRadius: theme.get(Theme.Spaces.line) * 2, 
        borderTopRightRadius: theme.get(Theme.Spaces.line) * 2, 
    },
    lastItem: {
        borderBottomLeftRadius: theme.get(Theme.Spaces.line) * 2, 
        borderBottomRightRadius: theme.get(Theme.Spaces.line) * 2, 
    },
});
