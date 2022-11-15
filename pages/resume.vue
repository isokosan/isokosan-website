<template>
  <v-card flat>
    <v-card-title class="justify-center text-uppercase text-body-1 font-weight-bold">
      Deniz Genctürk
    </v-card-title>
    <v-card-subtitle class="text-center">
      Self Taught Full Stack Developer | Age {{ age }}
      <br>
      +491786561494 |  denizar@gmail.com | Grünewalderstr. 29-31 42657 Solingen Germany
    </v-card-subtitle>
    <v-card-text>
      <v-list three-line>
        <div
          v-for="(item, p) in portfolio"
          :key="p"
          class="break"
        >
          <v-list-item class="pl-0">
            <v-list-item-avatar tile>
              <v-img :src="item.avatar" contain />
            </v-list-item-avatar>
            <v-list-item-content class="align-start">
              <v-list-item-title class="font-weight-bold">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <div>{{ item.start }} - {{ item.end }}<span v-if="item.viaMammut"> via Mammut Media</span></div>
                <div v-if="item.href" class="mt-1">
                  {{ item.href }}
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <p>{{ item.description }}</p>
          <p>{{ item.body }}</p>
          <div class="d-flex flex-wrap">
            <skill-chip
              v-for="skill in item.skills || []"
              :key="skill"
              :skill-name="skill"
            />
          </div>
        </div>
      </v-list>
    </v-card-text>
    <p class="break">
      <span v-if="languagesText">I speak {{ languagesText }}.</span>
      <span>Some of my other interests are: {{ interests.join(', ') }}.</span>
      <span>Some of my learning goals this year: {{ learningGoals.join(', ') }}.</span>
    </p>
  </v-card>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiOpenInNew } from '@mdi/js'
import { mapState, mapGetters } from 'vuex'
import SkillChip from '@/components/SkillChip'
export default {
  components: {
    SkillChip
  },
  layout: 'print',
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
    }
  },
  head () {
    return {
      title: 'Deniz Genctürk Resume ' + (new Date()).toLocaleDateString()
    }
  }
}
</script>

<style lang="scss">
#print {
  .skill-chip {
    font-size: 11px;
    line-height: 16px;
    margin: 0 3px 3px 0;
    padding: 0 8px;
    border-radius: 1em;
    img {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }
  p {
    font-size: 12px;;
    line-height: 14px;
  }
  .break {
    break-inside: avoid-page;
    margin-bottom: 2em;
  }
}
</style>
