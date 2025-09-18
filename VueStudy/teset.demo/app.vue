<template>
  <div class="test-container">
    <h1>{{ title }}</h1>
    <p>这是一个测试文件，用于验证 Volar 和 Vue 环境是否正常工作</p>
    <button @click="count++">点击计数: {{ count }}</button>
    <p>消息: <input v-model="message"></p>
    <p>你输入的是: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "🎉 Vue 环境测试成功！",
      count: 0,
      message: "你好 Volar！"
    }
  }
}
</script>

<style>
.test-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}
h1 {
  color: #42b883; /* Vue 的主题绿色 */
}
button {
  background-color: #42b883;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369870;
}
input {
  padding: 8px;
  border: 2px solid #ddd;
  border-radius: 4px;
}
</style>