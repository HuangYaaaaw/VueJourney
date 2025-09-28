<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" @click="handleCollect" />
        </label>
        <span>
            <span>已完成{{doneTodo}}</span> / 全部{{ All }}
        </span>
        <button class="btn btn-danger" @click="handleDelete">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props: [ 'todos'],
    computed: {
        doneTodo() {
            let count = 0
            this.todos.forEach(item=>{
                if(item.done)
                {
                    count++;
                }
              
            })
            return count
        },
        All() {
            return this.todos.length
        }
    },
    methods: {
        handleCollect(e) {
            this.$emit('collectAll',e.target.checked)
        },
        handleDelete() {
            this.$emit('deleteAll')
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>