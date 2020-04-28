export class ThemedStyle {
    themeName = '';
    styles = {};
    styleFactoty;
    static create(styleFactory) {
        const rv = new ThemedStyle();
        rv.styleFactory = styleFactory;
        return (theme) => rv.get(theme);
    }

    get(theme) {
        if (!this.styles || theme.name !== this.themeName) {
            this.themeName = theme.name;
            this.styles = this.styleFactory(theme);
        }

        return this.styles;
    }
}
