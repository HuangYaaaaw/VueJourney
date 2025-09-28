<template>
  <MyStudent :age="20"/>
</template>

<script>
import {a} from '../mixin'

import MyStudent from './MyStudent.vue'
export default {
    name:'App',
    components:{MyStudent},
    mixins:[a],
     created(){
    console.log(a)
   }
}
</script>

<style>

</style>