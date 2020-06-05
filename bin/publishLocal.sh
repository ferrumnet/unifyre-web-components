#!/bin/bash
## declare an array variable

declare -a arr=(
  "../unifyre-extension-examples/examples/react-wyre/node_modules/unifyre-web-components/"
  "../unifyre-app-wyre/frontend/node_modules/unifyre-web-components/"
)

## now loop through the above array
for path in "${arr[@]}"
do
  echo "copy to $path"
  cp -rf './src' $path
done

