<template>
  <div class="skill-chip">
    <v-tooltip bottom>
      <span>{{ item.category }}</span>
      <span v-if="item.subCategory"> | {{ item.subCategory }}</span>
      <span v-if="item.language"> | {{ item.language }}</span>
      <template #activator="{ on }">
        <div class="d-flex align-center" v-on="on">
          <img v-if="item.icon" :src="item.icon" :alt="item.name">
          {{ item.name }}
        </div>
      </template>
    </v-tooltip>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SkillChip',
  props: {
    skill: {
      type: Object,
      default: () => null
    },
    skillName: {
      type: String,
      default: () => null
    }
  },
  computed: {
    ...mapGetters(['skills']),
    item () {
      if (this.skill && this.skill.name) {
        return this.skill
      }
      if (this.skillName && !this.skill) {
        return this.skills.find(({ name }) => name === this.skillName)
      }
      return null
    },
    color () {
      switch (this.item.category) {
        case 'Backend':
          return 'error'
        case 'Database':
          return 'error'
        case 'Frontend':
          return 'success'
        case 'Platform':
          return 'info'
        case 'Devtools':
          return 'accent'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
.skill-chip {
  margin: 0 1em 1em 0;
  padding: 0.2em 1em;
  border-radius: 1em;
  border: 1px solid #00000020;
  img {
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }
}
</style>
