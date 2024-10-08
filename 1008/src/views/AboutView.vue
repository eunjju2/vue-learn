<template>
  <div>
    <h2>Script Setup</h2>
    {{ message }}
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

const message = 'Ex Script SEtup - Hello Vue !!'
onMounted(() => {
  console.log('onMounted')
})
</script>

<!-- <template>
  <div>
    <h2>Composition API</h2>
    {{ message }}
  </div>
</template>
<script>
import { 
  // onCreated,
  onMounted
 } from 'vue'
export default {
  setup() {
    const message = 'Ex Composition API - Hello Vue!!'
    // onCreated(() => {
    //   console.log('create')
    // })
    onMounted(() => {
      console.log('mounted')
    })
    return {
      message
    }
  }
}
</script> -->

<!-- <template>
  <div class="about">
    <h2>Options API</h2>
    <br />
    <p>{{ a }}</p>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  components: {}, //외부 컴포넌트 등록
  data: () => {
    return {
      a: 10,
      message: 'Ex Options API - Hello Vue !!'
    }
  },
  method: {
    add() {
      this.a += 10
    }
  },
  setup() {
    console.log('setup')
  },
  craeted() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
<style></style> -->
