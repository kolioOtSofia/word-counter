<script setup>
const { data } = await useFetch("/api/words/words");
const words = data.value
</script>

<template>
<div>
  <h1>Words:
    </h1>
<ul>
  <li v-for="(word, idx) in words" :key="idx"> {{ words[idx] }}</li>
</ul>
</div>
</template>