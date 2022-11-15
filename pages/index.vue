<template>
  <div>
    <!-- Intro -->
    <v-card class="mb-10 pb-5">
      <v-card-title>
        <v-avatar size="5em" class="mr-md-5 mx-auto ml-md-0 mb-3 mb-md-0">
          <v-img src="./logo_128.webp" />
        </v-avatar>
        <div class="d-flex flex-column justify-start">
          <span class="mb-2 text-center text-md-left">
            Hi, I'm Deniz, a self-taught full stack web developer
          </span>
          <div class="px-1 text-body-2 text-center text-md-left">
            <span>I'm {{ age }}, I live in</span>
            <v-chip outlined>
              Solingen, Germany
              <v-avatar class="ml-2">
                🇩🇪
              </v-avatar>
            </v-chip>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="text-h6">
        I picked up coding watching my freelancer work on an e-commerce & CRM web app for my liquid candle business <a href="https://decoralamps.com" target="_blank">Decora Lamps</a>. I fell in love with the ability to create things just from the tip of my fingers and decided to focus most of my time into coding.
      </v-card-text>
      <v-card-text class="text-h6">
        I met a couple who owned <a href="https://suslusozluk.com" target="_blank">suslusozluk.com</a>, a cosmetics forum with over 1m monthly visitors at the time, but an old code-base which couldn't handle the traffic anymore. I dug in and pushed my limits, re-doing and transitioning the complete website in less than a year. It now enjoys over 2.5m monthly users and I maintain it to this day.
      </v-card-text>
      <v-card-text class="text-h6">
        In 2019 I moved to Germany and started taking on projects from <a href="https://mammutmedia.eu" target="_blank">Mammut Media</a>, a German web & social media agency of young and enthusiastic entrepreneurs. Work was mostly for the government of Solingen and nearby cities and it helped me have a stable job in Germany for my transition to living here.
      </v-card-text>
      <v-card-text class="text-h6">
        During the COVID crisis, I built several test-center and vaccination booking systems for clients of Mammut Media, which were very successful and continue to be used vigorously to this day.
      </v-card-text>
      <v-card-text class="text-h6">
        I'm also building <a href="https://fireful.io" target="_blank">fireful.io</a>, a free plug & play content editor for firebase when I find time in between my other projects.
      </v-card-text>
      <v-card-text class="text-h6">
        I'm looking to partner up as a developer or also an investor in any kind of project, but I'm mostly attracted to niche B2B SaaS ideas. Feel free to contact me via <a href="https://www.linkedin.com/in/isokosan" target="_blank">linkedin</a>, my <a href="https://github.com/isokosan" target="_blank">github</a>, or you can find me at <a href="https://www.indiehackers.com/isokosan" target="_blank">indie hackers</a>.
      </v-card-text>
      <v-card-text>
        <span v-if="languagesText">I speak {{ languagesText }}.</span>
        <span>Some of my other interests are: {{ interests.join(', ') }}.</span>
        <span>Some of my learning goals this year: {{ learningGoals.join(', ') }}.</span>
      </v-card-text>
    </v-card>

    <!-- Projects -->
    <v-card id="projects" class="mb-10">
      <v-card-title>
        Some of my personal projects and freelance work
      </v-card-title>
      <v-card-text class="pl-0">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, i) in portfolio"
            :key="i"
            color="white"
            large
            fill-dot
          >
            <template #icon>
              <v-avatar :color="item.color">
                <v-img contain :src="item.avatar" />
              </v-avatar>
            </template>
            <article>
              <div class="timeline-body-title">
                <h3>
                  <a
                    v-if="item.href"
                    :href="item.href"
                    target="_blank"
                    class="d-flex align-center"
                  >
                    {{ item.title }}
                    <v-icon small right>
                      {{ mdiOpenInNew }}
                    </v-icon>
                  </a>
                  <span v-else>
                    {{ item.title }}
                  </span>
                </h3>
                <span>{{ item.start }} - {{ item.end }}</span>
                <span v-if="item.viaMammut">via <a href="https://https://mammutmedia.eu" target="_blank">Mammut Media</a></span>
              </div>
              <div class="timeline-body-body">
                <p>{{ item.description }}</p>
                <p>{{ item.body }}</p>
                <div class="d-flex flex-wrap">
                  <skill-chip
                    v-for="skill in item.skills || []"
                    :key="skill"
                    :skill-name="skill"
                    class="mr-2 mb-2"
                  />
                </div>
              </div>
            </article>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <!-- Stack -->
    <v-card id="stack" class="mb-10">
      <v-card-title>
        What I've worked with over the years
      </v-card-title>
      <v-card-subtitle>
        <v-btn-toggle
          v-model="filter"
          class="v-btn-toggle__with-label flex-wrap"
        >
          <span class="ma-1">Filter:</span>
          <v-btn
            v-for="category in categories"
            :key="category"
            small
          >
            {{ category }}
          </v-btn>
        </v-btn-toggle>
      </v-card-subtitle>
      <v-card-text style="min-height: 200px; width: 100%;">
        <div ref="isotope">
          <skill-chip
            v-for="skill in stack"
            :key="skill.name"
            :skill="skill"
            :hide-category="Boolean(filterCategory)"
            class="mr-2 mb-2"
            :class="(skill.category || '').replace(/\s/g, '')"
          />
        </div>
      </v-card-text>
    </v-card>

    <!-- Articles -->
    <v-card id="articles" class="mb-10">
      <v-card-title>
        My articles on Medium
      </v-card-title>
      <v-card-subtitle>
        I don't write much but I hope to write more to give back to the community.
      </v-card-subtitle>
      <v-card-text>
        <v-list two-line :three-line="$vuetify.breakpoint.xsOnly">
          <v-list-item
            v-for="(article, index) in articles"
            :key="index"
            :href="article.href"
            target="_blank"
          >
            <v-list-item-avatar>
              <v-img src="/icons/medium.png" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="text-body-1 black--text">
                {{ article.title }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ article.date }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiOpenInNew } from '@mdi/js'
