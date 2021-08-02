<template>
  <div>
    <!-- Intro -->
    <v-card class="mb-10">
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
        I picked up coding watching my freelancer work on an e-commerce & CRM web app for my liquid candle business <a href="https://decoralamps.com" target="_blank">Decora Lamps</a>. I fell in love with the ability to create things for people to use just from just the tip of my fingers.
      </v-card-text>
      <v-card-text class="text-h6">
        After my export business took a hit from ever changing customs regulations in Turkey, I decided to go full time into coding. I met a couple who owned <a href="https://suslusozluk.com" target="_blank">suslusozluk.com</a> which had over 1m monthly visitors, but an old code-base that couldn't handle the traffic. We dug in and I pushed my limits, re-doing the complete web-app in less than a year. The website now enjoys over 2.5m monthly users, and I maintain it to this day.
      </v-card-text>
      <v-card-text class="text-h6">
        After moving to Solingen, Germany in 2019 I started taking on projects from <a href="https://mammutmedia.eu" target="_blank">Mammut Media</a>, a German web & social media agency of young and enthusiastic entrepreneurs. I took mostly government work through them such as Solingen's job portal, touch-screen digital signage apps for their new outdoor screens, the backend of their city apps and the like.
      </v-card-text>
      <v-card-text class="text-h6">
        During the COVID crisis, I also built several test-center and vaccination booking systems for other clients of Mammut Media.
      </v-card-text>
      <v-card-text class="text-h6">
        I'm also building <a href="https://fireful.io" target="_blank">fireful.io</a>, a free plug & play content editor for firebase when I find time in between my other projects.
      </v-card-text>
      <v-card-text class="text-h6">
        I'm looking to partner up as a developer or also an investor in any kind of project, but I'm mostly attracted to niche B2B SaaS ideas. Feel free to contact me via any of the platforms below:
      </v-card-text>
      <v-card-actions>
        <div class="d-flex flex-wrap justify-center justify-md-start">
          <v-btn
            text
            class="mb-3"
            href="https://github.com/isokosan"
            target="_blank"
          >
            <v-icon large left>
              {{ mdiGithub }}
            </v-icon>
            Github
          </v-btn>
          <v-btn
            text
            class="mb-3"
            href="https://www.linkedin.com/in/isokosan"
            target="_blank"
          >
            <v-icon large left>
              {{ mdiLinkedin }}
            </v-icon>
            Linkedin
          </v-btn>
          <v-btn
            text
            class="mb-3"
            href="https://www.indiehackers.com/isokosan"
            target="_blank"
          >
            <v-avatar tile size="32px" class="mr-2">
              <v-img contain src="./ih100.png" />
            </v-avatar>
            Indie Hackers
          </v-btn>
        </div>
      </v-card-actions>
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

    <!-- Skills -->
    <v-card id="skills" class="mb-10">
      <v-card-title>
        A sum of my skills
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
      <v-card-text style="min-height: 400px;">
        <div class="d-flex flex-wrap">
          <skill-chip
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill"
            class="mr-2 mb-2 d-none"
            :class="{ 'd-flex': !selectedCategory || skill.category === selectedCategory }"
          />
        </div>
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
      age: this.getAge('1989-05-01'),
      mdiGithub,
      mdiLinkedin,
      mdiOpenInNew
    }
  },
  computed: {
    ...mapState(['portfolio']),
    ...mapGetters(['skills', 'categories']),
    selectedCategory () {
      return this.filter >= 0
        ? this.categories[this.filter]
        : null
    }
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
    }
  }
}
</script>

<style lang="scss">
#isokosan.v-application {
  .v-btn-toggle.v-btn-toggle__with-label {
    > .v-btn.v-btn:nth-child(2) {
      border-left-width: thin;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
  }
}
</style>
