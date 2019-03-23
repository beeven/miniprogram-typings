git clone https://github.com/MS-DG/DefinitelyTyped.git
cp -rf test DefinitelyTyped/types/miniprogram/
cp -rf types/wx DefinitelyTyped/types/miniprogram/
npx tslint --fix DefinitelyTyped/types/miniprogram/**/*.ts -p DefinitelyTyped/types/miniprogram/tsconfig.json
