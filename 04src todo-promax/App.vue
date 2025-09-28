<template>

  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @add="add"/>
        <MyList :todos="todos"/>
        <MyFooter @collectAll="collectAll" @deleteAll="deleteAll" :todos="todos"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyList from './components/MyList.vue'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'App',
  components: { MyList, MyHeader, MyFooter },
  data() {
    return {
      todos: [
        { id: '001', title: '跳舞', done: true },
        { id: '002', title: '唱歌', done: false },
        { id: '003', title: '不知道', done: true },
      ]
    }
  },
  methods:{
    add(obj){
      this.todos.unshift(obj)
    },
    checkbox(id){
      this.todos.forEach((item)=>{
        if(item.id===id)
      {
        item.done=!item.done
      }
      })
    },
    Dodelete(id){
      this.todos=this.todos.filter(item=>item.id!=id)
    },
    collectAll(value){
      this.todos.forEach(item=>item.done=value)
    },
    deleteAll(){
      this.todos=this.todos.filter(item=>!item.done)
    },
   
  },
   mounted(){
      this.$bus.$on('Dodelete',this.Dodelete)
      pubsub.subscribe('remind',this.checkbox)
    }
}

</script>

<style scoped>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>