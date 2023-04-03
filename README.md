# 다울

![logo](./wiki/img/logo.png)

## == Contents ==
1. [개요](#개요)
2. [프로젝트 소개](#프로젝트-소개)
3. [주요 기능](#주요-기능)
4. [프로젝트 실행방법](#프로젝트-실행-방법)
5. [기술스택](#기술-스택)
    1. [Front-End](#front-end)
    2. [Back-End](#back-end)
6. [프로젝트 구조도](#프로젝트-구조도)

## 개요
> 개발 기간: 2023.03 ~ 2023.04

## 프로젝트 소개
무장애인들을 위한 여행지 추천 사이트

- 무장애 종류
1. 지체장애인
2. 시각장애인
3. 청각장애인
4. 노인
5. 영유아

## 주요 기능
1. 사용자 맞춤 여행지 추천
2. 무장애 필터링

## 프로젝트 실행 방법

## 기술 스택

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

## TEAM
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">팀원</th>
    <th class="tg-0pky">최예린</th>
    <th class="tg-0pky">이해솜</th>
    <th class="tg-0pky">이지예</th>
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
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
    <td class="tg-0pky">-</td>
  </tr>
  <tr>
    <td class="tg-0pky">담당 기능</td>
    <td class="tg-0pky">팀장<br>
    - 여행지 목록 페이지<br>
    - 취향설문 페이지</td>
    <td class="tg-0pky">프론트 팀장</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky">백엔드 팀장</td>
    <td class="tg-0pky"></td>
    <td class="tg-0pky"></td>
  </tr>
</tbody>
</table>