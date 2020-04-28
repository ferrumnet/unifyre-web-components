import React, {useContext} from 'react';
import {ThemeContext, Theme} from "unifyre-react-helper";
import {containerStyles} from "../../styles/ContainerStyles";

export function HalfTopBackground({style}) {
    const theme = useContext(ThemeContext);
    const containerStyle = containerStyles(theme);
    return (
        <div style={{...styles.halfPage, ...style}}>
        </div>
    );
}

export function FullScreenView({pointerEvents, children, halfPageStyle}) {
    const theme = useContext(ThemeContext)
    const containerStyle = containerStyles(theme);
    const topPart = halfPageStyle && (
        <HalfTopBackground style={halfPageStyle} />
    );

    return (
        <React.Fragment>
            {topPart}
            <div style={containerStyle.usefulScreenView} pointerEvents={pointerEvents || 'auto'}>
                {children}
            </div>
        </React.Fragment>
    );
}

export function FullScreenPage({children, page, isReverseNavigation}) {
    const theme = useContext(ThemeContext);
    const containerStyle = containerStyles(theme);
    return (
        <FullScreenView halfPageStyle={{backgroundColor: theme.get(Theme.Colors.bkgShade1)}}>
            <InAndOutAnimationContainer reverse={isReverseNavigation}
                animationKey={page}
                itemStyle={styles.fullView}>
                <div style={containerStyle.scrollViewPage}>
                    {children}
                </div>
            </InAndOutAnimationContainer>
        </FullScreenView>
    )
}

const styles =  function(){
    return {
        fullView: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
         halfPage: {
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             height: window.innerHeight/ 2,
         },
    }
};
