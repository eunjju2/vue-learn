<!-- 구구단 실습 해설 -->
<template>
  <div>
    <h2>다중 v-for</h2>
    <table border="1">
      <tr> 
        <th v-for="i in 8" :key="i">
          {{ i+1 }}단
        </th>
      </tr>
        <tr v-for="i in 9" :key="i">
          <td v-for="j in 8" :key="j" align="center">
            {{ j + 1 }} X {{ i }} = {{ (j + 1) * i }}
          </td>
          </tr>
    </table>
  </div>
</template>
<script setup></script>

<!-- 구구단 실습문제 -->
<!-- <template>
  <div>
    <h2>다중 v-for</h2>
    <table border="1">
      <thead>
        <tr>
          <th v-for="index in 8" :key="index">{{ index + 1 }}단</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="num in 9" :key="num">
          <td v-for="index in 8" :key="index" align="center">
            {{ index + 1 }} X {{ num }} = {{ (index + 1) * num }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup></script> -->

<!-- 실습 문제 해설 -->
<!-- <template>
  <div>
    <h2>v-if</h2>
    <h2>학점 입력</h2>
    <input type="number" name="score" v-model.number="score" /> <br /><br />
    학점 :
    <div v-if="score >= 0 && score <= 100">
      <span v-if="score >= 90">A</span>
      <span v-else-if="score >= 80">B</span>
      <span v-else-if="score >= 70">C</span>
      <span v-else-if="score >= 60">D</span>
      <span v-else>F</span>
    </div>
    <div v-else>
      잘못입력
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const score = ref()
</script> -->

<!-- 실습문제 -->
<!-- <template>
  <div>
    <h2>v-if</h2>
    <h2>학점 입력</h2>
    <input type="number" name="score" v-model.number="score" />
    <p v-if="score < 0 || score > 100">잘못입력</p>
    <p v-else-if="score >= 90">학점: A</p>
    <p v-else-if="score >= 80">학점: B</p>
    <p v-else-if="score >= 70">학점: C</p>
    <p v-else-if="score >= 60">학점: D</p>
    <p v-else>학점: F</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const score = ref()
</script> -->

<!-- <template>
  <div>
    <h2>v-for</h2>
    <table border="1">
      <thead>
        <tr>
          <th>순서</th>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productList" :key="index" align="center">
          <td>{{ index }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <p v-for="index in 10" :key="index">{{ index }}</p>
  </div>
</template>
<script setup>
const productList = [
  {name : '키보드', price:20000, category:'컴퓨터'},
  {name : '마우스', price:5000, category:'컴퓨터'},
  {name : '스피커', price:30000, category:'컴퓨터'},
  {name : '키보드', price:20000, category:'컴퓨터'}
]
</script> -->

<!-- <template>
  <div>
    <h2>v-bind:class</h2>
    <p class="container" :class="{'active':isActive, 'text-red':hasError}">클래스 바인딩 - JSON</p>
    <br><br>
    <p class="container" :class="['active', 'text-red']">클래스 바인딩 - 배열</p>
    <br><br>
    <p class="container" style="color:red;" :style="styleA">인라인 스타일 바인딩</p>
    <p class="container" style="color: red" :style="[styleA, styleB]">인라인 스타일 바인딩-배열</p>
  
  </div>
</template>
<script setup>
const isActive = true
const hasError=false
const styleA = {
  'background-color' : 'gray',
  'font-weight' : 'bold'
}
const styleB = {
  'font-size': '150%'
}
</script>
<style scoped>
.container {
  border:  1px solid blue;
  width: 200px;
  height: 180px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color : red;
}
</style> -->

<!-- <template>
  <div>
    <h2>v-bind</h2>
    <img v-bind:src="imgsrc" :width="width" :height="height" />
  </div>
  <input type="password" name="password" v-model="disabled">
  <button v-bind:disabled="disabled==''">클릭</button>
</template>
<script setup>
import {ref} from 'vue'
const imgsrc = 'https://kr.vuejs.org/images/logo.png'
const width = '100px'
const height = '100px'
const disabled = ref('')
</script> -->

<!-- <template>
  <div>
    <h2>v-model</h2>
    <br />
    <input type="text" name="name" v-model="name" />
    <br />
    이름 : {{ name }} <input type="number" name="age" v-model.number="age" /> <br />
    나이 : {{ age }} <br />
    <textarea v-model="msg"></textarea><br />
    메시지 : {{ msg }} <br />
    <select name="city" v-model="city">
      <option value="1">서울</option>
      <option value="2">인천</option>
      <option value="3">수원</option></select
    ><br />
    주소 : {{ city }} <br />
    <input type="checkbox" name="hobby" v-model="hobby" value="1" />독서
    <input type="checkbox" name="hobby" v-model="hobby" value="2" />등산
    <input type="checkbox" name="hobby" v-model="hobby" value="3" />게임 <br />취미 : {{ hobby }}
    <br />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const name = ref('이은수') 
console.log(name.value)
const age = ref(30)
const msg = ref('메시지를 입력하세요.')
const city = ref(2)
const hobby = ref([]) 
</script> -->

<!-- <template>
  <div>
    <h2 v-html="title"></h2>
    <br>
    <div>{{ htmlString }}</div>
    <br>
    <div v-html="htmlString"></div>
  </div>
</template>
<script setup>
const title = 'v-html'
const htmlString = "<p style='color:red'>빨간색</p>"
</script>  -->

<!-- <template>
  <div>
    <h2>문자열 바인딩</h2>
    <br>
    제목 : {{ title }} <br>
  </div>
</template>
<script setup>
const title = '데이터 바인딩'
</script> -->
