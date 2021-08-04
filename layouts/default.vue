<template>
  <v-app id="isokosan" dark>
    <v-app-bar
      flat
      color="transparent"
      class="flex-grow-0 px-0 px-md-2"
    >
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly && !tiny"
        :x-small="tiny"
        href="#projects"
        @click.prevent="scrollTo('#projects')"
      >
        Projects
      </v-btn>
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly && !tiny"
        :x-small="tiny"
        href="#stack"
        @click.prevent="scrollTo('#stack')"
      >
        Stack
      </v-btn>
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly && !tiny"
        :x-small="tiny"
        href="#articles"
        @click.prevent="scrollTo('#articles')"
      >
        Articles
      </v-btn>
      <v-spacer />
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly"
        :icon="$vuetify.breakpoint.xsOnly"
        href="https://github.com/isokosan"
        target="_blank"
        class="mr-2 mr-md-0"
      >
        <v-icon :left="$vuetify.breakpoint.mdAndUp">
          {{ mdiGithub }}
        </v-icon>
        <span class="d-none d-md-block">Github</span>
      </v-btn>
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly"
        :icon="$vuetify.breakpoint.xsOnly"
        href="https://www.linkedin.com/in/isokosan"
        target="_blank"
        class="mr-2 mr-md-0"
      >
        <v-icon :left="$vuetify.breakpoint.mdAndUp">
          {{ mdiLinkedin }}
        </v-icon>
        <span class="d-none d-md-block">Linkedin</span>
      </v-btn>
      <v-btn
        text
        :small="$vuetify.breakpoint.xsOnly"
        :icon="$vuetify.breakpoint.xsOnly"
        href="https://www.indiehackers.com/isokosan"
        target="_blank"
        class="mr-2 mr-md-0"
      >
        <v-avatar tile :size="$vuetify.breakpoint.xsOnly ? '18px' : '24px'">
          <v-img contain src="./ih100.png" />
        </v-avatar>
        <span class="d-none d-md-block ml-1">Indie Hackers</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
        <v-footer color="transparent">
          <v-spacer />
          <v-btn
            text
            :small="$vuetify.breakpoint.xsOnly"
            :icon="$vuetify.breakpoint.xsOnly"
            href="https://github.com/isokosan"
            target="_blank"
          >
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
              {{ mdiGithub }}
            </v-icon>
            <span class="d-none d-md-block">Github</span>
          </v-btn>
          <v-btn
            text
            :small="$vuetify.breakpoint.xsOnly"
            :icon="$vuetify.breakpoint.xsOnly"
            href="https://www.linkedin.com/in/isokosan"
            target="_blank"
          >
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
              {{ mdiLinkedin }}
            </v-icon>
            <span class="d-none d-md-block">Linkedin</span>
          </v-btn>
          <v-btn
            text
            :small="$vuetify.breakpoint.xsOnly"
            :icon="$vuetify.breakpoint.xsOnly"
            href="https://www.indiehackers.com/isokosan"
            target="_blank"
          >
            <v-avatar tile :size="$vuetify.breakpoint.xsOnly ? '18px' : '24px'">
              <v-img contain src="./ih100.png" />
            </v-avatar>
            <span class="d-none d-md-block ml-1">Indie Hackers</span>
          </v-btn>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiOpenInNew } from '@mdi/js'
export default {
  data: () => ({
    mdiGithub,
    mdiLinkedin,
    mdiOpenInNew
  }),
  computed: {
    tiny () {
      return this.$vuetify.breakpoint.width <= 360
    }
  },
  methods: {
    scrollTo (target) {
      this.$vuetify.goTo(target, {
        duration: 500,
        offset: 100,
        easing: 'easeOutCubic'
      })
    }
  }
}
</script>

<style lang="scss">
@import 'vuetify/src/styles/settings/_variables.scss';
#isokosan.v-application {
  // background
  background-image: url('/bg2.png');
  background-repeat: repeat;
  // header .v-toolbar__content {
  //   margin-top: 1em;
  //   background: #ffffff;
  //   border-top-left-radius: 1em;
  //   border-top-right-radius: 1em;
  //   border-bottom: 4px solid black;
  // }
  // main .v-main__wrap > .container {
  //   background: #ffffffc7;
  //   border-bottom-left-radius: 1em;
  //   border-bottom-right-radius: 1em;
  // }
  @media #{map-get($display-breakpoints, 'xs-only')} {
    header, main .v-main__wrap {
      padding: 0 1em 1em 1em;
    }
  }
}
</style>
