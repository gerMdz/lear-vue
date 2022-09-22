<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const name = 'VUE dinámico'
const styleColor = "color: #1a1c80"
const arrayColores = ["blue", "red", "peru"]
const active = false

const arrayProductos = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "por kilo",
  },
  {
    name: "Huevos",
    price: "$2.00",
    description: "por Docena",
  },
  {
    name: "Melón",
    price: "$3.00",
    description: "por Unidad",
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

    <ul>
      <li v-for="producto in arrayProductos"
          :key="producto.name"
      >
        <!--        {{producto.name}}-->
        <ul>
          <li v-for="(value , propiedades) in producto"
              :key="value">
            <ul>
              <li> {{ propiedades }}: {{ value }}</li>

            </ul>
          </li>
        </ul>
      </li>


    </ul>

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
