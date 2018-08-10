<template>
    <div>
        <button id="toggle" @click="content = !content"> Toggle data property </button>
        <button id="log" @click="logSomeText"> Call function </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      content: true
    }
  },
  methods: {
    logSomeText () {
      console.log('The button was clicked. Method call successfull!');
    }
  }
}
</script>
