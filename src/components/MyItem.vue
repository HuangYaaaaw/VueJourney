<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoObj.done" @change="change(todoObj.id)"/>
            <span>{{ todoObj.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    </li>
</template>

<script scoped>
export default {
    name: 'MyItem',
    props: ['todoObj','checkbox','Dodelete'],
    methods:{
        change(id){
            this.checkbox(id)
            //checkbox是props属性传进来的东西，有数据代理，得用this
        },
        handleDelete(id){
            this.Dodelete(id)
            // 一定要记得写this,这个方法是从别的地方调过来的
        }
    }
}
</script>

<style>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
    background-color:red
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover{
    background-color:#ddd
}
li:hover button{
    display:block
}
</style>