<script setup>
const { data } = await useFetch("/api/v1/words");
const words = data.value;
</script>

<template>
  <div>
    <h1>Words:</h1>
    <ul>
      <li v-for="word in words" :key="word.id">{{ word.content }}</li>
    </ul>
  </div>
</template>
