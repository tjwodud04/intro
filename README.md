### English

#### Overview

This repository contains the source code for a personal GitHub.io portfolio page.
The site introduces **Jae Young Suh (서재영)** and includes sections such as *About me*, *Experience*, *Publications*, and *Projects*.

#### Structure

```
.
├── index.html     # Main HTML file – page structure and text content
├── style.css      # Styling – layout, typography, colors, spacing
├── script.js      # Language switching, dynamic content handling, navigation highlight
├── /img           # Image folder (profile picture, logos)
└── /cv            # Resume files (resume_en.pdf, resume_ko.pdf)
```

#### Features

* Dual language support (**English / Korean**) with persistent state via URL parameter `?lang=en|ko`.
* Responsive grid layout for profile and content sections.
* Smooth scrolling and floating navigation bar for section access.
* Profile image, external icons (Google Scholar, LinkedIn, Hugging Face, GitHub, Email).
* CV buttons that switch depending on selected language.
* Publication and project sections formatted as cards with clean typography.

#### Purpose

The page is intended as a simple self-introduction hub —
a single-page resume site for linking from GitHub, CVs, or conference submissions.

---

### 한국어

#### 개요

이 저장소는 개인 포트폴리오 페이지(`github.io`)를 위한 소스 코드입니다.
**서재영(Jae Young Suh)** 의 연구·경력·프로젝트를 간결하게 소개하기 위해 제작되었습니다.

#### 파일 구조

```
.
├── index.html     # 메인 페이지 – 전체 구조와 콘텐츠
├── style.css      # 스타일 정의 – 색상, 여백, 글꼴, 배치
├── script.js      # 언어 전환, 동적 내용 처리, 네비게이션 강조
├── /img           # 이미지 폴더 (프로필, 로고 등)
└── /cv            # 이력서 PDF (resume_en.pdf, resume_ko.pdf)
```

#### 주요 기능

* **영문 / 한글 전환** 지원 (`?lang=en` 또는 `?lang=ko`로 유지)
* 반응형 그리드 레이아웃 및 부드러운 스크롤
* 오른쪽 플로팅 네비게이션 바로 각 섹션 바로가기
* Google Scholar, LinkedIn, Hugging Face, GitHub, 이메일 아이콘 링크
* 선택한 언어에 따라 다른 이력서 버튼 표시
* Publications 및 Projects는 카드형으로 정돈된 표시

#### 목적

이 페이지는 개인을 소개하기 위한 단일 웹페이지 형태의 이력서로,
GitHub 프로필, 이력서, 학회 제출용 포트폴리오 링크 등으로 활용하기 위한 목적입니다.
