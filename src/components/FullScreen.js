import React, {useState, useEffect, useContext} from 'react';
import '../css/main.css';

export function FullScreen({style, children}) {
    const [height, setHeight] = useState(window.innerHeight);
    const onResize = () => {
            setHeight(window.innerHeight);
    }
    useEffect(() => {
        // window.addEventListener('onresize', onResize);
        // return () => window.removeEventListener('onresize', onResize);
        onResize();
    }, []);
    return (
        <div className="full-screen" style={{...(style||{}), height}}>
            {children}
        </div>
    );
}