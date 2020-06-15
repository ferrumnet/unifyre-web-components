import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext, Theme} from "unifyre-react-helper";
import {Row} from './Layouts';
import { ThemedText, widthFactor } from './ThemedText';
import { ThemedButton } from './ThemedButton';
import { FullScreen } from './FullScreen';

export class Dialogue {
    static _listener = undefined;
    static registerOnClick(listener) {
        Dialogue._listener = listener;
    }
    static cleanOnClick() {
        Dialogue._listener = undefined;
    }

    static async show(title, details, buttons) {
        if (!Dialogue._listener) { throw new Error('Make sure to register a Dialogue.Component');}
        return new Promise((resolve, reject) => {
            Dialogue._listener(title, details, buttons, key => resolve(key));
        });
    }

    static Component() {
        const [isVisible, setVisible] = useState(false);
        const [buttons, setButtons] = useState([{key: 'close', label: 'Close'}]);
        const [title, setTitle] = useState();
        const [details, setDetails] = useState();
        const [onBtnClick, setOnBtnClick] = useState({clicker: () => { }});
        const theme = useContext(ThemeContext);
        const styles = themedStyles(theme);
        useEffect(() => {
            Dialogue.registerOnClick((_title, _details, _buttons, _onBtnClick) => {
                setButtons(_buttons);
                setOnBtnClick({ clicker: _onBtnClick });
                setTitle(_title);
                setDetails(_details);
                setVisible(true);
            });
            return () => Dialogue.cleanOnClick();
        }, []);

        if (!isVisible) {return (<div />);}

        const buttonsRender = buttons.map((btn, idx) => (
            <div key={idx} style={styles.buttonWrapper}>
                <ThemedButton text={btn.label} onClick={() => {
                    setVisible(false);
                    onBtnClick.clicker(btn.key);
                }} />
            </div>
        ));

        return (
            <FullScreen>
                <div style={{...styles.container}}>
                <div style={{...styles.modalContainer}}>
                    <div style={{...styles.modalHeader}}>
                        <ThemedText.H3>{title}</ThemedText.H3>
                    </div>
                    <div style={{...styles.modalBody}}>
                        <Row withPadding>
                            <ThemedText.P>{details}</ThemedText.P>
                        </Row>
                    </div>
                    <div style={{...styles.modalButtons}}>
                        {buttonsRender}
                    </div>
                </div>
                </div>
            </FullScreen>
        );
    }
}


const themedStyles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: theme.get(Theme.Colors.bkgShade0).substr(0, 7) + 'CC',
    },
    modalContainer: {
        margin: theme.get(Theme.Spaces.line) * 2,
        backgroundColor: theme.get(Theme.Colors.bkgShade1),
        borderColor: theme.get(Theme.Colors.bkgShade3),
        borderStyle: 'solid',
        borderRadius: theme.get(Theme.Spaces.line) * 2,
    },
    modalHeader: {
        padding: theme.get(Theme.Spaces.line),
        borderBottomColor: theme.get(Theme.Colors.bkgShade3),
        borderBottomStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBody: {
        padding: theme.get(Theme.Spaces.line),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonWrapper: {
        padding: theme.get(Theme.Spaces.line) / 2,
        flex: 1,
    },
    textStyle: {
        fontSize: theme.get(Theme.Text.h3Size) * widthFactor(),
        color: theme.get(Theme.Input.inputTextColor),
    },
    currencyWrapperStyle: {
        width: theme.get(Theme.Spaces.line) * 6,
    }
});
