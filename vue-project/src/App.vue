<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { ref } from "vue";


const name = 'VUE dinámico'
const styleColor = "color: #1a1c80"
const arrayColores = ["blue", "red", "peru"]
const active = false


// método -methods

const handleClick = (message) => {
  console.log(message)
}

const counter = ref(0);
let counterColor = ref('#0a0a0a');

const increment = () => {
  console.log('Success')

  counter.value ++;
  if(counter > 0){
    counterColor.value = '#76ea0a'
  }


}

const decrement = () => {
  console.log('Danger')

  counter.value --;
  if(counter < 0){
    counterColor.value = '#a90a17'
  }

}

const resetCounter = () => {
  console.log('Warning')

  counter.value = 0;

}

const arrayProductos = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "por kilo",
    stock: 0
  },
  {
    name: "Huevos",
    price: "$2.00",
    description: "por Docena",
    stock: 10
  },
  {
    name: "Melón",
    price: "$3.00",
    description: "por Unidad",
    stock: 20
  }
]

const objetoProducto =
    {
      name: "mango",
      price: "$4.00",
      description: "por Unidad",
      id: 1,
    }

const arrayFrutas = ["murder", "surprise", "forest", "month", "decrease"];
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="Iniciando"/>
    </div>
  </header>
  <section>
    <h1> Hola desde Mendoza <br/> {{ name.toUpperCase() }}</h1>
    {{ objetoProducto }}

    <ul>
      <li
          v-for="(value , propiedades, index) in objetoProducto"
          :key="value"
      >
        [{{ index }}] {{ propiedades }}= {{ value }}
      </li>
    </ul>
    <h2>{{ arrayColores }}</h2>
    <h2 :style="`color: ${arrayColores[2]}`"> Azul </h2>
    <h3> {{ active ? 'si' : 'no' }} </h3>
    <p><span v-if="active"> Si </span><span v-else> No </span> Estoy activo</p>

    <p v-show="active"> Por show</p>


    <!--    <ul>-->
    <!--      <li-->
    <!--          v-for="(fruta, index) in arrayFrutas"-->
    <!--          :key="index"-->
    <!--      >-->
    <!--       {{fruta}}-->
    <!--      </li>-->
    <!--    </ul>-->

    <!--    <ul>-->
    <!--      <li v-for="producto in arrayProductos"-->
    <!--          :key="producto.name"-->
    <!--      >-->
    <!--        &lt;!&ndash;        {{producto.name}}&ndash;&gt;-->
    <!--        <ul>-->
    <!--          <li v-for="(value , propiedades) in producto"-->
    <!--              :key="value">-->
    <!--            <ul>-->
    <!--              <li> {{ propiedades }}: {{ value }}</li>-->

    <!--            </ul>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </li>-->


    <!--    </ul>-->

    <ul>
      <template v-for="item in arrayProductos" :key="item.name">
        <li
            v-if="item.stock > 0"
        >
          {{ item.name }} - {{ item.price }}
        </li>
      </template>

    </ul>

  </section>

  <section>
    <h2>Ejemplo v-on</h2>

    <button @click.right.prevent="handleClick('Text Right')">
      Activame Right
    </button>
    <button @click.left="handleClick('Text Left')">
      Activame Left
    </button>
    <button @click.middle="handleClick('Text Middle')">
      Activame Middle
    </button>
  </section>

  <section>
    <h4 :class="counter > 0 ? 'positive':'negative' ">{{counter}}</h4>
    <button @click="increment">
      Aumentar
    </button>
    <button @click="decrement">
      Disminuir
    </button>
    <button @click="resetCounter">
      Reset
    </button>

  </section>

  <main>
    <TheWelcome/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

h1 {
  color: red;
}
.positive{
  color: green;
}
.negative{
  color: red;
}
.neutro {
  color: black;
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
