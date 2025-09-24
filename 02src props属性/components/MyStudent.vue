
<template>
  <div>
    <span>大家好，我的名字叫做{{name}}</span>
    <p>今年{{ age }}岁了</p>
    <button @click="n++">点击我吧</button>
    <p v-if="n!=0">很高兴认识大家</p>
  </div>
</template>

<script>
export default {
    name:'MyStudent',
    data(){
        return {
            name:'张三',
            n:0
        }
    },
   props:{
    age:{
        type:Number,
        required:true
    }
   }

}
</script>

<style>

</style>