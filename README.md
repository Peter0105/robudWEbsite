# ROBUD Website — MOVEL Investor Edition

현재 운영 중인 `robud.kr` 홈페이지를 기반으로 MOVEL 제품·기술·소프트웨어·개발 현황을 소개하는 정적 웹사이트입니다.

## 주요 구성
- Home: 실제 MOVEL 개발 시제품 사진과 제품 핵심 메시지
- Technology: 센싱·실시간 제어·안전·통신·응용/분석·비즈니스 플랫폼의 6계층 구조
- MOVEL: 제품 소개 및 시뮬레이션 UI 예시
- Software: WID Studio 데모 안내 및 실행 링크
- Applications: 초기 고객인 헬스장·PT센터를 우선 소개
- Development Status: 현재 확보한 개발 기반과 다음 검증 과제 구분
- Korean / English language toggle

## 개발 상태 표기 원칙
- 하드웨어 시제품 사진은 실제 제공된 개발 시제품 촬영본입니다.
- EMG 엣지 처리 구현 여부는 제공된 개발 자료의 기재를 반영했습니다.
- WID Studio는 시뮬레이션 데이터 기반 데모이며 실제 MOVEL 장치 측정값을 표시하지 않습니다.
- 실제 장치의 BLE/Wi-Fi 연결, 모터 제어, 안전 기능 및 센터용 데이터 플랫폼은 완성·검증된 기능으로 표시하지 않습니다.
- 고객 도입, 임상 효능, 인증, 정확도 또는 안전성에 관한 검증되지 않은 주장은 포함하지 않습니다.

## 폴더 구조
```text
robudWebsite/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── config.js
│   ├── assets/
│   │   ├── robud-logo.webp
│   │   ├── movel-prototype.webp
│   │   ├── favicon.png
│   │   └── social-cover.jpg
│   ├── studio/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── style.css
│   ├── _headers
│   ├── robots.txt
│   └── sitemap.xml
├── wrangler.jsonc
├── package.json
├── README.md
├── .gitignore
└── .gitattributes
```

## Cloudflare 배포
기존 Worker 이름 `solitary-pond-e758`와 `wrangler.jsonc` 설정을 유지합니다.

| 항목 | 값 |
|---|---|
| Worker | `solitary-pond-e758` |
| Root directory | 저장소 최상위 |
| Build command | 비워 둠 |
| Deploy command | `npx wrangler deploy` |
| 정적 파일 경로 | `./public` |

GitHub 저장소의 `main` 브랜치에 변경사항을 커밋·푸시하면 Cloudflare 자동 배포가 실행됩니다. ZIP 파일 자체를 저장소에 올리지 말고, 압축을 푼 뒤 폴더 안의 파일과 폴더를 저장소 최상위에 반영하세요.

## 로컬 확인
Node.js 설치 후 저장소 최상위에서 실행합니다.

```sh
npm install
npm run check
npm run dev
```

`https://robud.kr/studio/` 경로에서 WID Studio 데모를 별도로 실행할 수 있습니다.

## 검색 노출 및 SEO
- `public/index.html`: 로버드(ROBUD), 착용형 로봇, Movel 중심의 제목·설명·키워드 및 Open Graph 메타데이터 적용
- `public/robots.txt`: 전체 공개 페이지의 검색 로봇 수집 허용 및 사이트맵 경로 안내
- `public/sitemap.xml`: 대표 홈페이지 URL과 최종 수정일 등록
- `public/_headers`: 검색 색인을 차단하던 `X-Robots-Tag` 제거
- 푸터의 임시 도메인 연결 전 시안 문구 제거

배포 후 Google Search Console과 네이버 서치어드바이저에 사이트를 등록하고 `https://robud.kr/sitemap.xml`을 제출해야 검색 수집을 요청할 수 있습니다. 검색 결과 반영 및 순위는 검색 엔진의 평가·수집 시점에 따라 달라집니다.

네이버 서치어드바이저 소유권 확인용 메타 태그는 `public/index.html`의 `<head>` 안에 추가되어 있습니다. 인증 코드를 변경해야 할 때만 발급받은 값으로 교체하세요.

## 문의
`robudofficial@robud.kr`

문의 양식은 서버로 자동 전송하지 않고, 사용자의 메일 앱에서 초안을 여는 방식입니다.


## Website design direction (2026-11-18)

The homepage has been redesigned around ROBUD as the company, MOVEL as the first product, and WID Studio as the software demonstration. The design study and implementation rationale are documented in [DESIGN_RESEARCH.md](./DESIGN_RESEARCH.md). The redesign retains existing prototype and simulation disclaimers; do not replace them with unverified product claims.
