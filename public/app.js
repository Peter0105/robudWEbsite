(() => {
  'use strict';
  const config = window.ROBUD_CONFIG || {};
  let language = 'ko';
  let activeTech = 'wear';
  const strings = {
    ko: {
      skip: '본문으로 건너뛰기', mainNav: '주 메뉴', navAbout: '로버드', navTech: '기술', navApps: '활용 분야', navContact: '협력 문의', menuOpen: '메뉴 열기', menuClose: '메뉴 닫기',
      heroSub: '움직임을 이해하고,<br>가능성을 넓힙니다.', heroBody: '사람의 움직임을 읽는 착용형 로봇 기술.<br>로버드는 사람 곁에서, 더 나은 움직임의 가능성을 만듭니다.', heroProduct: 'Movel 살펴보기', heroTech: '우리의 기술', heroArtNote: '움직임의 연결을 표현한 그래픽 · 제품 외형 아님', scrollAbout: '로버드 소개로 이동', fieldControls: '그래픽 표현 방식', modeMotion: '움직임', modeSense: '센싱', modeConnect: '연결', pauseMotion: '애니메이션 일시정지', resumeMotion: '애니메이션 재생',
      principle1: '사람 곁에서 출발', principle2: '데이터로 연결', principle3: '로봇으로 확장', aboutSide: '기술의 중심에는, 언제나 사람.', aboutTitle: '로봇의 정밀함에,<br>동료의 이해를 더하다.', aboutBody1: '로버드의 이름은 Robot과 Buddy에서 시작합니다. 사람의 움직임을 이해하고, 곁에서 함께하는 로봇 파트너를 만들겠다는 뜻입니다.', aboutBody2: '우리는 착용 구조, 구동·센싱, 데이터 해석을 연결합니다. 첫 제품 Movel을 통해 운동하는 순간을 이해하고, 사람과 로봇이 더 자연스럽게 상호작용하는 미래를 준비합니다.', robotDesc: '움직임을 다루는 기술', buddyDesc: '사람을 이해하는 동료',
      techSide: '착용에서 데이터까지, 하나의 연결.', techTitle: '사람과 로봇을 잇는<br>세 가지 연결.', techIntro: '좋은 기술은 몸 가까이에서 시작합니다.<br>착용하고, 감지하고, 이해하는 기술을 하나의 시스템으로 설계합니다.', diagramNote: '설명용 개념도 · 실제 제품 외형 아님', techTabLabel: '기술 영역', techWear: '착용 구조', techSense: '구동·센싱', techConnect: '데이터 해석', techDevNote: '로버드가 지향하는 기술 개발 방향입니다.',
      inDevelopment: '개발 중', movelTitle: '운동하는 순간을,<br>이해하는 순간으로.', movelBody: '착용형 장치와 데이터 분석을 연결하는 로버드의 첫 제품. 운동 중 장치 토크와 관절 움직임을 기록하고, 운동을 더 구체적으로 이해하도록 돕는 시스템을 개발합니다.', movelInquiry: '제품·실증 협의하기', movelHardware: '착용형 장치', movelSoftware: '분석 소프트웨어', exampleUI: '화면 구성 예시', sessionTitle: '움직임의 한 순간', angleLabel: '관절각도 · 예시', torqueLabel: '장치 토크 · 예시', virtualData: '가상 데이터', chartAria: '설명용 가상 운동 데이터 곡선', rangeLabel: '움직임을 탐색해 보세요', demoDisclaimer: '가상 데이터로 만든 설명용 화면입니다. 실제 측정값·제품 성능·출시 소프트웨어 화면이 아닙니다.', movelFootnote: '제품 사양과 제공 기능, 실증 및 공급 일정은 개발·검증 과정에 따라 확정됩니다.',
      appsSide: '기술이 필요한 현장에서, 함께.', appsTitle: '각자의 현장에서,<br>더 나은 움직임을.', appsIntro: '정밀한 움직임 데이터가 필요한 곳.<br>로버드와 함께 활용 가능성을 검토할 협력 분야입니다.', app1Title: '전문 스포츠', app1Body: '선수의 오늘을 더 구체적으로 이해하기 위해. 반복 측정과 세션 비교를 통해 훈련 현장의 판단을 지원하는 방법을 함께 찾습니다.', app1Tag1: '선수 훈련', app1Tag2: '움직임 비교', app1Tag3: '현장 실증', app2Title: '트레이닝센터', app2Body: '경험에 데이터라는 언어를 더합니다. 회원의 운동 과정을 기록하고 변화를 함께 살펴보는 상담·코칭 경험을 만들어갑니다.', app2Tag1: '개인별 운동 기록', app2Tag2: '세션 비교', app2Tag3: '코칭 지원', app3Title: '연구·공공 체육', app3Body: '다양한 움직임을 탐구하는 연구와 현장 프로그램. 착용형 측정, 데이터 수집, 사용자 경험을 함께 검토할 연구·실증 파트너를 찾습니다.', app3Tag1: '공동연구', app3Tag2: '측정 방법 검토', app3Tag3: '사용자 경험', appAsk: '활용 가능성 논의하기', appNote: '위 분야는 협력 제안 대상이며, 도입 실적이나 검증된 효능을 의미하지 않습니다.',
      visionBody: '사람 곁에서 쌓은 기술을,<br>로봇과 함께하는 미래로.', visionDetail: '착용형 기술에서 시작해 인간–로봇 상호작용으로.<br>로버드가 바라보는 장기적인 연구·개발 방향입니다.', contactTitle: '다음 움직임을,<br>함께 만듭니다.', contactBody: '제품 도입 검토부터 실증, 공동연구, 사업 협력까지.<br>어떤 현장의 움직임을 함께 이해해 볼까요?', contactButton: '협력 문의', contactEmailLabel: '공식 문의 이메일', contactEmailHint: '이메일로 직접 연락하거나, 문의 초안을 작성해 주세요.', recipientLabel: '받는 곳', backTop: '맨 위로', privacyButton: '개인정보 안내', previewLabel: '도메인 연결 전 시안', close: '닫기',
      inquiryTitle: '어떤 움직임을<br>함께 만들까요?', formTopic: '문의 분야', topicPartnership: '사업 협력', topicMovel: 'Movel 제품·실증', topicSports: '스포츠 분야 활용', topicTraining: '트레이닝센터 활용', topicResearch: '공동연구', topicOther: '기타', formOrg: '회사·기관명 (선택)', formName: '이름 (선택)', formEmail: '회신 이메일 (선택)', formMessage: '문의 내용', messagePlaceholder: '함께 검토하고 싶은 현장이나 활용 목적을 알려주세요.', formNotice: '이 사이트에서 자동 발송하지 않습니다. 메일 앱에서 초안을 확인한 뒤 직접 발송해 주세요. 메일 앱을 사용하지 않는 경우 초안을 복사해 평소 사용하는 메일에 붙여넣을 수 있습니다.', copyInquiry: '초안 복사', saveInquiry: '초안 저장', emailInquiry: '이메일 초안 열기', privacyTitle: '개인정보 안내',
      privacyText: '<p>이 시안에는 서버 전송형 문의 폼, 방문 분석 도구, 광고 추적기, 쿠키가 설치되어 있지 않습니다. 입력 내용은 현재 브라우저 화면에서만 처리하며 페이지를 새로고침하거나 닫으면 사라집니다. 사용자가 복사·저장한 초안은 해당 기기에서 직접 관리합니다.</p><p>언어 선택도 현재 페이지에서만 유지합니다. 공개용 이메일이 연결된 경우에도 문의를 자동 발송하지 않고, 사용자의 메일 앱에 초안을 엽니다.</p><p>정식 사이트 공개 전 호스팅 접속 기록, 운영 주체, 수집 항목, 처리 목적·기간, 문의 채널 등을 실제 운영 방식에 맞게 검토하고 개인정보처리방침을 확정해야 합니다. 이 안내는 정식 개인정보처리방침이 아닙니다.</p>',
      draftStatus: '공개용 문의 이메일 연결 전 시안입니다. 문의 초안 작성·복사·저장만 가능하며, 로버드에 접수되지는 않습니다.', emailStatus: '메일 앱에서 초안을 여는 방식입니다. 최종 발송은 사용자가 메일 앱에서 직접 해야 합니다.', copied: '문의 초안을 복사했습니다. 아직 로버드에 전송되거나 접수된 것은 아닙니다.', saved: '문의 초안을 파일로 저장했습니다. 아직 로버드에 전송되거나 접수된 것은 아닙니다.', copyFallback: '브라우저가 복사를 허용하지 않아 초안 파일로 저장했습니다. 문의가 접수된 것은 아닙니다.', emailOpened: '메일 앱 열기를 요청했습니다. 앱에서 내용을 확인한 뒤 직접 발송하세요. 사이트는 발송 여부를 확인하지 않습니다.', emailTooLong: '메일 앱 주소 길이 제한을 피하기 위해 초안을 파일로 저장했습니다. 내용을 이메일에 붙여넣어 발송해 주세요.',
      description: '로버드 — 사람의 움직임을 이해하는 착용형 로봇 기술. Movel을 시작으로 사람과 로봇의 새로운 연결을 만듭니다.', jointTitle: '착용형 로봇의 움직임과 센싱 연결 개념도', jointDesc: '두 링크와 관절을 연결한 설명용 도형입니다. 실제 Movel 제품 외형을 나타내지 않습니다.'
    },
    en: {
      skip: 'Skip to content', mainNav: 'Main navigation', navAbout: 'About', navTech: 'Technology', navApps: 'Applications', navContact: 'Get in touch', menuOpen: 'Open menu', menuClose: 'Close menu',
      heroSub: 'Understand movement.<br>Expand possibility.', heroBody: 'Wearable robotics, built around human movement.<br>We bring people and technology closer, one movement at a time.', heroProduct: 'Discover Movel', heroTech: 'Our technology', heroArtNote: 'An abstract connection study, not a product rendering', scrollAbout: 'Explore ROBUD', fieldControls: 'Visual modes', modeMotion: 'Motion', modeSense: 'Sensing', modeConnect: 'Connection', pauseMotion: 'Pause animation', resumeMotion: 'Play animation',
      principle1: 'Start with people', principle2: 'Connect with data', principle3: 'Extend to robotics', aboutSide: 'People at the center of technology.', aboutTitle: 'Robotic precision.<br>A human connection.', aboutBody1: 'ROBUD brings Robot and Buddy together. Our name reflects our ambition: a robotic partner that understands human movement and works alongside people.', aboutBody2: 'We connect wearable structures, actuation, sensing and data interpretation. Beginning with Movel, we are working toward a more natural relationship between people and robots.', robotDesc: 'Technology that moves', buddyDesc: 'A partner that understands',
      techSide: 'From wearables to data. One connected system.', techTitle: 'Three connections.<br>One human-centered system.', techIntro: 'Meaningful technology starts close to the body.<br>We design wearing, sensing and understanding as one connected system.', diagramNote: 'Illustrative concept, not the actual product design', techTabLabel: 'Technology areas', techWear: 'Wearables', techSense: 'Actuation', techConnect: 'Data', techDevNote: 'These are ROBUD’s technology development directions.',
      inDevelopment: 'In development', movelTitle: 'Turn movement<br>into understanding.', movelBody: 'Our first product brings a wearable device and data analysis together. We are developing a system to record device torque and joint movement during exercise, helping people understand how they move.', movelInquiry: 'Discuss a product or pilot', movelHardware: 'Wearable device', movelSoftware: 'Analysis software', exampleUI: 'Interface concept', sessionTitle: 'A moment in motion', angleLabel: 'Joint angle · illustrative', torqueLabel: 'Device torque · illustrative', virtualData: 'Synthetic data', chartAria: 'An illustrative synthetic movement data curve', rangeLabel: 'Explore a movement', demoDisclaimer: 'Illustrative interface using synthetic data. Not actual measurements, verified specifications or a released software interface.', movelFootnote: 'Specifications, available features, pilot programs and supply schedules are subject to development and validation.',
      appsSide: 'Built in conversation with the field.', appsTitle: 'Different settings.<br>A shared pursuit of movement.', appsIntro: 'For settings where movement data matters.<br>Potential collaboration areas to explore together.', app1Title: 'Professional sports', app1Body: 'Understand more about an athlete’s movement today. Together, we can explore how repeated measurements and session comparisons might support training decisions.', app1Tag1: 'Athlete training', app1Tag2: 'Movement comparison', app1Tag3: 'Field pilots', app2Title: 'Training centers', app2Body: 'Give experience a new language: data. Explore how exercise records and changes over time can support conversations between trainers and their clients.', app2Tag1: 'Individual records', app2Tag2: 'Session comparison', app2Tag3: 'Coaching support', app3Title: 'Research & community', app3Body: 'For researchers and community programs exploring movement. We seek partners to investigate wearable measurement, data collection and the user experience.', app3Tag1: 'Joint research', app3Tag2: 'Measurement methods', app3Tag3: 'User experience', appAsk: 'Explore a collaboration', appNote: 'These are proposed collaboration areas, not customer deployments or claims of validated efficacy.',
      visionBody: 'From technology alongside people<br>to a future shared with robots.', visionDetail: 'From wearables to human–robot interaction.<br>This is our long-term research and development direction.', contactTitle: 'Let’s make<br>the next move.', contactBody: 'Product exploration, field pilots, joint research and partnerships.<br>What movement should we understand together?', contactButton: 'Get in touch', contactEmailLabel: 'CONTACT EMAIL', contactEmailHint: 'Email us directly, or prepare an inquiry draft.', recipientLabel: 'To', backTop: 'Back to top', privacyButton: 'Privacy information', previewLabel: 'Preview · domain not connected', close: 'Close',
      inquiryTitle: 'What should<br>we explore together?', formTopic: 'Topic', topicPartnership: 'Business partnership', topicMovel: 'Movel product or pilot', topicSports: 'Sports application', topicTraining: 'Training center application', topicResearch: 'Joint research', topicOther: 'Other', formOrg: 'Organization (optional)', formName: 'Name (optional)', formEmail: 'Reply email (optional)', formMessage: 'Message', messagePlaceholder: 'Tell us about your setting and what you would like to explore.', formNotice: 'This site does not send your inquiry automatically. Review and send the draft in your mail application. Without a mail application, copy the draft and paste it into your usual email service.', copyInquiry: 'Copy inquiry draft', saveInquiry: 'Save draft', emailInquiry: 'Open email draft', privacyTitle: 'Privacy information',
      privacyText: '<p>This preview does not include a server-submitted contact form, analytics, advertising trackers or cookies. Form entries are processed only in the current browser page and disappear when the page is refreshed or closed. Copies and downloaded drafts remain under your control on your device.</p><p>Your language selection is kept only for the current page. When an approved contact email is configured, this site can open a draft in your email application; it does not send the email automatically.</p><p>Before public launch, the operator must review hosting access logs, operator identity, collection purposes, retention periods and contact details, and prepare a privacy policy appropriate to the actual service. This preview notice is not a finalized privacy policy.</p>',
      draftStatus: 'Preview: a public contact email has not been connected. You can prepare, copy or save a draft, but it will not be received by ROBUD.', emailStatus: 'This opens a draft in your email application. You must review and send the email yourself.', copied: 'Draft copied. It has not been sent to or received by ROBUD.', saved: 'Draft saved as a text file. It has not been sent to or received by ROBUD.', copyFallback: 'Your browser did not allow copying, so the draft was saved as a text file. It has not been submitted.', emailOpened: 'Requested your mail application to open. Review and send the draft there. This website cannot confirm delivery.', emailTooLong: 'The draft is too long for a reliable mail-app link, so it was saved as a text file. Paste it into your email application.',
      description: 'ROBUD — wearable robotics built around human movement. Starting with Movel, we connect people, data and robotics.', jointTitle: 'Illustrative wearable robotics connection diagram', jointDesc: 'Two links connected at a joint illustrate movement and sensing. This is not the actual Movel product design.'
    }
  };
  const techContent = {
    ko: {
      wear: {label:'01 / WEAR',tag:'WEAR / HUMAN FIRST',title:'몸에 가까울수록,<br>더 자연스러워야 합니다.',text:'사용자의 움직임을 고려한 착용 구조와 모듈형 연결을 연구합니다. 몸과 기기가 만나는 지점에서 착용감과 움직임의 자유를 함께 고민합니다.',tags:['착용 구조','모듈형 연결','사용자 중심 설계']},
      sense: {label:'02 / SENSE',tag:'SENSE / MOVEMENT TO SIGNAL',title:'움직임을 만들고,<br>그 순간을 읽습니다.',text:'구동 장치를 통한 저항 제어와 토크·각도 센싱을 연결합니다. 운동 과정의 변화를 기록하기 위한 측정·동기화 구조를 개발합니다. 장치 토크를 관절 내부의 부하와 동일시하지 않습니다.',tags:['저항 제어','토크·각도 측정','데이터 동기화']},
      connect: {label:'03 / CONNECT',tag:'CONNECT / SIGNAL TO UNDERSTANDING',title:'흩어진 신호를,<br>이해할 수 있는 기록으로.',text:'측정 데이터와 세션 기록을 연결해 움직임의 변화와 차이를 살펴보는 분석 구조를 개발합니다. 충분한 검증과 데이터 축적을 바탕으로 개인별 운동 지원으로 확장하는 것이 목표입니다.',tags:['세션 기록','움직임 비교','분석·해석 구조']}
    },
    en: {
      wear: {label:'01 / WEAR',tag:'WEAR / HUMAN FIRST',title:'Closer to the body.<br>More natural by design.',text:'We research wearable structures and modular connections around human movement. Comfort and freedom of motion guide how we approach the interface between body and device.',tags:['Wearable structures','Modular connections','Human-centered design']},
      sense: {label:'02 / SENSE',tag:'SENSE / MOVEMENT TO SIGNAL',title:'Shape movement.<br>Read the moment.',text:'We connect controlled resistance with torque and angle sensing, developing measurement and synchronization structures to record movement. Device torque is not treated as a direct measurement of internal joint loading.',tags:['Resistance control','Torque & angle','Data synchronization']},
      connect: {label:'03 / CONNECT',tag:'CONNECT / SIGNAL TO UNDERSTANDING',title:'From separate signals<br>to meaningful records.',text:'We are developing analysis structures to connect measurements and session records. With appropriate validation and sufficient data, our goal is to expand toward individualized exercise support.',tags:['Session records','Movement comparison','Data interpretation']}
    }
  };
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
  const t = key => strings[language][key] || key;
  const menuButton = $('.menu-toggle');
  const mobileNav = $('#mobileNav');
  const emailReady = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail || '');
  let lastDialogTrigger = null;

  function updateTech(key=activeTech) {
    activeTech = key;
    const c = techContent[language][key];
    $$('.tech-tabs [role=tab]').forEach(button => {
      const selected = button.dataset.tech === key;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    $('#techVisual').dataset.active = key;
    $('#techVisualLabel').textContent = c.label;
    $('.tech-panel-tag').textContent = c.tag;
    $('#techPanel').setAttribute('aria-labelledby', `tab-${key}`);
    $('#techPanelTitle').innerHTML = c.title;
    $('#techPanelText').textContent = c.text;
    $('#techPanelTags').replaceChildren(...c.tags.map(label => {
      const tag = document.createElement('span'); tag.textContent = label; return tag;
    }));
  }
  function setMenu(open) {
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'ko';
    document.documentElement.lang = language;
    document.body.classList.toggle('en', language === 'en');
    $$('[data-i18n]').forEach(element => { element.innerHTML = t(element.dataset.i18n); });
    $$('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
    $$('[data-i18n-placeholder]').forEach(element => { element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder)); });
    $$('.lang').forEach(button => { const active = button.dataset.lang === language; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
    $('meta[name=description]').content = t('description');
    $('meta[property="og:description"]').content = t('description');
    $('meta[property="og:locale"]').content = language === 'ko' ? 'ko_KR' : 'en_US';
    $('#jointTitle').textContent = t('jointTitle');
    $('#jointDesc').textContent = t('jointDesc');
    $('#companyLabel').textContent = language === 'ko' ? (config.companyName || '로버드') : (config.companyNameEn || 'ROBUD');
    $('#footerAddress').textContent = language === 'ko' ? (config.address || '') : (config.addressEn || config.address || '');
    $('#inquiryStatus').textContent = t(emailReady ? 'emailStatus' : 'draftStatus');
    $('#formResult').textContent = '';
    menuButton.setAttribute('aria-label', t(mobileNav.hidden ? 'menuOpen' : 'menuClose'));
    updateTech();
    updatePauseButton();
    updateRange();
  }
  $$('.lang').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
  $$('#mobileNav a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) setMenu(false); }, {passive:true});
  $$('.tech-tabs [role=tab]').forEach(button => {
    button.addEventListener('click', () => updateTech(button.dataset.tech));
    button.addEventListener('keydown', event => {
      const tabs = $$('.tech-tabs [role=tab]');
      let index = tabs.indexOf(button);
      if (event.key === 'ArrowRight') index = (index+1)%tabs.length;
      else if (event.key === 'ArrowLeft') index = (index-1+tabs.length)%tabs.length;
      else if (event.key === 'Home') index = 0;
      else if (event.key === 'End') index = tabs.length-1;
      else return;
      event.preventDefault(); updateTech(tabs[index].dataset.tech); tabs[index].focus();
    });
  });
  $$('.application').forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) $$('.application').forEach(other => { if (other !== detail) other.open = false; });
  }));

  /* A deliberately synthetic trace. It is not a product specification. */
  function sampleMotion(position) {
    const x = position / 100;
    return {angle:Math.round(32+88*Math.sin(Math.PI*x)), torque:3.6+7.2*Math.pow(Math.sin(Math.PI*x),2)+1.4*Math.sin(x*Math.PI*6)};
  }
  function chartY(torque) { return 158 - torque*10.3; }
  function updateRange() {
    const position = Number($('#movementRange').value);
    const {angle,torque} = sampleMotion(position);
    $('#angleValue').textContent = String(angle);
    $('#torqueValue').textContent = torque.toFixed(1);
    $('#rangeOutput').textContent = `${position}%`;
    $('#movementRange').setAttribute('aria-valuetext', language === 'ko' ? `움직임 ${position}%, 예시 각도 ${angle}도, 예시 토크 ${torque.toFixed(1)}뉴턴미터` : `Movement ${position}%, illustrative angle ${angle} degrees, illustrative torque ${torque.toFixed(1)} newton meters`);
    $('#chartCursor').setAttribute('x1', String(position*6)); $('#chartCursor').setAttribute('x2', String(position*6));
    $('#chartPoint').setAttribute('cx', String(position*6)); $('#chartPoint').setAttribute('cy', String(chartY(torque)));
  }
  let curve = '';
  for (let i=0;i<=100;i++) curve += `${i===0?'M':'L'}${i*6},${chartY(sampleMotion(i).torque).toFixed(2)} `;
  $('#chartPath').setAttribute('d', curve);
  $('#chartArea').setAttribute('d', curve+'L600,180L0,180Z');
  $('#movementRange').addEventListener('input', updateRange);

  function openDialog(dialog, trigger) {
    lastDialogTrigger = trigger || document.activeElement;
    setMenu(false);
    if (typeof dialog.showModal === 'function') { dialog.showModal(); document.body.classList.add('modal-open'); }
    else { window.alert(language === 'ko' ? '최신 브라우저에서 문의 기능을 이용해주세요.' : 'Please use a modern browser for this feature.'); }
  }
  $$('[data-inquiry]').forEach(button => button.addEventListener('click', () => {
    $('#inquiryTopic').value = button.dataset.inquiry;
    $('#formResult').textContent = '';
    openDialog($('#inquiryDialog'), button);
  }));
  $('#privacyButton').addEventListener('click', event => openDialog($('#privacyDialog'), event.currentTarget));
  $$('dialog').forEach(dialog => {
    $('[data-close-dialog]',dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (lastDialogTrigger && document.contains(lastDialogTrigger)) lastDialogTrigger.focus(); });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });
  function inquiryDraft() {
    const field = id => $(id).value.trim();
    const topic = $('#inquiryTopic').selectedOptions[0].textContent;
    const labels = language === 'ko' ? ['문의 분야','회사·기관','이름','회신 이메일','문의 내용'] : ['Topic','Organization','Name','Reply email','Message'];
    return `ROBUD — ${language==='ko'?'문의 초안':'Inquiry draft'}\n\n${labels[0]}: ${topic}\n${labels[1]}: ${field('#inquiryOrganization') || '—'}\n${labels[2]}: ${field('#inquiryName') || '—'}\n${labels[3]}: ${field('#inquiryEmail') || '—'}\n\n${labels[4]}\n${field('#inquiryMessage')}`;
  }
  function validInquiry() {
    const message = $('#inquiryMessage');
    message.setCustomValidity(message.value.trim() ? '' : (language === 'ko' ? '문의 내용을 입력해 주세요.' : 'Please enter your message.'));
    return $('#inquiryForm').reportValidity();
  }
  $('#inquiryMessage').addEventListener('input', () => $('#inquiryMessage').setCustomValidity(''));
  function saveDraft(text) {
    const blob = new Blob(['\ufeff',text],{type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = 'ROBUD-inquiry-draft.txt'; document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); return true; } catch (_) { /* Try the local fallback below. */ }
    }
    const input = document.createElement('textarea'); input.value = text;
    input.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
    $('#inquiryDialog').append(input); input.select();
    let copied = false; try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
    input.remove(); $('#copyInquiry').focus(); return copied;
  }
  $('#inquiryForm').addEventListener('submit', async event => {
    event.preventDefault(); if (!validInquiry()) return;
    const draft = inquiryDraft();
    if (await copyText(draft)) $('#formResult').textContent = t('copied');
    else { saveDraft(draft); $('#formResult').textContent = t('copyFallback'); }
  });
  $('#saveInquiry').addEventListener('click', () => { if (!validInquiry()) return; saveDraft(inquiryDraft()); $('#formResult').textContent = t('saved'); });
  $('#emailInquiry').hidden = !emailReady;
  $('#emailInquiry').addEventListener('click', () => {
    if (!emailReady || !validInquiry()) return;
    const subject = `[ROBUD] ${$('#inquiryTopic').selectedOptions[0].textContent}`;
    const url = `mailto:${config.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(inquiryDraft())}`;
    if (url.length > 1800) { saveDraft(inquiryDraft()); $('#formResult').textContent = t('emailTooLong'); return; }
    window.location.href = url;
    $('#formResult').textContent = t('emailOpened');
  });
  $('#previewLabel').hidden = config.preview === false;
  $('#footerAddress').hidden = !config.address;
  $('#copyrightYear').textContent = String(new Date().getFullYear());
  $$('[data-contact-address]').forEach(node => { node.textContent = config.contactEmail || ''; });
  $$('[data-contact-email]').forEach(link => {
    link.hidden = !emailReady;
    if (emailReady) link.href = `mailto:${config.contactEmail}`;
  });
  if (config.logoUrl) {
    $$('[data-robud-logo]').forEach(logo => {
      const fallback = logo.parentElement.querySelector('.wordmark-text');
      const showLogo = () => { logo.hidden = false; if (fallback) fallback.hidden = true; };
      const showFallback = () => { logo.hidden = true; if (fallback) fallback.hidden = false; };
      logo.addEventListener('load', showLogo);
      logo.addEventListener('error', showFallback);
      logo.src = config.logoUrl;
      if (logo.complete) logo.naturalWidth ? showLogo() : showFallback();
    });
  }
  if (config.productImageUrl) {
    const image = $('#productImage');
    image.alt = config.productImageAlt || 'Movel';
    image.addEventListener('load', () => { image.hidden=false; $('#productConcept').hidden=true; });
    image.addEventListener('error', () => { image.hidden=true; $('#productConcept').hidden=false; });
    image.src = config.productImageUrl;
  }
  let scrollPending = false;
  function updateScroll() {
    scrollPending=false;
    $('#siteHeader').classList.toggle('scrolled', window.scrollY > 20);
    let current='';
    ['about','technology','movel','applications'].forEach(id => { if (document.getElementById(id).getBoundingClientRect().top <= 180) current=id; });
    $$('.desktop-nav a').forEach(link => { if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current'); });
  }
  window.addEventListener('scroll', () => { if (!scrollPending) { scrollPending=true; requestAnimationFrame(updateScroll); } }, {passive:true});

  /* Original procedural sculpture: two interwoven movement paths, not hardware. */
  const canvas = $('#motionCanvas');
  const context = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduceMotion.matches;
  let mode = 0, phase = 0, width=1, height=1, frame=0, lastTime=0, visible=true;
  const pointer = {x:0,y:0};
  const ringCount=196, strandCount=19;
  const vertices=[];
  function center(t) { const r=1.8+.59*Math.cos(3*t); return [r*Math.cos(2*t),r*Math.sin(2*t),.95*Math.sin(3*t)]; }
  function norm(v) { const len=Math.hypot(...v)||1; return v.map(x=>x/len); }
  function cross(a,b) { return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]; }
  for (let i=0;i<ringCount;i++) {
    const theta=i/ringCount*Math.PI*2, c=center(theta), next=center(theta+.001);
    const tangent=norm(next.map((value,k)=>value-c[k]));
    const normal=norm(cross(tangent,[0,0,1])), binormal=norm(cross(tangent,normal));
    const row=[];
    for (let j=0;j<strandCount;j++) {
      const angle=j/strandCount*Math.PI*2+theta*.5;
      const radius=.38*(1+.10*Math.cos(theta*3));
      row.push(c.map((value,k)=>value+radius*(normal[k]*Math.cos(angle)+binormal[k]*Math.sin(angle))));
    }
    vertices.push(row);
  }
  function updatePauseButton() {
    const button=$('#pauseMotion');
    button.textContent=paused?'▷':'Ⅱ'; button.setAttribute('aria-label',t(paused?'resumeMotion':'pauseMotion')); button.setAttribute('aria-pressed',String(paused));
  }
  function drawScene() {
    if (!context) return;
    const dpr=Math.min(window.devicePixelRatio||1,1.6);
    context.setTransform(dpr,0,0,dpr,0,0); context.clearRect(0,0,width,height);
    const cx=width*.54, cy=height*.50, size=Math.min(width*.123,height*.177);
    const ax=.72+pointer.y*.15, ay=-.26+Math.sin(phase*.4)*.15+pointer.x*.22, az=-.57+phase*.10;
    const cosX=Math.cos(ax),sinX=Math.sin(ax),cosY=Math.cos(ay),sinY=Math.sin(ay),cosZ=Math.cos(az),sinZ=Math.sin(az);
    const points=vertices.map(row=>row.map(p=>{
      let x=p[0],y=p[1]*cosX-p[2]*sinX,z=p[1]*sinX+p[2]*cosX;
      const rx=x*cosY+z*sinY; z=-x*sinY+z*cosY; x=rx;
      const fx=x*cosZ-y*sinZ,fy=x*sinZ+y*cosZ;
      const perspective=7.9/(7.9-z);
      return {x:cx+fx*size*perspective,y:cy+fy*size*perspective,z};
    }));
    // An understated coordinate field anchors the sculpture.
    context.strokeStyle='rgba(134,163,137,.08)'; context.lineWidth=.65;
    context.beginPath();context.ellipse(cx,cy+size*.7,size*2.25,size*.48,-.15,0,Math.PI*2);context.stroke();
    const sorted=Array.from({length:ringCount},(_,i)=>i).sort((a,b)=>points[a][0].z-points[b][0].z);
    for (const i of sorted) {
      const next=(i+1)%ringCount;
      for (let j=0;j<strandCount;j++) {
        const p=points[i][j],q=points[next][j];
        const depth=(p.z+3)/6;
        const shimmer=.80+.20*Math.sin(i*.095-phase*1.8+j*.32);
        const alpha=Math.min(.88,(.22+depth*.64)*shimmer);
        const blue = mode===1 ? (j%5<3) : mode===2 ? (i%49<20) : (j<5 || (i>92&&i<129));
        const color=blue ? `rgba(135,139,255,${alpha})` : `rgba(213,198,255,${alpha})`;
        context.strokeStyle=color;context.lineWidth=blue?1.05:.85;
        context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke();
        if (i%7===0) {
          const n=points[i][(j+1)%strandCount];context.strokeStyle=blue?`rgba(128,115,248,${alpha*.60})`:`rgba(200,179,248,${alpha*.44})`;
          context.lineWidth=.5;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(n.x,n.y);context.stroke();
        }
        if ((i+j*4)%43===0 && p.z>-.3) {
          context.fillStyle=blue?`rgba(190,181,255,${alpha})`:`rgba(226,211,255,${alpha})`;
          context.beginPath();context.arc(p.x,p.y,mode===1?1.8:1.1,0,Math.PI*2);context.fill();
        }
      }
    }
    if (mode===2) {
      context.lineWidth=.65;context.setLineDash([3,7]);
      for (let i=0;i<ringCount;i+=28) { const p=points[i][3],q=points[(i+68)%ringCount][10];context.strokeStyle='rgba(178,157,255,.30)';context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke(); }
      context.setLineDash([]);
    }
  }
  function loop(time) {
    frame=0;
    if (paused || !visible || document.hidden) return;
    if (time-lastTime>33) { phase+=.010;drawScene();lastTime=time; }
    frame=requestAnimationFrame(loop);
  }
  function startAnimation() { if (!frame && !paused && visible && !document.hidden && context) frame=requestAnimationFrame(loop); }
  function stopAnimation() { if (frame) cancelAnimationFrame(frame); frame=0; }
  function resizeCanvas() {
    const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;
    const dpr=Math.min(window.devicePixelRatio||1,1.6);
    canvas.width=Math.max(1,Math.round(width*dpr));canvas.height=Math.max(1,Math.round(height*dpr));drawScene();
  }
  $('#pauseMotion').addEventListener('click',()=>{paused=!paused;updatePauseButton();paused?stopAnimation():startAnimation();drawScene();});
  $$('.field-mode').forEach(button=>button.addEventListener('click',()=>{mode=Number(button.dataset.mode);$$('.field-mode').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});drawScene();}));
  canvas.addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;const rect=canvas.getBoundingClientRect();pointer.x=(event.clientX-rect.left)/width-.5;pointer.y=(event.clientY-rect.top)/height-.5;if(paused)drawScene();},{passive:true});
  canvas.addEventListener('pointerleave',()=>{pointer.x=0;pointer.y=0;if(paused)drawScene();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAnimation();else startAnimation();});
  reduceMotion.addEventListener('change',event=>{paused=event.matches;updatePauseButton();paused?stopAnimation():startAnimation();drawScene();});
  if ('ResizeObserver' in window) new ResizeObserver(resizeCanvas).observe(canvas.parentElement); else window.addEventListener('resize',resizeCanvas,{passive:true});
  if ('IntersectionObserver' in window) new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)startAnimation();else stopAnimation();},{threshold:0}).observe($('#home'));
  setLanguage('ko');updateScroll();resizeCanvas();startAnimation();
})();
