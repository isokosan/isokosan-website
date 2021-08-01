<template>
  <div>
    <!-- Intro -->
    <v-card class="mb-10">
      <v-card-title>
        <v-avatar size="5em" class="mr-md-5 mx-auto ml-md-0 mb-3 mb-md-0">
          <v-img src="./avatar.jpeg" />
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
        I've picked up coding watching my freelance employee, who later became my tutor, work on a CRM & E-commerce application for my liquid candle business <a href="https://decoralamps.com" target="_blank">Decora Lamps</a>.
      </v-card-text>
      <v-card-text class="text-h6">
        I fell in love building things by coding, and shortly after met a couple who had a cosmetics forum <a href="https://suslusozluk.com" target="_blank">suslusozluk.com</a> with over 1 million monthly visitors, but an old code-base that couldn't handle the traffic. I dug in and pushed my limits, and re-did the complete web-app in less than a year. I maintain it to this day.
      </v-card-text>
      <v-card-text class="text-h6">
        I'm also building <a href="https://fireful.io" target="_blank">fireful.io</a>, a free plug & play content editor for firebase.
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
                <v-chip
                  v-for="skill in item.skills || []"
                  :key="skill"
                  label
                  outlined
                  class="mb-2 mr-2"
                >
                  {{ skill }}
                </v-chip>
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
      <v-card-text>
        <v-chip
          v-for="skill in skills"
          :key="skill.name"
          label
          outlined
          class="mb-2 mr-2"
        >
          {{ skill.name }} ({{ skill.count }})
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiOpenInNew } from '@mdi/js'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      age: this.getAge('1989-05-01'),
      mdiGithub,
      mdiLinkedin,
      mdiOpenInNew
    }
  },
  head: () => ({
    title: 'Deniz Genctürk'
  }),
  computed: {
    ...mapState(['portfolio']),
    ...mapGetters(['skills'])
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
