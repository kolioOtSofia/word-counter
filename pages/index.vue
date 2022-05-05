<script setup>
const { data } = await useFetch("/api/v1/words");
const words = data.value;

function test() {
  console.log('test');
}
</script>

<template>
  <div> 
    <ul>
      <div v-for="word in words" :key="word.id" class="p-8 m-8">
        <div class="flex align-items-center justify-content-evenly bg-indigo-500 font-bold font-italic text-white m-2 px-5 py-3 border-round">
          <div>{{word.content}}</div>
          <Button @click="test()">Test</Button>
        </div>
      </div>
    </ul>
  </div>

  
</template>
