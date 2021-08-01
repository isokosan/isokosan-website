export const state = () => ({
  portfolio: [
    {
      title: 'fireful',
      start: '2019-06',
      end: 'ongoing',
      avatar: 'https://panel.fireful.io/logo.png',
      href: 'https://fireful.io',
      description: "A free content manager for firebase that I'm building on the side.",
      skills: ['Firebase', 'Node.js', 'Vue.js', 'Vuetify.js']
    },
    {
      title: 'Vaccination Booking System for Solingen & Remscheid',
      viaMammut: true,
      start: '2020-10',
      end: '2021-05',
      avatar: 'https://solingen-admin.impf-termin.de/logo.png',
      description: 'Developed and successfully launched the Covid Vaccination booking system for two cities in Germany.',
      skills: ['Parse-Server', 'Node.js', 'Vue.js', 'Vuetify.js', 'Redis']
    },
    {
      title: 'COVID Test Center Booking Systems',
      viaMammut: true,
      start: '2020-10',
      end: 'ongoing',
      href: 'https://coronaschnelltestsolingen.de',
      avatar: 'https://schnelltestsolingen.de/logo.png',
      description: 'Developed and successfully launched the Covid Vaccination booking system for two cities in Germany.',
      skills: ['Parse-Server', 'Node.js', 'Vue.js', 'Vuetify.js', 'Redis']
    },
    {
      title: 'Mammut OS (not maintained)',
      viaMammut: true,
      start: '2019-08',
      end: '2020-08',
      avatar: '/mammutos.png',
      description: 'We decided to build a Digital Signage platform with Mammut Media focused on content for touch screens. The project was used by some car galleries that put interactive configurators in their showrooms, coworking spaces for event calendars and floor plans. Stopped maintaining it to focus solely on the screens of Solingen city.',
      skills: ['Firebase', 'Node.js', 'Electron.js', 'Vue.js', 'Vuetify.js']
    },
    {
      title: 'City App Backend for Solingen',
      start: '2019-08',
      end: 'Ongoing',
      avatar: '/solingen.webp',
      viaMammut: true,
      href: 'https://apps.apple.com/us/app/mensch-solingen/id1464119250',
      description: 'Building the backend of the city application for Solingen.',
      skills: ['Parse-Server', 'Node.js', 'Bull-mq', 'Scraping with Node.js']
    },
    {
      title: 'Enteria Energy',
      type: 'Freelance',
      start: '2019-05',
      end: '2020-09',
      avatar: 'https://enteria.org/favicon.ico',
      href: 'https://enteria.org',
      description: 'A multilingual company website build with nuxt.js and sanity.io.',
      skills: ['Nuxt.js', 'Vuetify.js', 'Sanity.io', 'SASS', 'ESLint', 'Husky']
    },
    {
      title: 'Neqtarin (abandoned)',
      start: '2018-02',
      end: '2019-03',
      avatar: '/neqtarin.png',
      description: 'An OkCupid like q&a based dating app built with laravel, vue.js and cordova.',
      body: 'I built this app for the main purpose of learning vue.js. I planned to launch it in the summer of 2019 to give it a try, but decided it needed way too marketing for me to take on. Designed the app with Figma instead of Photoshop and saw that it was much easier to transition later to code. Used Vue store and routing extensively. Built a custom async middleware handler inside routing to mimic the middleware system in Laravel, which is a must for any complex single page application. Learned how to use linting. Built the backend as a JSON web token API, learning authorization via bearer tokens. Wrote algorithms for matching users based on answered questions and location.',
      skills: ['Vue.js', 'Cordova', 'Stylus', 'JWT Tokens', 'Laravel', 'Redis', 'PostgreSQL', 'PostGIS', 'Microsoft Azure API', 'ESLint']
    },
    {
      title: 'Coin Deck (not maintained)',
      start: '2018-03',
      end: '2018-06',
      avatar: 'https://coin-deck.com/storage/favicon/android-chrome-192x192.png',
      href: 'https://coin-deck.com',
      description: 'A cryptocurrency filter and sort index built with laravel and jquery.',
      body: 'A mobile-friendly cryptocurrency index I built after coming up with the idea with my cousin. This project got me into using a lot of third party APIs and web-scraping. I also developed a good solution for really fast filtering and sorting of lists by different attributes by using Redis. I also used a hashing system to keep each unique filter result cached. In order to make sure the data on the site was always up to date I utilized heavy use of scheduling and queueing. For tracking errors I used Sentry as a third-party API for both the server & client side, integrating source-maps.',
      skills: ['Jquery', 'Beautifulsoup', 'Selenium', 'Laravel', 'SCSS', 'Vagrant', 'Webpack', 'Sentry', 'Stripe', 'OAuth2', 'PostgreSQL']
    },
    {
      title: 'Süslü Sözlük',
      start: '2017-02',
      end: '2017-11',
      href: 'https://suslusozluk.com',
      color: '#341e36',
      avatar: 'https://cdn.suslusozluk.com/static/logo.png',
      description: 'A cosmetics forum with 2 million monthly visitors built with laravel and jquery.',
      body: 'Completely re-made this forum style Turkish website with 2 million monthly visitors. The biggest challenge was improving response times and after researching I decided that I needed to learn and use Redis and not cache entire responses but instead specific items in customized ways. For the front-end I wanted an IOS and Android-friendly website and developed cross-compatible functionality from scratch such as infinite scrolls, history integrated modals and popups. Built a fast and robust custom search algorithm without using any third-party services. Content moderation (flags, edits, unpublishing of posts, authorizing new users to become authors) was done manually and I built a fully-automatic system whereby certain qualified users were given privileges to vote on these issues. Also built a complex backend for moderation off all the content. The final big challenge was moving thousands of posts, threads, messages, users, etc. from an old CakePHP MySQL installation to the new system.',
      skills: ['Jquery', 'Laravel', 'PostgreSQL', 'Redis', 'LESS', 'HTML5 History API', 'Socket.io', 'Gulp', 'Google Tag Manager', 'Google Doubleclick', 'AWS SES', 'AWS S3', 'New Relic']
    },
    // {
    //   title: 'Dolphin Therapy Land (Freelance)',
    //   start: '2016-11',
    //   end: '2017-02',
    //   avatar: 'https://www.dolphintherapyland.com/static/img/favicons/apple-touch-icon.png',
    //   href: 'https://www.dolphintherapyland.com',
    //   description: 'A multilingual company website with a CRM panel built with Django.',
    //   body: 'A multilingual website for Dolphin Therapy reservations I built as a freelancer. I18n was a challenge in that the site has both static and dynamic content. I used a Django library called Rosetta and combined it with a custom system for dynamic content translations. This was also the first website where I used ajax for some dynamic components.',
    //   skills: ['Jquery', 'Django', 'Ajax', 'LESS', 'Gulp', 'Memcached', 'Nginx']
    // },
    {
      title: 'Decora Lamps',
      start: '2013-10',
      end: '2016-10',
      avatar: '/decoralamps.png',
      href: 'https://www.decoralamps.com',
      description: 'An e-commerce website with a CRM and accounting backend built with Django.',
      body: 'Built a B2B & B2C combined e-commerce website for my own company with an extended admin panel for managing accounting, employees, current account balances, production and stock, imports and exports, invoicing and producing end of term accounting reports. Most products we sell were bundles of other products that we produced ourselves and bringing together raw material quantities, stock warnings and reporting the correct amounts in the front-end were some of the challenges of this project. I also connected account and company people in the CRM module with the Google Contacts API to sync client contact information directly to our employee\'s phones - so anytime a customer called the name, company and order history information showed up on the screen! Also developed spreadsheet exporting functionality into the accounting modules.',
      skills: ['Python', 'Django', 'MySQL', 'CSS', 'Cron', 'Celery', 'Google People API', 'Gmail API']
    }
  ],
  articles: [
    {
      title: 'Using Sanity.io and Nuxt.js for a complete localization solution',
      href: 'https://medium.com/@denizgentrk/nuxt-js-and-sanity-io-full-localization-solution-1239e822fd9b'
    }
  ]
})

export const getters = {
  skills: (state) => {
    let skills = {}
    for (const skill of state.portfolio.map(({ skills }) => skills || []).flat()) {
      if (!(skill in skills)) {
        skills[skill] = { name: skill, count: 0 }
      }
      skills[skill].count++
    }
    skills = Object.values(skills)
    skills.sort((a, b) => a.count > b.count ? -1 : 1)
    return skills
  }
}
