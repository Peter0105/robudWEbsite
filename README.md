# ROBUD 웹사이트 — Git 자동 배포용

기존 ROBUD_website_v2_upload.zip의 웹사이트 파일 12개를 변경 없이 public/로 옮겼습니다.
Cloudflare Workers의 기존 프로젝트에 GitHub 또는 GitLab 저장소를 연결하기 위한 구성입니다.
이 폴더를 만들었다고 자동 연결되는 것은 아닙니다. 실제 저장소 연결·배포는 아직 수행하지 않았습니다.

## 1. 한 번만 할 초기 작업

1. GitHub에 robud-website라는 저장소를 준비합니다. 새 저장소는 비공개(Private)를 권장합니다. 기존 저장소를 쓰는 경우 기존 파일을 먼저 백업하세요.
2. 이 ZIP의 압축을 풀고, 내부의 public 폴더와 wrangler.jsonc, package.json, README.md, .gitignore, .gitattributes를 저장소 최상위에 올립니다. ZIP 파일 자체를 GitHub에 올리면 안 됩니다.
3. GitHub 파일 목록에서 public/와 wrangler.jsonc가 나란히 보이는지 확인합니다.
4. Cloudflare → Workers & Pages → 기존 프로젝트 solitary-pond-e758 → Settings → Builds(또는 Build) → Connect로 이동합니다. 새 Worker를 만들 필요가 없습니다.
5. GitHub를 연결하고 해당 저장소만 접근 허용합니다. GitLab도 지원됩니다.
6. 아래 배포 설정을 저장하고, main에 작은 변경사항을 커밋·푸시하여 최초 자동 배포를 확인합니다. GitHub 웹 편집기를 이용한다면 Commit changes로 저장할 수 있습니다.
7. Cloudflare의 배포 기록에서 성공을 확인하고 robud.kr의 화면을 확인합니다.

## 2. Cloudflare 설정

| 항목 | 값 |
|---|---|
| 기존 Worker | solitary-pond-e758 |
| Git 저장소 | 사용자가 준비한 robud-website 저장소 |
| 공개용 브랜치 | main |
| Root directory | 저장소 최상위(빈칸 또는 화면의 기본 /) |
| Build command | 비워 둠: 현재 사이트는 별도 변환이 필요 없는 HTML/CSS/JS |
| Deploy command | npx wrangler deploy |
| 비공개 작업 브랜치 빌드 | 처음에는 꺼 두어도 됨. 검토 흐름이 필요하면 나중에 활성화 |

**중요: wrangler.jsonc의 name은 기존 Worker 이름과 반드시 같아야 합니다.**
현재 이름은 사용자가 제공한 관리 화면의 solitary-pond-e758을 사용했습니다.
Cloudflare에서 이름을 변경했다면 wrangler.jsonc의 name을 실제 이름에 맞추세요.
GitHub 저장소 이름은 robud-website여도 괜찮습니다. Worker 이름과 같을 필요가 없습니다.

assets.directory의 ./public은 실제 웹에 공개할 파일 경로입니다. 저장소 전체를 공개 대상으로 지정하지 마세요.
도메인은 기존 Worker의 Domains에서 관리합니다. 이 파일에는 route/routes를 정의하지 않았습니다.
빈 routes 배열을 추가하거나 기존 도메인·메일 DNS 레코드를 삭제하지 마세요.
첫 Git 배포 후에도 Domains에서 robud.kr 연결 상태를 확인하세요.

## 3. 파일 구성

```text
robud-website/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── config.js
│   ├── assets/
│   ├── _headers
│   ├── robots.txt
│   └── sitemap.xml
├── wrangler.jsonc
├── package.json
├── .gitignore
├── .gitattributes
└── README.md
```

## 4. 앞으로 수정할 때

화면 구조는 public/index.html, 색상·간격은 public/styles.css,
언어별 문구와 동작은 public/app.js, 공식 이메일·제품 이미지 경로 등은 public/config.js에서 수정합니다.
문구에는 한국어·영어 전환이 적용되므로 index.html뿐 아니라 app.js의 번역 문구도 함께 확인하세요.
이미지는 public/assets/ 안에 보관합니다.

로컬 파일을 저장하는 것만으로는 사이트가 업데이트되지 않습니다.
변경사항을 Git 저장소의 main 브랜치에 커밋·푸시하고 Cloudflare 배포가 성공해야 반영됩니다.

이미 로컬 Git 저장소가 연결되어 있는 경우의 예시:

```sh
git add public/
git commit -m "로버드 홈페이지 문구 수정"
git push origin main
```

작업 브랜치에서 검토 후 main에 병합하는 방식을 권장합니다.
미리보기 빌드는 Cloudflare의 비공개 브랜치 빌드 옵션을 켜서 설정합니다.
여기서 '비공개 브랜치'는 운영용이 아닌 브랜치를 뜻하며, 미리보기 URL의 접근 권한이 비공개라는 뜻은 아닙니다.
미리보기에는 운영 배포 명령인 wrangler deploy를 넣지 말고 대시보드의 미리보기 기본 명령을 사용하세요.

## 5. 로컬 확인(선택)

Node.js와 npm을 설치한 개발 환경에서 다음을 실행할 수 있습니다.
Wrangler가 지원하는 Node.js 버전은 공식 문서를 확인하세요.

```sh
npm install
npm run check
npm run dev
```

npm install 후 생성되는 package-lock.json은 함께 커밋하면 의존성 버전 재현에 도움이 됩니다.
이번 전달본에는 설치를 완료한 의존성이나 잠금파일을 포함하지 않았습니다.
Cloudflare의 Git 빌드 환경에서 의존성을 설치합니다.

## 6. 공개 범위·안전 사항

- 기존 디자인·콘텐츠·로고·문의 방식은 바꾸지 않았습니다.
- 문의는 기존과 같이 방문자의 메일 앱에서 초안을 여는 방식이며, 서버 이메일 접수 기능이 추가된 것은 아닙니다.
- 비밀번호, API 토큰, Google 메일 인증정보를 public/이나 Git 저장소에 넣지 마세요.
- Git 자동 배포를 사용하기 위해 GitHub Actions를 별도로 구성할 필요는 없습니다.
- 제공했던 시안의 검색 차단 설정은 그대로입니다. public/config.js의 preview:true, index.html의 robots noindex, _headers의 X-Robots-Tag, robots.txt의 Disallow:/가 남아 있습니다. 검색 노출을 승인할 때 이 네 곳을 일관되게 검토·수정하세요.
- 실패한 작업을 되돌릴 때에는 Git에서 잘못된 커밋을 되돌린 새 커밋을 main에 올리는 방식으로 배포본과 원본을 일치시키세요.

## 7. 이번에 확인한 범위

웹사이트 12개 파일이 기존 업로드용 ZIP과 바이트 단위로 일치하는지,
HTML의 로컬 파일 참조 경로, JSON 구문, app.js/config.js의 JavaScript 구문을 확인했습니다.
실제 Cloudflare 계정 접근, Git 저장소 연결, 인증된 배포 및 외부 서비스에서의 통합 테스트는 하지 않았습니다.

## 공식 안내

- 기존 Worker에 Git 연결: https://developers.cloudflare.com/workers/ci-cd/builds/
- 빌드 및 배포 설정: https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
- 공개 브랜치와 미리보기: https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/
- 정적 파일 경로: https://developers.cloudflare.com/workers/static-assets/binding/
- GitHub 연결 및 접근 범위: https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/
