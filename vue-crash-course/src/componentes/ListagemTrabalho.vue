<script setup>
import { defineProps, ref, computed } from 'vue';
    import {RouterLink} from 'vue-router';
    const props = defineProps({
        jobs: Object
    });

      const MostrarDesricaoCompleta = ref(false);
      const ApresenteDescricaoCompleta = () => {
        MostrarDesricaoCompleta.value = !MostrarDesricaoCompleta.value;
      };
      const DescricaoCurta = computed(() => {
        let description = props.jobs.description;
        if (!MostrarDesricaoCompleta.value) {
          description= description.substring(0, 90) + '...';
        }
        return description;
      });
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2"> {{jobs.type}}</div>
                <h3 class="text-xl font-bold"> {{jobs.title}}</h3>
              </div>

              <div class="mb-5">
                <div>
                   {{ DescricaoCurta }}
                </div>
                <button @click="ApresenteDescricaoCompleta" class="text-primary hover:text-primary mb-5 ">
                   {{ MostrarDesricaoCompleta ? 'Show Less' : 'Show More' }}
                </button>
                
              </div>

              <h3 class="text-primary mb-2"> {{jobs.salary}}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-map-marker text-orange-700"></i>
                   {{jobs.location}}
                </div>
                <RouterLink
                  :to="'/jobs/' + jobs.id"
                  class="h-[36px] bg-primary hover:bg-primary text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
              </RouterLink>
              </div>
            </div>
          </div>
</template>