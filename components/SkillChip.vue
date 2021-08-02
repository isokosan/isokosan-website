<template>
  <div class="skill-chip">
    <v-tooltip v-if="tooltip" bottom>
      <span>{{ tooltip }}</span>
      <template #activator="{ on }">
        <div class="d-flex align-center" v-on="on">
          <img v-if="item.icon" :src="item.icon" :alt="item.name">
          {{ item.name }}
        </div>
      </template>
    </v-tooltip>
    <div v-else class="d-flex align-center">
      <img v-if="item.icon" :src="item.icon" :alt="item.name">
      {{ item.name }}
    </div>
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
    },
    hideCategory: {
      type: Boolean,
      default: () => false
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
    tooltip () {
      const text = []
      if (!this.hideCategory) {
        text.push(this.item.category)
      }
      this.item.subCategory && text.push(this.item.subCategory)
      this.item.language && text.push(this.item.language)
      return text.length
        ? text.join(' | ')
        : null
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
