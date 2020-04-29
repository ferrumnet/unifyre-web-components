# unifyre-web-components
Web components for Unifyre wallet

# To build the project to the dist folder
yarn build

# Ways to test
1. Install from git repo
    `yarn add git+repoURL`

2. Copy & Paste
    After `yarn build`, copy the `dist` folder, the `package.json`, and the `README.md` and paste
    Create a folder named `unifyre-web-components` in a sample react app's `node_modules` folder.
    Paste what you copied in that folder, and then in the terminal, find the directory of the `unifyre-web-component`, which would be `node_modules/unifyre-web-components` and run `yarn install`.
    After that you can use the library in `App.js`.

    import {ThemedButton} from `unifyre-web-components`
    
