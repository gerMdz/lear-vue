<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {ref} from "vue";
export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value ++
    }
    return {
      counter,
      increment
    }
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
            <HelloWorld msg="You did it!" />
      <button @click="increment"> {{ counter }}</button>
    </div>
  </header>

  <main>
        <TheWelcome />
  </main>

  <section>
    <div>
      APP
    </div>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
