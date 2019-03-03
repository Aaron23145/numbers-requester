<template>
  <input
    v-model.trim="input"
    type="text"
    class="input-text"
    @keyup.enter="enterPressed"
  >
</template>

<script>
import debounce from 'lodash.debounce'
import { mapGetters } from 'vuex'

export default {
  name: 'InputText',
  data () {
    return {
      input: ''
    }
  },
  computed: mapGetters([
    'requestTypeSelected'
  ]),
  watch: {
    input () {
      this.inputModified()
    },
    requestTypeSelected () {
      this.input = ''
    }
  },
  created () {
    this.inputModified = debounce(this.textInputModified, 750)
  },
  methods: {
    textInputModified () {
      const textInput = this.input
      const error = this.validate(textInput)

      if (error) {
        this.showError(error)
        return
      }

      const parsedInput = parseInt(textInput)
      this.$emit('ok', parsedInput)
    },
    validate (textInput) {
      if (textInput === '') return 'Empty string'
      if (isNaN(textInput)) return 'Not a number'
      const parsedInput = Number(textInput)
      if (parsedInput !== parseInt(parsedInput)) return 'Float value'
      return false
    },
    showError (error) {
      console.error(error)
    },
    enterPressed () {
      this.inputModified.cancel()
      this.textInputModified()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  display: block;
  width: 100%;
  border: 2px solid var(--active-color);
  border-radius: 3px;
  color: var(--active-color)
}
</style>
