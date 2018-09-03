# webpack-start-sample

建立 webpack 初始專案

### [ 開發工具 ]

- [Visual Studio Code](https://code.visualstudio.com) (請安裝或更新至最新版)
  - Webpack 擴充套件包
    - 安裝 [Webpack 4 Snippets](https://marketplace.visualstudio.com/items?itemName=fwgood.webpack-4-snippets) 擴充套件
    - 安裝 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充套件

### [ 安裝 Node.js 工具 ]

- 建議安裝 [Node.js](https://nodejs.org/) **v8.9** 以上版本
  - 如果是 Mac 用戶，若使用 Brew 的話，可以用 `brew install node` 指令安裝
- 驗證安裝結果的指令
  - `node -v`
    - 確認為 `v8.9.0` 以上版本
  - `npm -v`
    - 確認為 `v5.5.1` 以上版本
- 離線安裝注意事項
  - [前端工程研究：如何在企業內部使用「完全離線」的方式安裝 npm 套件](https://blog.miniasp.com/post/2018/06/16/Offline-installation-of-npm-packages-for-Enterprise.aspx)

### [ 安裝 [Webpack](https://webpack.js.org) ]

- 開啟「命令提示字元」視窗 (Windows) 或 Terminal 應用程式 (Mac OS X)，並執行以下指令安裝 npm 套件 (這個動作會執行 5 ~ 10 分鐘)：

  ```bash
  npm install -g webpack webpack-cli webpack-command lite-server typescript
  ```

- 驗證安裝結果的指令

  - `webpack-cli -v`
    - 確認 `3.1.0` 以上版本

### [ 本地開發環境 ]

- 建立一個新的資料夾 (專案名稱):

  ```bash
    mkdir webpack-start-sample
    cd webpack-start-sample
  ```

- 加入一個空白的 package.json (懶人專用):

  ```bash
    npm init -y
  ```

- 加入 TypeScript 的設定檔案 tsconfig.json:

  ```bash
    tsc --init
  ```

- 安装 TypeScript 編譯器 (compiler) 和 loader:

  ```bash
    npm i typescript ts-loader rxjs
  ```

- 建立專案結構所需資料夾:

  ```bash
    mkdir src
    mkdir dist
  ```

- 後續補充請看[錄影檔](https://www.youtube.com/watch?v=yaJKXFi6-OU&feature=youtu.be)

- Run

  ```bash
    wp -w
  ```
