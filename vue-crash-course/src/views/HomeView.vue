<script setup>
    import Hero from '../componentes/Hero.vue'
    import Homecard from '../componentes/Homecard.vue';
    import JoBlistings from '../componentes/ListagemTrabalhos.vue';

</script>

<template>
    <Hero />
  <Homecard />
  <JoBlistings :limit="2" -ShowButao="true" />
</template>