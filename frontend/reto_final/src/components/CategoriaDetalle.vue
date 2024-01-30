<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios';
import { useStore } from 'vuex';
import Navbar from './Navbar.vue';
import Gallery from './Gallery.vue';
import { API_URL } from '../config';

const store = useStore()
const categories = ref([])
const plataformas = ref([])
const defaultCategory = ref('')
const selectedCategory = ref('')
const selectedPlataform = ref('')
const games = ref([])

const getCategories = () => {
    const path = API_URL.concat('/all_categorias')
    axios
    .get(path)
    .then((response) => {
        categories.value = response.data
    }).catch((error) => {
        console.log(error)
    })
}

const getPlataformas = () => {
    const path = 'http://85.50.79.98:8080/all_plataformas'
    axios
    .get(path)
    .then((response) => {
        plataformas.value = response.data
    }).catch((error) => {
        console.log(error)
    })
}

const getJuegos = (plataforma = '', categoria = '') => {
    const path = 'http://85.50.79.98:8080/all_productos'
    axios
    .get(path)
    .then((response) => {
        games.value = response.data
        if(plataforma !== ''){
            // console.log(plataforma)
            // console.log("ENTRA")
            games.value = games.value.filter((game) => {
                return game.nombreplataforma === plataforma
            })
            // console.log(games.value)
        }else if((plataforma !== '') && (categoria !== '')){
            
            games.value = games.value.filter((game) => {
                return ((game.nombreplataforma === plataforma) && (game.nombrecategoria === categoria))
            })
        }
    }).catch((error) => {
        console.log(error)
    })
}

const setSelected = (categoria) => {
    return categoria === defaultCategory.value ? true : false;
}

const filterGames = () => {
    getJuegos(selectedPlataform.value)
}

onMounted(() => {
    getJuegos()
    getCategories()
    defaultCategory.value = store.state.categoryData
    selectedCategory.value = defaultCategory.value
    getPlataformas()
})


</script>


<template>
    <Navbar/>
    <div class="flex flex-row mt-2 justify-center align-middle">
        <div class="flex flex-col">
        <label for="categoria" class="text-white text-center">
            Categorías
        </label>
        <select 
            name="categoria" 
            class="text-black mt-5"
            v-model="selectedCategory"
            >
            <option 
                v-for="(category, index) in categories"
                :key="category.id"
                :value="category.categoria"
                :selected="setSelected(category.categoria)"
            >
            {{ category.categoria }}
            </option>
        </select>
    </div>
    <div class="flex flex-col ml-10">
        <label for="plataforma" class="text-white text-center">
            Plataformas
        </label>
        <select 
            name="plataforma" 
            class="text-black mt-5"
            @change="filterGames"
            v-model="selectedPlataform"
            >
            <option 
                v-for="(plataforma, index) in plataformas"
                :key="plataforma.id"
                :value="plataforma.plataforma"
            >
            {{ plataforma.plataforma }}
            </option>
        </select>
    </div>
    </div> 
    <Gallery :title="selectedCategory" :games="games"/> 
</template>