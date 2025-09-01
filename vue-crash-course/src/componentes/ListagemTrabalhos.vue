<script setup>
    import { defineProps,ref, onMounted, reactive } from 'vue';
    import Trabalho from './ListagemTrabalho.vue';
    import {RouterLink} from 'vue-router';
    import PulseLoander from 'vue-spinner/src/PulseLoader.vue';
    import axios from 'axios';
    defineProps({
        Title: {
            type: String,
            default: "Browse Jobs"
        },

        limit: Number,
        ShowButao: {
            type: Boolean,
            default: false
        }
    });

    
   const state = reactive({
        jobs: [],
       isloading: true,
   });
    console.log(state.isloading);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs');
       state.jobs = response.data;
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching job data:', error);
    }finally {
        state.isloading = false;
    }
    
});    
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
         <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-primary mb-6 text-center">
                {{ Title }}
            </h2>
            <!-- Loading State -->
             <div v-if="state.isloading" class="text-center text-gray-500 py-6">
                <PulseLoander/>
                <!--  State -->
             </div>
            <div  v-else class="grid grid-color-1 md:grid-cols-3 gap-6">
                <Trabalho v-for="jobs in state.jobs.slice(0, limit || state.jobs.length )" :key="jobs.id" :jobs="jobs"/>
            </div>
        </div>
    </section>

    <section v-if="ShowButao" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>  
     
</template>