import { mapState, mapGetters } from 'vuex'
import SkillChip from '@/components/SkillChip'
export default {
  components: {
    SkillChip
  },
  data () {
    return {
      filter: null,
      isotope: null,
      isotopeTimeout: null,
      mdiGithub,
      mdiLinkedin,
      mdiOpenInNew
    }
  },
  computed: {
    ...mapState([
      'portfolio',
      'articles',
      'interests',
      'learningGoals',
      'languages'
    ]),
    ...mapGetters([
      'age',
      'stack',
      'categories'
    ]),
    languagesText () {
      if (!this.languages || !this.languages.length) {
        return ''
      }
      const langs = this.languages.map((lang) => {
        let text = `${lang.flag} ${lang.name}`
        if (lang.level) {
          text += ` (${lang.level})`
        }
        return text
      })
      const lastItem = langs.pop()
      return langs.join(', ') + ' and ' + lastItem
    },
    filterCategory () {
      return this.filter >= 0
        ? (this.categories[this.filter] || '').replace(/\s/g, '')
        : null
    },
    isotopeOptions () {
      return {
        itemSelector: '.skill-chip',
        layoutMode: 'fitRows',
        filter: this.filterCategory
      }
    }
  },
  watch: {
    isotopeOptions () {
      this.isotope.arrange({
        filter: el => this.filterCategory === null || el.classList.contains(this.filterCategory)
      })
    }
  },
  mounted () {
    const fjs = document.getElementsByTagName('script')[0]
    if (!document.getElementById('isotope-script')) {
      const js = document.createElement('script')
      js.id = 'isotope-script'
      js.async = true
      js.defer = true
      js.src = 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
    this.initIsotope()
  },
  methods: {
    getAge (dateString) {
      const today = new Date()
      const birthDate = new Date(dateString)
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
    initIsotope () {
      clearTimeout(this.isotopeTimeout)
      if (window.Isotope) {
        this.isotope = new window.Isotope(this.$refs.isotope, this.isotopeOptions)
        return
      }
      this.isotopeTimeout = setTimeout(this.initIsotope, 100)
    }
  }
}
</script>

<style lang="scss">
#isokosan.v-application {
  .v-btn-toggle.v-btn-toggle__with-label {
    > .v-btn.v-btn {
      margin: 3px;
      border-left-width: thin;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }
}
</style>
