
import {Theme} from 'unifyre-react-helper';

export const containerStyles = function(theme){
    return {
        usefulScreenView: {
            position: 'absolute',
            // top: Constants.statusBarHeight,
            bottom: 0,
            left: 0,
            right: 0,
        },
        scrollViewPage: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: theme.get(Theme.Colors.bkgShade0),
            flexGrow: 1,
            overflow: 'scroll',
            width: '100%',
        },
        pageContent: {
            paddingTop: theme.get(Theme.Spaces.line) * 2,
            paddingHorizontal: theme.get(Theme.Spaces.screenMarginHorizontal),
        },
    }
};


export const staticContainerStyles = function(theme){
    return {
        fullRowAnimatableWrapper: {
            position: 'absolute',
            left: 0,
            right: 0,
        },
        centeredContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
};
