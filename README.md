# 🧳 다울

<img src="./wiki/img/logo.png" height="15%" width="15%" />

## == Contents ==

1. [개요](#1-개요)
2. [프로젝트 소개](#2-프로젝트-소개)
3. [주요기능](#3-주요-기능)
4. [프로젝트 실행방법](#4-프로젝트-실행-방법)
5. [기술스택](#5-기술-스택)
   1. [Front-End](#51-front-end)
   2. [Back-End](#52-back-end)
6. [프로젝트 구조도](#6-프로젝트-구조도)
7. [Design](#7-design)
8. [TEAM](#8-team)

<br><br>

## 1. 개요

- 개발 기간: 2023.02.20 ~ 2023.04.07
- 삼성 청년 소프트웨어 아카데미(SSAFY) 빅데이터 추천 프로젝트

  `#🏆프로젝트우수상` `#1등` `#빅데이터` `#무장애여행지추천`

<br><br>

## 2. 프로젝트 소개

![intro page](./wiki/gif/intro_page.gif)

- 6가지 여행지(관광지, 문화시설, 레포츠, 쇼핑, 식당, 숙박)의 편의 시설의 정보를 무장애 태그(지체, 시각, 청각 장애인, 노인, 영유아)로 나누어 여행지를 추천해주는 빅데이터 기반 추천 프로젝트

<br>

> 무장애란?

- 장애인, 노인, 유모차 동반 가족 등 이동과 시설이용 및 정보접근 등의 제약으로 관광, 활동이 어려운 이동(관광) 약자가 안전하고 편리하게 이동할 수 있는 환경

<br><br>

## 3. 주요 기능

### 3.1. 여행지 목록

![filtering](./wiki/gif/filtering.gif)

- 이동, 관광 약자를 위한 시설이 있는 여행지를 
  지체장애, 시각장애, 청각장애, 노인, 영유아로 필터링하여 확인 가능
- 어떤 시설을 제공하는지 상세하게 확인 가능함

<br>

### 3.2. 여행지 검색

![STT](./wiki/gif/STT.gif)

- 검색창 뿐만 아니라 음성으로도 검색이 가능
- 검색 결과도 여행지 목록과 마찬가지로 무장애 필터링을 할 수 있음

<br>

### 3.3. 여행지 추천

![recommend](./wiki/gif/recommend.gif)

- 취향 설문을 기반해 즐길거리(관광지,레포츠,문화시설, 쇼핑)를 추천
- 최근 본 즐길거리를 기반으로 취향설문을 결합해 근처 식당&숙박 추천
- 로그인을 하지 않았다면 콘텐츠 기반(인기순/최근 본 관광지 기반) 추천
- 로그인을 했다면 (콘텐츠 기반 + 사용자 기반) 하이브리드 추천
- 빅데이터 활용

  - 공공데이터

    - 한국 무장애 관광 데이터 5만건
    - 한국 국문 관광 데이터 25만건

  - 별도 수집 데이터(한국데이터랩/크롤링)

    - 네이게이션 검색 건수 데이터 21만건
    - 네이버 후기 데이터 13만건

<br>

### 3.4 여행지 상세 조회

![detail](/wiki/gif/detail.gif)

- 무장애 정보를 포함한 여행지의 상세 정보를 확인할 수 있음
- TTS 기능을 사용하여 시각장애인들의 사이트 편리성을 높임
- 지도로 여행지의 위치를 조회할 수 있음

<br><br>

## 4. 프로젝트 실행 방법

### 4.1. client 실행

1. **원격 저장소 복제**

```bash
$ git clone https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22D105.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd frontend
```

3. **필요한 node_modules 설치**

```bash
$ npm install
```

4. **개발 서버 실행**

```bash
$ npm start
```

<br />

### 4.2. server 실행

1. **원격 저장소 복제**

```bash
$ git clone https://lab.ssafy.com/s08-bigdata-recom-sub2/S08P22D105.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd backend
```

3. **main 메서드 실행하기**

<br><br>

## 5. 기술 스택

### 5.1. Front-End

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=black"><img src="https://img.shields.io/badge/KAKAO-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black">

<br/>

### 5.2. Back-End

#### API 서버

<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=white"><img src="https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-badge&logo=SpringSecurity&logoColor=white"><img src="https://img.shields.io/badge/KAKAO-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black">

#### 추천 시스템 서버

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"><img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=Pandas&logoColor=white"><img src="https://img.shields.io/badge/Selenium-F7931E?style=for-the-badge&logo=Selenium&logoColor=white">

#### DB

<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

### Deployment

<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white"><img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=black"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"><img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"><img src="https://img.shields.io/badge/Gitlab-FC6D26?style=for-the-badge&logo=Gitlab&logoColor=white"><img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=JiraSoftware&logoColor=white"><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"><img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

<br/><br/>

## 6. 프로젝트 구조도

```
└─📂backend
    └─📁 api-server
    └─📁 django
└─📂frontend
```

<details>
<summary>Front-End</summary>
<div markdown="1">

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

</div>
</details>

<details>
<summary>Back-End</summary>
<div markdown="1">

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

</div>
</details>

<br><br>

## 7. Design

### 7.1. 시스템 구조도

![Architecture](./wiki/img/architecture.png)

<br>

### 7.2. API 설계

![API 명세서](./wiki/gif/API_document.gif)

[API 명세서](https://dodo-elice.notion.site/API-6e8c079e046941eaa35c514dc2f22692)

<br><br>

## 8. TEAM

### 8.1. Front-end

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

### 8.2. Back-end

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
