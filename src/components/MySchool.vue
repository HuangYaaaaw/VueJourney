<template>
  <div>
    <h2>欢迎大家来到美丽的{{city}}(my{{where}})</h2>
    <h3>这里有很多美食</h3>
    <button @click="showTime">快来点击我吧</button>
    <input v-if="n!=0">
  </div>
</template>

<script>
export default {
    name:'MySchool',
    data(){
        return {
            city:'永州',
            where:'hometown',
            n:0
        }
    },
    methods:{
      showTime(){
        this.n++;
      }
    }
}
</script>

<style>

</style>