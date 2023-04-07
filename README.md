# 🧳 다울

![logo](./wiki/img/logo.png)

## == Contents ==

1. [개요](#개요)
2. [프로젝트 소개](#프로젝트-소개)
3. [주요기능](#주요-기능)
4. [프로젝트 실행방법](#프로젝트-실행-방법)
5. [기술스택](#🔧-기술-스택)
    1. [Front-End](#front-end)
    2. [Back-End](#back-end)
6. [프로젝트 구조도](#프로젝트-구조도)
7. [Design](#design)
8. [TEAM](#team)

<br><br>

## 개요
> 개발 기간: 2023.03.20 ~ 2023.04.07

## 프로젝트 소개
![intro page](./wiki/gif/intro_page.gif)

무장애 여행지 추천 서비스
(설명 더 쓰면 좋을듯..)



## 주요 기능

### 1. 무장애 필터링
![filtering](./wiki/gif/filtering.gif)

- 지체장애, 시각장애, 청각장애, 노인, 영유아로 필터링하여 사용자 맞춤형 여행지 확인 가능

<br>

### 2. STT / TTS
![STT](./wiki/gif/STT.gif)

- 검색창 뿐만 아니라 음성으로도 검색이 가능
- 상세 페이지에서 TTS 기능을 통해 여행지의 상세 정보를 음성으로 들을 수 있음

<br>

### 3. 여행지 추천
![recommend](./wiki/gif/recommend.gif)

- 취향 설문과 최근 본 여행지를 기반으로 사용자 맞춤형 여행지를 추천
- 취향 설문은 5개의 질문으로 구성되어 있음

<br><br>

## 프로젝트 실행 방법


<br><br>

## 🔧 기술 스택

### Front-End

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black">
<img src="https://img.shields.io/badge/KAKAO-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black">

### Back-End

#### API 서버

<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white">
<img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=SpringSecurity&logoColor=white">
<img src="https://img.shields.io/badge/KAKAO-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black">

#### 추천 시스템 서버

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white">
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white">
<img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=Pandas&logoColor=white">
<img src="https://img.shields.io/badge/Selenium-F7931E?style=for-the-badge&logo=Selenium&logoColor=white">

#### DB

<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

### Deployment

<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white">
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=black">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=Gitlab&logoColor=white">
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=JiraSoftware&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">


## 프로젝트 구조도

```
└─📂backend
    └─📁 api-server
    └─📁 django
└─📂frontend
```

### Front-End

```
┗📦src
  ┣ 📂assets
  ┃ ┣ 📂icon
  ┃ ┣ 📂images
  ┃ ┗ 📂lottie
  ┣ 📂components
  ┃ ┣ 📂auth
  ┃ ┣ 📂bookmark
  ┃ ┃ ┣ 📂bookmarkItem
  ┃ ┣ 📂common
  ┃ ┃ ┣ 📂Button
  ┃ ┃ ┣ 📂DetailBtn
  ┃ ┃ ┣ 📂Dropdown
  ┃ ┃ ┣ 📂Footer
  ┃ ┃ ┣ 📂Header
  ┃ ┃ ┣ 📂Loading
  ┃ ┃ ┣ 📂Mic
  ┃ ┃ ┣ 📂Modal
  ┃ ┃ ┗ 📂RadioButton
  ┃ ┣ 📂course
  ┃ ┃ ┣ 📂map
  ┃ ┃ ┣ 📂sideBar
  ┃ ┃ ┃ ┣ 📂folderList
  ┃ ┃ ┃ ┃ ┣ 📂openFolder
  ┃ ┣ 📂Detail
  ┃ ┣ 📂Intro
  ┃ ┃ ┣ 📂main
  ┃ ┃ ┣ 📂main2
  ┃ ┃ ┣ 📂main3
  ┃ ┃ ┣ 📂main4
  ┃ ┃ ┣ 📂main5
  ┃ ┣ 📂personal
  ┃ ┣ 📂search
  ┃ ┣ 📂survey
  ┃ ┃ ┣ 📂Accordion
  ┃ ┃ ┃ ┣ 📂question1
  ┃ ┃ ┃ ┃ ┣ 📂Button
  ┃ ┃ ┃ ┣ 📂question2
  ┃ ┃ ┃ ┃ ┣ 📂dropdown
  ┃ ┃ ┃ ┣ 📂question3
  ┃ ┃ ┃ ┣ 📂question4
  ┃ ┃ ┃ ┣ 📂question5
  ┃ ┃ ┃ ┃ ┣ 📂OptionCards
  ┃ ┃ ┣ 📂SaveBtn
  ┃ ┃ ┗ 📂SurveyTitle
  ┃ ┣ 📂trip
  ┃ ┃ ┣ 📂tripList
  ┃ ┃ ┃ ┣ 📂tripCardItem
  ┃ ┃ ┗ 📂tripRec
  ┃ ┃ ┃ ┣ 📂tripRecCardItem
  ┃ ┗ 📂utils
  ┣ 📂fonts
  ┣ 📂pages
  ┃ ┣ 📂BookmarkPage
  ┃ ┣ 📂DetailPage
  ┃ ┣ 📂ListPage
  ┃ ┣ 📂LoginPage
  ┃ ┣ 📂SearchPage
  ┣ 📂recoil
  ┣ 📂styles
  ┣ 📂types
  ┣ 📜App.tsx
  ┣ 📜index.css
  ┣ 📜index.tsx
```

### Back-End

```
└─📂 src
    ├─📂 main
    │  ├─📂 java
    │  │  └─📂 com
    │  │      └─📂 dawool
    │  │          └─📂 api
    │  │              ├─📁 code
    │  │              ├─📁 config
    │  │              ├─📁 controller
    │  │              ├─📂 dto
    │  │              │  ├─📁 detailInfo
    │  │              │  └─📁 user
    │  │              ├─📁 entity
    │  │              ├─📁 error
    │  │              ├─📁 jwt
    │  │              ├─📁 repository
    │  │              └─📁 service
    │  └─📂 resources
    │      ├─📁 static
    │      └─📁 templates
└─🐘 build.gradle
└─🐘 settings.gradle
```

<br><br>

## Design
### 시스템 구조도
![Architecture](./wiki/img/architecture.png)

<br>

### API 설계
![API 명세서](./wiki/gif/API_document.gif)

<br><br>

## TEAM
### Front-end
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">팀원</th>
    <th class="tg-0pky">최예린</th>
    <th class="tg-0pky">이해솜</th>
    <th class="tg-0pky">이지예</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">GitHub</td>
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
  </tr>
  <tr>
    <td class="tg-0pky">역할 및 담당 기능</td>
    <td class="tg-0pky">
    - 팀장<br>
    - 디자인<br>
    - 취향설문<br>
    - 추천 및 여행지 목록</td>
    <td class="tg-0pky">
    - FE 팀장<br>
    - 컴포넌트 구조 설계<br>
    - 검색<br>
    - 필터링</td>
    <td class="tg-0pky">
    - 회원관리<br>
    - 장소관리<br>
    - API</td>
  </tr>
</tbody>
</table>

<br>

### Back-end

<table>
<thead>
  <tr>
    <th class="tg-0pky">팀원</th>
    <th class="tg-0pky">김정은</th>
    <th class="tg-0pky">박희주</th>
    <th class="tg-0pky">이 준</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">GitHub</td>
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
  </tr>
  <tr>
    <td class="tg-0pky">역할 및 담당 기능</td>
    <td class="tg-0pky">
    - BE 팀장<br>
    - CI/CD<br>
    - 장소관리</td>
    <td class="tg-0pky">
    - 추천 알고리즘<br>
    - API</td>
    <td class="tg-0pky">
    - 회원관리<br>
    - 검색</td>
  </tr>
</tbody>
</table>

<br><br>

## 📒 License

<p>
This software is licensed under the MIT <a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp" _blank="new">©SSAFY</a>.
</p>