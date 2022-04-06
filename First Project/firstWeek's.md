# First Project 1주차 회고

---

지난 몇 개월간 공부하였던 모든 내용을 최종적으로 쏟아붓는 될 것이다.

매번 혼자서 코드를 짜거나 시간 관리를 하다 Project부터 팀원들과 시간 조율에 맞추다 보니 적응이 힘들었다.

무엇보다 가장 어려운 점은 Project 계획 단계 아이디어 및 project에 부여할 기능을 넣고 서로 소통하는 것인데, 팀장의 역할이
클 것 같다고 생각했다.

다른 팀원에 비해 우리는 3명으로 이루어져 있어서 상대적으로 인력이 부족하다 자체적으로 판단하여 이번 프로젝트에서는
지난 Sprint에서 다뤘던 내용을 중점으로 복습하는 것에 의미를 두고 SR을 진행하였다.

### 여기서 SR이란?

SR(Software Requirement)는 시스템이 목표 달성을 위해 갖춰야하는 기능, 또 그러한 기능을 정리한 문서를 뜻한다.

## 1. 프로젝트 선정

코드스테이츠를 시작하고부터 나는 어떤 웹페이지를 구현하고, 서비스하고 싶을까라는 것으로 종종 고민해왔다.
이제 그 고민이 현실이 되는 시점이 되었는데, 일단 우선적으로 위에서 말했다싶히 팀원들과 상의 끝에 우리가 Sprint에서 다뤘던
블로그 형태등 기본적인 CRUD에 초점을 맞춘 영화 평론 사이트(펑점, 영화 후기)등을 담아 다른 사용자로 하여금
그 영화에 대한 여러 사람들의 후기 및 평점을 볼 수 있는 사이트를 구현하기로 하였다.

## 2. 팀장, 팀명 정하기

팀장은 풀스택 개발자가 되기를 희망하시는 분께서 맡게 되었다. 여러모로 같이 페어프로그래밍을 진행하면서 도움을 많이 받았던 분이고
리더십 또한 좋으신분이라 다른 의견 없이 금방 팀장을 정할 수 있게 되었고 팀명은 우리 팀의 스프릿을 기반으로해서
내가 생각해뒀던 'SAS(Slow and Steady)'로 정하게 되었다.

## 3. 팀원 역할 설정 (FrontEnd, BackEnd, FullStack)

나는 AI, 머신러닝등 백엔드에 관련되어 있는 분야에 관심이 많은 편이라 수료후 BackEnd로 취업하고 싶다는 생각을 하고 있다.
그래서 오히려 이번 프로젝트에는 현재 웹디자이너로써 근무하고 있는 장점을 살려 FrontEnd로 프로젝트에 참여하고 싶었는데
다행히도 별 무리 없이 역할 설정을 완료하였다.

## 4. 프로젝트 기획 및 범위 설정

영화 평론 사이트 (평점, 영화 후기)

각 단계별로 기능 구현 bare minimum->advanced->nightmare로 나눴다.

## 5. 시스템 아키텍쳐 설계

와이어 프레임 툴중 하나인, 'Miro'를 사용하여 워크플로우 및 페이지를 와이어 프레임으로 표현하였다.
위에 와이어 프레임을 만들면서 UI/UX적 측면으로 많은 생각을 하게 되었다. 나는 최소한의 뎁스로 어떤 프로그램, 기능을 실행하는 것이
가장 좋다고 생각하여 페이지가 중복 되는 것 줄이려고 생각하였고 해당 버튼을 눌렀을 때 어떤 페이지로 가야하는지
빨간색 화살표로 구분을 하여, 다른 팀원들이 보기 쉽게 표현을 하고나니 SR스몰톡때 코더분께서 좋은 방향이라고 말씀을 해주셨다.

영화 정보 API의 경우 Naver Movie API에서 가져올 생각이며, 스키마 또한 1차 정리가 완료되어
내일 최종적으로 API 문서 작성시 필요한 내용에 대해서 한 번 더 회의를 하기로 하였다.

### 내일은 아래와 같은 내용을 회의하고 빠르면 다음주부터 코드 작성을 진행할 것 같다.

- 스키마 작성(미흡)
- API 문서 작성(예정)
- 프로젝트 태스크 카드 작성(예정)
- 마일스톤 작성(예정)
- 팀 규칙(완료)