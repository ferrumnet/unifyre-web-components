
export class Utils {
    static getQueryparams() {
        const rv = {};
        const queryParams = (window.location.href.split('?')[1] || '').split('&').map(p => p.split('='));
        queryParams.forEach(p => rv[p[0]] = p[1]);
        return rv;
    }

    static getQueryparam(param) {
        const queryParams = (window.location.href.split('?')[1] || '').split('&').map(p => p.split('='));
        return (queryParams.find(p => p[0] === param) || [])[1];
    }

    static getRoute(subRoute) {
        let base = window.location.href.split('?')[0];
        if (!base.endsWith('/')) {
            base = base + '/';
        }
        return base + subRoute;
    }

    static platform() {
        var iOs = /Phone|iPad|iPod/i.test(navigator.userAgent);
        var android = /Android/i.test(navigator.userAgent);
        if (iOs) { return 'iOS'; };
        if (android) { return 'android'; };
        return 'desktop';
    }

    static ellipsis(s, len) {
        if (s.length <= len) { return s; }
        return `${s.substr(0, len - 3)}...`;
    }

    static shorten(s) {
        if (s.length <= 25) { return s; }
        return `${s.substr(0, 10)}...${s.substr(s.length - 10)}`;
    }

    static linkForAddress(network, addr) {
        switch (network.toLocaleLowerCase()) {
            case 'rinkeby':
                return `https://rinkeby.etherscan.io/address/${addr}`;
            case 'ethereum':
                return `https://etherscan.io/address/${addr}`;
            case 'bsc':
                return `https://bscscan.com/address/${addr}`;
            case 'bsc_testnet':
                return `https://testnet.bscscan.com/address/${addr}`;
            case 'mumbai_testnet':
                return `https://mumbai.polygonscan.com/tx/${addr}`;
            case 'polygon':
                return `https://polygonscan.com/tx/${addr}`;
        }
        return '';
    }

    static linkForTransaction(network, tid) {
        switch (network.toLocaleLowerCase()) {
            case 'rinkeby':
                return `https://rinkeby.etherscan.io/tx/${tid}`;
            case 'ethereum':
                return `https://etherscan.io/tx/${tid}`;
            case 'bsc':
                return `https://bscscan.com/tx/${tid}`;
            case 'bsc_testnet':
                return `https://testnet.bscscan.com/tx/${tid}`;
            case 'mumbai_testnet':
                return `https://mumbai.polygonscan.com/tx/${tid}`;
            case 'polygon':
                return `https://polygonscan.com/tx/${tid}`;
        }
        return '';
    }
}