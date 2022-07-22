<div align="center">
  <h1> React Scripts Lite</h1>
  <img src="https://user-images.githubusercontent.com/93723399/180503691-9c0eadcb-3d66-4890-9948-6e62f8044b99.png" alt="logo" />
</div>

React Scripts Lite는

- `React Boilerplate`인 `Create-React-App-Lite`를 위한 모듈입니다

React Scripts Lite는 macOS를 기반으로 만들었습니다. 문제가 있다면, [Issue를 남겨주세요](https://github.com/eggfreitag/react-scripts-lite/issues/new). 궁금한점이 있다면 [GitHub Discussions](https://github.com/eggfreitag/react-scripts-lite/discussions/new)을 남겨주세요!

---


## [`To Create React App Lite`](https://github.com/eggfreitag/create-react-app-lite) 🚀

## Quick Overview

```jsx
npx create-react-app-lite <my-app>
cd my-app
npm start
```

이후 [`http://localhost:3000`](http://localhost:3000) 으로 접속해서 앱을 확인하세요

배포를 위한 준비가 끝나면 `npm run build`명령어로 번들링할 수 있습니다

## Creating an App

`npx create-react-app-lite <my-app>`커맨드를 실행한 폴더 안에 `my-app`이라는 디렉토리를 생성합니다

`my-app` 디렉토리 안에는 아래와같은 구조의 초기 프로젝트가 생성되어있습니다

```jsx
my-app
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── App.css
    │   ├── App.js
    │   ├── Count.js
    │   └── GlobalStyle.js
    ├── index.js
    └── test
        └── App.test.js
```

폴더 구조로 고민할 필요 없이 바로 사용자의 `react-app`을 만들수 있습니다

설치가 완료된다면 아래의 명령어로 프로젝트에 진입할 수 있습니다

```jsx
cd my-app
```

생성된 프로젝트 안에서, 미리 설정된 몇가지 명령어를 실행할 수 있습니다

### **`npm start`**

- 기본적으로 [`http://localhost:3000`](http://localhost:3000) 으로 연결됩니다
- 포트를 변경하고싶다면 `npm start`뒤에 `PORT=<원하는숫자>`로 지정할 수 있습니다

![start](https://user-images.githubusercontent.com/93723399/180507506-e52e8095-8423-4b40-95a9-b1d0391f6e0a.gif)

[]()

### **`npm test`**

- `Jest`를 기반으로 한 test를 실행하고 결과를 출력합니다
- `src`폴더 안의 `<component>.(spec || test).js(x)`을 찾아 테스트합니다

![test](https://user-images.githubusercontent.com/93723399/180508436-54bc87d7-c5fc-4383-81ce-c9a3078373d7.gif)

### **`npm run build`**

- `Build` 폴더내에 배포 환경에서 사용할 번들링한 결과물을 출력합니다

![build](https://user-images.githubusercontent.com/93723399/180509508-5358a42a-b609-43c5-af44-1e0f602f87bf.gif)

### **`npm run prettier & npm run lint`**

- 전체 파일에 걸친 코드 점검과 코드 정리를 실행합니다

![prettier](https://user-images.githubusercontent.com/93723399/180510299-65542372-86dc-4eb7-a068-4b3dabc5ae6c.gif)

### **`npm run eject`**

- 숨겨진 모든 설정을 확인할 수 있습니다
- `Webpack`, `Prettier`, `ESLint`, `Jest`설정을 사용자의 필요에 맞게 변경할 수 있습니다

![eject](https://user-images.githubusercontent.com/93723399/180511843-5f6dd9c3-f952-432e-b00c-907a10f4bcf6.gif)

## Tech Stacks

<div align="center">
  <img alt="html" src ="https://img.shields.io/badge/html-red.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
  <img alt="css" src ="https://img.shields.io/badge/CSS-blue.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
  <img alt="javascript" src ="https://img.shields.io/badge/Javascript-yellow.svg?&style=for-the-badge&logo=javascript&logoColor=white"/>
  <img alt="react" src ="https://img.shields.io/badge/React-black.svg?&style=for-the-badge&logo=React&logoColor=bl"/>
  <img alt="webpack" src ="https://img.shields.io/badge/Webpack-skyblue.svg?&style=for-the-badge&logo=Webpack&logoColor=white"/>
  <img alt="babel" src ="https://img.shields.io/badge/babel-yellow.svg?&style=for-the-badge&logo=Babel&logoColor=red"/>
  <img alt="jest" src ="https://img.shields.io/badge/jest-red.svg?&style=for-the-badge&logo=Jest&logoColor=black"/>
</div>

## What’s Included?

- `CSS`, `SASS`, `Styled-Components`, `CSS Module` 모두 사용할 수 있습니다
- `Jest`를 적용한 Unit test를 할 수 있습니다
- 배포를 위해 JS, CSS, 이미지들을 번들링해줍니다
- `Webpack-DevServer`를 사용하여 파일의 변화에 즉각적으로 반응합니다
- `eject`를 통하여 사용자가 원하는대로 설정을 변경할 수 있습니다
