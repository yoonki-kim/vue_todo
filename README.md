# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Vue.js 기초
```
1. 뷰 인스턴스 생성 : {{ variable }}
2. 뷰 데이터(data)와 메소드(methods) : {{ function_name('arg') }}
3. 데이터 바인딩 : V-bind:type -> :type
- 기본 태그 : <input type="text" value="hello"> 
- 데이터 바인딩 : <input v-bind:type="text변수" v-bind:value="hello변수"> 
- 축약형 : v-bind:type="변수" -> :type="변수"
4. 이벤트 바인딩 : v-on:click -> @click
- 기본형 : <button onclick="alert()"></button>
- 이벤트 바인딩 : <button v-on:click="alert()">
- 축약형 : <button @click="alert()">
- 이벤트 수식어 : v-on:click.left(함수명)
5. 데이터 양방향 바인딩 : v-model="변수"
- 기본형: <input type="text" :value="text변수" @keyup="updateText">
- 양방향 바인딩 : <input type="text" v-model="text변수"> 
- 축약형: <
6. computed 속성 : {{ computed_메소드_속성 }}
- 기본형: {{ message.split('').reverse().join('') }}
- computed 메소드 사용 : {{ computed_메소드_속성 }}
- 효과 : 미리계산된 결과값 사용, 중복제거 효과
- methode를 사용할 경우는 {{ function() }} 와 같이  ()를 사용해야 함
7. watch 속성: {{ message }} ->watch: { message(newVal, oldVal) {} }
- 기능 : message라는 변수를 감시하고 newVal과 oldVal을 리턴
8. 클래스 & 스타일 바인딩: class="red bold" -> :class="red: true bold: false"
- 클래스 기본형 : <div class="red bold">hello</div>
- 클래스 바인딩  : <div :class="red: true bold: false">
- 스타일 기본형 : <div style="color: red; font-size: 30px;">
- 스타일 바인딩 : <div :style="{ color: red변수, fontSize: size변수}">
9. v-if와 v-show : <div v-if="true">message</div>
- v-if, v-else-if, v-else에 여러개의 태그를 적용 : <template>로 묶어서 사용
- v-show : <div v-show="true">message</div>
- v-if는 토글 비용이 높고, v-show는 초기 랜더링 비용이 더 높다
- 매우 자주 바뀐다면 v-show를 사용 그외는 v-if 사용 권장
10. v-for 리스트 랜더링: <div v-for="count in items" key="count">
- index 추가 : <div v-for="(count, index) in items" key="index">
- key값으로 index를 사용할 경우 삽입 삭제시 순서에 주의
- key값은 고유한 값을 사용해야 함. 데이터베이스의 id를 사용 권장
11. 여러개의 Vue 인스턴스 사용
- <div id="app"> ... const app = new Vue({ el: "#app" })
- <div id="app-1"> ... const app1 = new Vue({ el: "#app-1" })
- 같은 인스턴스에서 this.변수 사용
- 다른 인스턴스에서 app1.변수 혹은 app.변수와 같이 다른 인스턴스와 함께 사용
12. Vue 컴포넌트 사용
- 전역등록 : Vue.component('comp', { template: {}, data() {}, methods: {} })
- 지역등록 : 컴포넌트 안에 컴포넌트를 등록해 사용
- 지역사용 예시: new Vue(components: { 'page-layout': PageLayout })
13. Vue CLI로 최적의 개발 환경 구축
14. Vue Router
<a>태그 대신 <router-link to="/path">태그 사용하여 <router-view/>에 표시
15. 싱글 파일 컴포넌트(.vue파일)
<template></template><script>export default { }</script><style></style>
1) @/components 폴더에 SampleComp.vue 파일을 만든 후
2) import SampleComp from '@/components/SampleComp.vue'
3) export defaust에 components: { SampleComp }, 로 등록
4) <template>에서 <SampleComp></SampleComp> 와 같이 사용
16. props (자식 컴포넌트에 데이터 보내기)
1) 컴포넌트 파일에서 export default {} 에 전달받을 props를 정의  예시) export default { props: ['title'], }
2) <template> 에서 표시 : <div> {{ title }}</div>
3) 컴포넌트를 사용할 부모 파일에서 속성 입력 <SampleComp title="hello" />
4) hello문자열이 props로 전달되어 전달된 값이 표시 됨
- props는 객체로도 정의 가능 : props: { title: { type: String, required: true} },
- 데이터 바인딩으로 props를 전달할 경우 <SampleComp :title="variable" />
- 전달받을 props 이름은 다른 변수로 사용하거나 내부에서 직접 수정 불가
17. $emit (부모 컴포넌트로 데이터 보내기) : $emit('event명', 전달할값)
1) 자식 컴포넌트: this.$emit('event-name', 전달할 값)
- 부모 컴포넌트: <InputField ... @event-name="event함수명" />
- event함수에서는 전달된 값이 인자로 전달 됨
- 컴포넌트 양방향 바인딩 : props로 부모->자식 , $emit로 자식->부모 
2) 메소드를 쓰지 않고 <template> 에서 직접 $emit하는 방법도 있음
3) 부모-자식 컴포넌트간 v-model 양방향 바인딩을 사용할 수 있음
- 부모 컴포넌트 : <InputField ... v-model="변수" />
- 자식 컴포넌트 : @input="$emit('input', $event.target.value)"
18. 슬롯(slot) : v-slot:slot명 -> #slot명 (v-slot:header -> #header)
- 자식 컴포넌트에 <slot></slot>을 삽입, 부모에서 넘겨진 슬롯이 없는 경우 표시x
- 부모 컴포넌트에서 자식 컴포넌트 호출시 코드를 삽입하면 전달 됨
- <SampleComp>코드삽입</SampleComp>
- 자식 컴포넌트에 여러개의 slot을 삽입하고자 할 경우 <slot name="slot명" />
- 부모 : <template v-slot:slot명>코드삽입</template>
- slot 이름이 없는경우 : <template v-slot:default>코드삽입</template>
- 축약형 : v-slot:slot명 -> #slot명
- 자식으로 넘어온 slot에서 자식 내부 변수를 부모에 전달하고자 할 경우
- 자식: <slot name="header" :전달할변수명="자식내부변수명" />
- 부모: <template #header="부모변수명"> {{ 부모변수명.전달받은변수명 }} </template>
- 구조분해 : <template #header="{구조분해변수명}"> {{ 구조분해변수명 }} </template>
19. 뷰 인스턴스 라이프사이클
- created(), mounted(), updated(), destroyed()
- beforeCreate(), beforeMount(), beforeUpdate(), beforeDestroy()
```