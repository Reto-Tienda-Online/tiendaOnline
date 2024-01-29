<template>
    <div class="dark">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <!-- <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"> -->
                    <!-- Aqui mi logo -->
                    Game Groover
                </router-link>
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input v-model="correo" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" required="">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="contrasena" type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#"
                                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <RouterLink to="/register"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up
                                </RouterLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex'; // Import useStore from Vuex
import { useRouter } from 'vue-router'; // Import useRouter from Vue Router


const correo = ref('');
const contrasena = ref('');
const $store = useStore(); // Access Vuex store
const $router = useRouter(); // Access Vue Router

const handleSubmit = async () => {
    const data = {
        // 'username': correo.value,
        // 'password': contrasena.value
        'username': correo.value,
        'password': contrasena.value
    };

    try {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        const response = await axios.post('token', formData);
            
        if (response.status === 200 && response.data.usuario && response.data.access_token) {
            console.log('submited');
            // verificar y abrir sesion, dirigir al home
            const usuario = convertToUsuario(response.data);
            // console.log(usuario);
            $store.dispatch('login', usuario);
            $router.push('/');
        }


        
    } catch (error) {
        // hay q mostrar la alerta de habia un error (usuario o password falso)
        console.error('Error registering user:', error);
        // console.error('Error logging in');
    }

};

const convertToUsuario = (data) => {
    return {
        id: data.usuario.id,
        nombre: data.usuario.nombre,
        apellido: data.usuario.apellido,
        correo: data.usuario.correo,
        admin: data.usuario.admin,
        token: data.access_token
    };
};
</script>