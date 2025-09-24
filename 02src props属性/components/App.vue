<template>
  <MyStudent :age="20"/>
</template>

<script>
import MyStudent from './MyStudent.vue'
export default {
    name:'App',
    components:{MyStudent}
}
</script>

<style>
 MyStudent{
    background-color:chocolate
 }
</style>