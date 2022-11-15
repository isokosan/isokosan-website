export const state = () => ({
  portfolio: [
    {
      title: 'fireful',
      start: '2019-06',
      end: 'Ongoing',
      avatar: 'https://panel.fireful.io/logo.png',
      href: 'https://fireful.io',
      description: "A free content manager for firebase that I'm building on the side. I built myriad re-usable components for the fields, each with test components, form components to edit the fields themselves and field components with a lot of shared logic. Challenges were structuing the use of many firebase apps in one project, making a secure system for an editor that would also be easy to setup for the end user, and marketing still remains to be a challenge.",
      skills: ['Firebase', 'Node.js', 'Vue.js', 'Vuetify.js', 'Husky', 'Sentry', 'Hotjar', 'Docker', 'Firebase Hosting', 'Firestore']
    },
    {
      title: 'Vaccination Booking System for Solingen & Remscheid',
      viaMammut: true,
      start: '2020-10',
      end: '2021-05',
      avatar: 'https://solingen-admin.impf-termin.de/logo.png',
      description: 'Developed and successfully launched the Covid Vaccination booking system for two cities in Germany. Needed to implement a holding algorythm whereby slots that were clicked on would be held and not available for anyone else while the user completed their form. The solution had to perform well under stress when many citizens would visit the site after it was published on the newspapers. I used Redis sets to count and manage booking slots in a very efficient manner.',
      skills: ['Parse-Server', 'Node.js', 'MongoDB', 'Vue.js', 'Vuetify.js', 'Redis', 'Helm', 'Kubernetes', 'Husky', 'Sentry', 'Docker', 'Vercel', 'k6']
    },
    {
      title: 'Solingen Job Portal',
      viaMammut: true,
      start: '2020-05',
      end: '2020-12',
      avatar: '/icons/stellenportal.png',
      description: 'Redid the job portal of Solingen with a student developer and a senior designer from Mammut Media. Used nuxt middleware to manage the frontend, admin and company user-panels, tying it with the roles from Parse-Server.',
      skills: ['Parse-Server', 'Node.js', 'MongoDB', 'Vue.js', 'Vuetify.js', 'Nuxt.js', 'Helm', 'Kubernetes', 'Husky', 'Docker', 'Vercel', 'Elasticsearch']
    },
    {
      title: 'COVID Test Center Booking Systems',
      viaMammut: true,
      start: '2020-10',
      end: 'Ongoing',
      href: 'https://coronaschnelltestsolingen.de',
      avatar: 'https://schnelltestsolingen.de/logo.png',
      description: 'Developed and successfully launched COVID test center software with embeddable iframes for bookings, and admin panels for call center and lab employees to manage. Used Redis heavily for the management of booking slots and a big challenge was implementing a structure to allow for multiple locations and labs, and test types such as PCR or quick tests, free or paid tests and so on.',
      skills: ['Parse-Server', 'Node.js', 'MongoDB', 'Vue.js', 'Vuetify.js', 'Redis', 'Helm', 'Kubernetes', 'Husky', 'Sentry', 'Docker', 'Vercel', 'Elasticsearch', 'Puppeteer']
    },
    {
      title: 'Mammut OS (not maintained)',
      viaMammut: true,
      start: '2019-08',
      end: '2020-08',
      avatar: '/mammutos.png',
      description: 'We decided to build a Digital Signage platform with Mammut Media focused on content for touch screens. The project was used by some car galleries that put interactive configurators in their showrooms, coworking spaces for event calendars and floor plans. Stopped maintaining it to focus solely on the screens of Solingen city.',
      skills: ['Firebase', 'Node.js', 'Firestore', 'Electron.js', 'Vue.js', 'Vuetify.js', 'Storybook', 'Husky', 'Stripe', 'Sentry', 'Vercel']
    },
    {
      title: 'City App Backend for Solingen',
      start: '2019-08',
      end: 'Ongoing',
      avatar: '/solingen.webp',
      viaMammut: true,
      href: 'https://apps.apple.com/us/app/mensch-solingen/id1464119250',
      description: 'Building the backend of the city application for Solingen.',
      skills: ['Parse-Server', 'Node.js', 'Bull-mq', 'X-ray', 'Helm', 'Kubernetes', 'Husky', 'Sentry', 'Docker', 'Puppeteer']
    },
    {
      title: 'Enteria Energy',
      type: 'Freelance',
      start: '2019-05',
      end: '2020-09',
      avatar: 'https://enteria.org/favicon.ico',
      href: 'https://enteria.org',
      description: 'A multilingual company website build with nuxt.js and sanity.io. The biggest challenge was learning how to use nuxt in a performant way with many pages, re-generating the static site when content on the headless CMS was updated, and designing the headless CMS also as a translation message backend that worked with Nuxt i18n.',
      skills: ['Nuxt.js', 'Vuetify.js', 'Sanity.io', 'SASS', 'ESLint', 'Husky', 'Sentry', 'Vercel']
    },
    {
      title: 'Neqtarin (abandoned)',
      start: '2018-02',
      end: '2019-03',
      avatar: '/neqtarin.png',
      description: 'An OkCupid like q&a based dating app built with laravel, vue.js and cordova.',
      body: 'I built this app for the main purpose of learning vue.js. I planned to launch it in the summer of 2019 to give it a try, but decided it needed way too marketing for me to take on. Designed the app with Figma instead of Photoshop and saw that it was much easier to transition later to code. Used Vue store and routing extensively. Built a custom async middleware handler inside routing to mimic the middleware system in Laravel, which is a must for any complex single page application. Learned how to use linting. Built the backend as a JSON web token API, learning authorization via bearer tokens. Wrote algorithms for matching users based on answered questions and location.',
      skills: ['Vue.js', 'Cordova', 'Stylus', 'JWT Tokens', 'Laravel', 'PHP', 'Redis', 'PostgreSQL', 'PostGIS', 'Azure Image Recognition API', 'ESLint', 'New Relic', 'Nginx']
    },
    {
      title: 'Coin Deck (not maintained)',
      start: '2018-03',
      end: '2018-06',
      avatar: 'https://coin-deck.com/storage/favicon/android-chrome-192x192.png',
      href: 'https://coin-deck.com',
      description: 'A cryptocurrency filter and sort index built with laravel and jquery.',
      body: 'A mobile-friendly cryptocurrency index I built after coming up with the idea with my cousin. This project got me into using a lot of third party APIs and web-scraping. I also developed a good solution for really fast filtering and sorting of lists by different attributes by using Redis. I also used a hashing system to keep each unique filter result cached. In order to make sure the data on the site was always up to date I utilized heavy use of scheduling and queueing. For tracking errors I used Sentry as a third-party API for both the server & client side, integrating source-maps.',
      skills: ['Jquery', 'Beautifulsoup4', 'Selenium', 'Laravel', 'SASS', 'Vagrant', 'Webpack', 'Sentry', 'Stripe', 'OAuth2', 'PostgreSQL', 'Nginx', 'Cloudflare']
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
      skills: ['Jquery', 'Laravel', 'PHP', 'PostgreSQL', 'Redis', 'LESS', 'HTML5 History API', 'Socket.io', 'Gulp', 'Google Tag Manager', 'Google Doubleclick', 'AWS SES', 'AWS S3', 'New Relic', 'Nginx', 'Cloudflare']
    },
    {
      title: 'Dolphin Therapy Land',
      start: '2016-11',
      end: '2017-02',
      avatar: 'https://www.dolphintherapyland.com/static/img/favicons/apple-touch-icon.png',
      href: 'https://www.dolphintherapyland.com',
      description: 'A multilingual company website with a CRM panel built with Django.',
      body: 'First website I did as a freelancer. A multilingual website for Dolphin Therapy reservations. I18n was a challenge in that the site has both static and dynamic content. I used a Django library called Rosetta and combined it with a custom system for dynamic content translations. This was also the first website where I used ajax for some dynamic components.',
      skills: ['Jquery', 'Django', 'Python', 'LESS', 'Gulp', 'Webpack', 'Memcached', 'Nginx', 'Cloudflare']
    },
    {
      title: 'Decora Lamps',
      start: '2013-10',
      end: '2016-10',
      avatar: '/decoralamps.png',
      href: 'https://www.decoralamps.com',
      description: 'An e-commerce website with a CRM and accounting backend built with Django.',
      body: 'Built a B2B & B2C combined e-commerce website for my own company with an extended admin panel for managing accounting, employees, current account balances, production and stock, imports and exports, invoicing and producing end of term accounting reports. Most products we sell were bundles of other products that we produced ourselves and bringing together raw material quantities, stock warnings and reporting the correct amounts in the front-end were some of the challenges of this project. I also connected account and company people in the CRM module with the Google Contacts API to sync client contact information directly to our employee\'s phones - so anytime a customer called the name, company and order history information showed up on the screen! Also developed spreadsheet exporting functionality into the accounting modules.',
      skills: ['Python', 'Django', 'MySQL', 'CSS', 'Crontab', 'Celery', 'Google People API', 'Gmail API', 'iyzico', 'Apache']
    }
  ],
  articles: [
    {
      title: 'Using Sanity.io and Nuxt.js for a complete localization solution',
      href: 'https://medium.com/@denizgentrk/nuxt-js-and-sanity-io-full-localization-solution-1239e822fd9b',
      date: '14.10.2019'
    },
    {
      title: 'Serving a fully localized sitemap with generated routes on nuxt.js',
      href: 'https://medium.com/@denizgentrk/serving-a-fully-localized-sitemap-with-generated-routes-on-nuxt-js-94e1c27f5c91',
      date: '07.07.2020'
    }
  ],
  skills: {
    'Node.js': { category: 'Languages', icon: 'https://external-content.duckduckgo.com/ip3/nodejs.org.ico' },
    Firebase: { category: 'Backend', subCategory: 'Cloud Provider', icon: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico' },
    'Azure Image Recognition API': { category: 'Third Party Software', subCategory: 'Machine Learning', icon: 'https://external-content.duckduckgo.com/ip3/portal.azure.com.ico' },
    Redis: { category: 'Databases', subCategory: 'In Memory Key-Value Store', icon: 'https://external-content.duckduckgo.com/ip3/redis.io.ico' },
    Memcached: { category: 'Databases', subCategory: 'Caching', icon: '/icons/memcached.png' },
    'Parse-Server': { category: 'Backend', subCategory: 'Framework', language: 'Node.js', icon: 'https://external-content.duckduckgo.com/ip3/parseplatform.org.ico' },
    PostgreSQL: { category: 'Databases', icon: 'https://external-content.duckduckgo.com/ip3/www.postgresql.org.ico' },
    'Vuetify.js': { category: 'Frontend', subCategory: 'UI Framework', icon: 'https://external-content.duckduckgo.com/ip3/vuetifyjs.com.ico' },
    ESLint: { category: 'Frontend', subCategory: 'Tooling', icon: 'https://external-content.duckduckgo.com/ip3/eslint.org.ico' },
    Jquery: { category: 'Frontend', subCategory: 'Framework', icon: 'https://external-content.duckduckgo.com/ip3/jquery.com.ico' },
    'Electron.js': { category: 'Frontend', subCategory: 'Cross-platform Apps', icon: 'https://external-content.duckduckgo.com/ip3/www.electronjs.org.ico' },
    'Bull-mq': { category: 'Backend', subCategory: 'Job Scheduling', icon: 'https://external-content.duckduckgo.com/ip3/docs.bullmq.io.ico' },
    'X-ray': { category: 'Web Scraping', language: 'Node.js', icon: '/icons/x-ray.png' },
    Puppeteer: { category: 'Web Scraping', subCategory: 'Web Driver', icon: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png' },
    'Nuxt.js': { category: 'Frontend', subCategory: 'Framework', icon: 'https://external-content.duckduckgo.com/ip3/nuxtjs.org.ico' },
    'Sanity.io': { category: 'Backend', subCategory: 'Headless CMS', icon: 'https://external-content.duckduckgo.com/ip3/www.sanity.io.ico' },
    SASS: { category: 'Frontend', subCategory: 'CSS', icon: 'https://external-content.duckduckgo.com/ip3/sass-lang.com.ico' },
    Stylus: { category: 'Frontend', subCategory: 'CSS', icon: 'https://external-content.duckduckgo.com/ip3/stylus-lang.com.ico' },
    LESS: { category: 'Frontend', subCategory: 'CSS', icon: 'https://external-content.duckduckgo.com/ip3/lesscss.org.ico' },
    CSS: { category: 'Frontend', subCategory: 'CSS', icon: '/icons/css.png' },
    Husky: { category: 'Tools', subCategory: 'Git Hooks', icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f436.png' },
    CircleCI: { category: 'Frontend', subCategory: 'CI-CD', icon: 'https://external-content.duckduckgo.com/ip3/circleci.com.ico' },
    Cordova: { category: 'Frontend', subCategory: 'Cross-platform Apps', icon: 'https://external-content.duckduckgo.com/ip3/cordova.apache.org.ico' },
    'JWT Tokens': { category: 'Backend', subCategory: 'Auth', icon: 'https://external-content.duckduckgo.com/ip3/jwt.io.ico' },
    PostGIS: { category: 'Databases', subCategory: 'Positional Database', icon: 'https://external-content.duckduckgo.com/ip3/postgis.net.ico' },
    Stripe: { category: 'Third Party Software', subCategory: 'Payments', icon: 'https://external-content.duckduckgo.com/ip3/stripe.com.ico' },
    OAuth2: { category: 'Backend', subCategory: 'Auth', icon: 'https://external-content.duckduckgo.com/ip3/oauth.net.ico' },
    'HTML5 History API': { category: 'Frontend', subCategory: 'HTML5', icon: 'https://external-content.duckduckgo.com/ip3/html.com.ico' },
    'Socket.io': { category: 'Backend', subCategory: 'Websockets', icon: 'https://external-content.duckduckgo.com/ip3/socket.io.ico' },
    Beautifulsoup4: { category: 'Web Scraping', language: 'Python' },
    Python: { category: 'Languages', icon: 'https://external-content.duckduckgo.com/ip3/www.python.org.ico' },
    PHP: { category: 'Languages', icon: 'https://external-content.duckduckgo.com/ip3/www.php.net.ico' },
    Django: { category: 'Backend', subCategory: 'Framework', language: 'Python', icon: 'https://external-content.duckduckgo.com/ip3/www.djangoproject.com.ico' },
    Laravel: { category: 'Backend', subCategory: 'Framework', language: 'PHP', icon: 'https://external-content.duckduckgo.com/ip3/laravel.com.ico' },
    Express: { category: 'Backend', subCategory: 'Framework', language: 'Node.js', icon: 'https://external-content.duckduckgo.com/ip3/expressjs.com.ico' },
    'Vue.js': { category: 'Frontend', subCategory: 'Framework', language: 'Javascript', icon: 'https://vuejs.org/logo.svg' },
    Gulp: { category: 'Frontend', subCategory: 'Tooling', icon: 'https://external-content.duckduckgo.com/ip3/gulpjs.com.ico' },
    Vagrant: { category: 'Devtools', subCategory: 'VMs', icon: 'https://external-content.duckduckgo.com/ip3/www.vagrantup.com.ico' },
    Docker: { category: 'Devtools', subCategory: 'VMs', icon: 'https://external-content.duckduckgo.com/ip3/www.docker.com.ico' },
    Kubernetes: { category: 'Backend', subCategory: 'Cloudservers', icon: 'https://external-content.duckduckgo.com/ip3/kubernetes.io.ico' },
    Helm: { category: 'Devtools', icon: 'https://external-content.duckduckgo.com/ip3/helm.sh.ico' },
    MySQL: { category: 'Databases', icon: 'https://external-content.duckduckgo.com/ip3/www.mysql.com.ico' },
    Crontab: { category: 'Backend', subCategory: 'Job Scheduling', icon: 'https://external-content.duckduckgo.com/ip3/crontab.guru.ico' },
    Celery: { category: 'Backend', subCategory: 'Queues', icon: 'https://external-content.duckduckgo.com/ip3/docs.celeryproject.org.ico' },
    Storybook: { category: 'Frontend', subCategory: 'Tooling', icon: 'https://external-content.duckduckgo.com/ip3/storybook.js.org.ico' },
    Selenium: { category: 'Web Scraping', subCategory: 'Web Driver', icon: 'https://external-content.duckduckgo.com/ip3/www.selenium.dev.ico' },
    Webpack: { category: 'Frontend', subCategory: 'Tooling', icon: 'https://external-content.duckduckgo.com/ip3/webpack.js.org.ico' },
    Sentry: { category: 'Libraries/APIs', subCategory: 'Error Tracking', icon: 'https://external-content.duckduckgo.com/ip3/sentry.io.ico' },
    'New Relic': { category: 'Third Party Software', subCategory: 'Error Tracking', icon: 'https://external-content.duckduckgo.com/ip3/newrelic.com.ico' },
    iyzico: { category: 'Third Party Software', subCategory: 'Payments', icon: 'https://external-content.duckduckgo.com/ip3/www.iyzico.com.ico' },
    Firestore: { category: 'Databases', subCategory: 'Cloud Database', icon: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico' },
    'Firebase Hosting': { category: 'Backend', subCategory: 'Web Hosting', icon: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico' },
    MongoDB: { category: 'Databases', subCategory: 'NoSQL Database', icon: 'https://external-content.duckduckgo.com/ip3/www.mongodb.com.ico' },
    Hotjar: { category: 'Third Party Software', subCategory: 'Analytics', icon: 'https://external-content.duckduckgo.com/ip3/www.hotjar.com.ico' },
    'Google Tag Manager': { category: 'Third Party Software', subCategory: 'Analytics', icon: 'https://external-content.duckduckgo.com/ip3/developers.google.com.ico' },
    'Google Doubleclick': { category: 'Third Party Software', subCategory: 'Ads', icon: '/icons/doubleclick.png' },
    Nginx: { category: 'Backend', subCategory: 'Proxy Server', icon: 'https://external-content.duckduckgo.com/ip3/nginx.org.ico' },
    Apache: { category: 'Backend', subCategory: 'Proxy Server', icon: 'https://httpd.apache.org/favicon.ico' },
    'Gmail API': { category: 'Third Party Software', subCategory: 'Google APIs', icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico' },
    'Google People API': { category: 'Third Party Software', subCategory: 'Google APIs', icon: 'https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png' },
    Elasticsearch: { category: 'Third Party Software', subCategory: 'Search', icon: 'https://external-content.duckduckgo.com/ip3/www.elastic.co.ico' },
    Vercel: { category: 'Tools', subCategory: 'Deployment', icon: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png' },
    k6: { category: 'Tools', subCategory: 'Testing', icon: 'https://external-content.duckduckgo.com/ip3/k6.io.ico' },
    Cloudflare: { category: 'Tools', subCategory: 'Hosting', icon: 'https://external-content.duckduckgo.com/ip3/www.cloudflare.com.ico' },
    'AWS SES': { category: 'Libraries/APIs', subCategory: 'Emailing', icon: 'https://duckduckgo.com/assets/icons/favicons/amazon.png' },
    'AWS S3': { category: 'Storage', subCategory: 'Cloud Storage', icon: 'https://duckduckgo.com/assets/icons/favicons/amazon.png' }

  },
  stack: {
    Languages: [],
    Frameworks: {
      Backend: [],
      Frontend: [],
      UI: []
    },
    Storage: {
      SQL: [],
      NoSQL: [],
      File: [],
      Cloud: [],
      'In Memory': []
    },
    'Libraries & APIs': {
      'Web Scraping': [],
      'Error Tracking': [],
      Payments: [],
      Queues: [],
      'Job Scheduling': []
    },
    Tools: {
      'CSS-Preprocessors': [],
      Linting: []
    }
  },
  learningGoals: ['Unit Testing', 'Nest.js', 'Chrome-Extension Development'],
  languages: [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Turkish', flag: '🇹🇷' },
    { name: 'German', flag: '🇩🇪', level: 'Intermediate' },
    { name: 'Japanese', flag: '🇯🇵', level: 'Intermediate' }
  ],
  interests: [
    'Swimming',
    'Diving',
    'Learning',
    'Japanese Riichi Mahjong',
    'Real-estate',
    'Science and Astronomy'
  ]
})

export const getters = {
  age: () => {
    const today = new Date()
    const birthDate = new Date('1989-05-01')
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  },
  stack: (state) => {
    let stack = {}
    for (const { skills, start } of state.portfolio) {
      const startDate = start + '-01'
      for (const skill of skills || []) {
        if (!(skill in stack)) {
          stack[skill] = {
            name: skill,
            count: 0,
            ...(state.skills[skill] || {}),
            startDate
          }
        }
        stack[skill].count++
        if (startDate > stack[skill].startDate) {
          stack[skill].startDate = startDate
        }
      }
    }
    stack = Object.values(stack)
    stack.sort((a, b) => a.count > b.count ? -1 : 1)
    return stack
  },
  categories: state => [...new Set(Object.values(state.skills).map(({ category }) => category))]
}
