(function () {
  const projects = [
    {
      title: '大學專題 - 太陽能源監控系統',
      image: './img/projects/solar.png',
      imageAlt: 'Solar system',
      description: '專題開始前受指導教授邀約至泰國皇家清邁大學-亞洲社會經濟技術發展學院-工程院，進行太陽能相關的研究學習，那邊有一大塊土地，上面架設著數量非常可觀的太陽能板，但沒有監控平台可以協助監控太陽能發電的狀況，而我們的任務就是收集太陽能板產生的資料，並建立一個監控系統，將收集到的資料呈現於前端給使用者瀏覽，但人員不可能每分每秒的盯在螢幕檢視數據是否有異常，所以我們利用Line Notify API，在數據通過監控系統API時，會檢查資料的狀態，當系統一發現數據出現問題，並會透過Line聯絡管理人員。回到台灣之後教授建議將這個專案繼續，讓專案更加完整，然後作為畢業專題的題目',
      badgeCaption: 'Solar system',
      links: {
        github: 'https://github.com/leo851001/server_side'
      },
      accomplishments: [
        'HTML、JavaScript',
        'Bootstrap',
        'Laravel',
        'Line API'
      ]
    },
    {
      title: '英文學習應用 - 題庫管理後台',
      image: './img/projects/kinect.png',
      imageAlt: 'Backend for english study app',
      description: '主要是使用Laravel + Firebase開發的，原本那個英文學習程式的題庫新增刪除修改都要直接到firebase操作，管理起來實在不方便，所以搭配Firebase的api做了一個後台來管理題庫，讓管理者在管理題庫的時候更有效率',
      badgeCaption: 'Laravel & Firebase',
      links: {
        github: 'https://github.com/leo851001/learning-firebase'
      },
      accomplishments: [
        'HTML、JavaScript',
        'Bootstrap',
        'Laravel',
        'Firebase'
      ]
    },
    {
      title: '欠錢寶 - 前端Vue的LineBot',
      image: './img/projects/money.png',
      imageAlt: 'money-bot',
      description: '因為當時以聊天機器人為底開發的相關應用程式剛開始熱門起來，所以就跟一個同學突發奇想的想說也來做一個，名字是欠錢寶（靈感是對岸的行動電源：充電寶ＸＤ），原因是我們學生間常常有小額借款像是：欸欸幫我買飲料錢下次給你，通常這種事情都會被遺忘，就默默損失10元、20元了ＱＱ，所以我們就結合學生最常使用的line做了欠錢寶，只需要幾個步驟就能記下這些原本可能會消失的零錢，我主要是用vue負責前端的部分，同學負責後端並開api讓我串接',
      badgeCaption: 'Vue & Line',
      links: {
        github: 'https://github.com/leo851001/moneybot_frontend'
      },
      accomplishments: [
        'Vue',
        'Line API',
        'Line LIFF'
      ]
    },
    {
      title: '手機狂響 x 專注森林',
      image: './img/projects/kill.png',
      imageAlt: 'kill-mobile',
      description: '因緣際會下跟同學一起接了一個時刻科技的case，是對岸一部電影“手機狂響”的宣傳小遊戲，用意跟Forest一樣是希望可以讓使用者放下手機，主要是使用vue開發前端的部分，後端是時刻科技的工程師開api給我們串接',
      badgeCaption: 'Vue & RESTful API',
      links: {
        github: 'https://github.com/leo851001/kill_mobile'
      },
      accomplishments: [
        'Vue',
        'Vuex',
        'RESTful API'
      ]
    }
  ]

  const blogPosts = [
    {
      name: '我的GitHub',
      link: 'https://github.com/leo851001',
      image: './img/about-me/about-me-1.jpg'
    },
    {
      name: '我的FaceBook',
      link: 'https://www.facebook.com/leo.huang.391/',
      image:'./img/about-me/about-me-2.jpg'
    },
    {
      name: '我的Instagram',
      link: 'https://www.instagram.com/leohuang1996/',
      image: './img/about-me/about-me-3.jpg'
    },
    {
      name: '我的E-Mail',
      link: 'mailto:leo851001@gmail.com',
      image: './img/about-me/about-me-4.jpg'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" target="_blank">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()