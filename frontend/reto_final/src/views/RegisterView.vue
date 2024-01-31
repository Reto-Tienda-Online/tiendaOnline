<template>
    <div class="dark">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Game Groover
                </router-link>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registrarse
                        </h1>
                        <form @submit.prevent="handleSignup" class="space-y-4 md:space-y-6" action="#">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input v-model="nombre" type="text" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                                </div>
                                <div>
                                    <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                    <input v-model="apellido" type="text" name="lastName" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                <input v-model="correo" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@empresa.com" required>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input v-model="contrasena" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div>
                                <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                                <input v-model="contrasena_confirm" type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <!-- Validación de igualdad de contraseñas -->
                            <div v-if="contrasena_confirm !== contrasena" class="text-red-500 text-sm">
                                Las contraseñas no coinciden.
                            </div>
                            <button type="submit" class="w-full text-white bg-primary hover:bg-resaltar focus:ring-4 focus:outline-none focus:ring-resaltar-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-resaltar-600 dark:hover:bg-resaltar-700 dark:focus:ring-resaltar-800" :disabled="contrasena_confirm !== contrasena">Registrarse</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">¿Ya tienes una cuenta? <RouterLink to="/login" class="font-medium text-resaltar-600 hover:underline dark:text-resaltar-500">Inicia sesión</RouterLink></p>
                        </form>
                        <div v-if="successMessage" class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <!-- Contenido de la alerta de éxito -->
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="sr-only">Info</span>
                            <span class="font-medium">{{ successMessage }}</span>
                        </div>
                        <div v-if="errorMessage" class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span class="font-medium">{{ errorMessage }}</span> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter from Vue Router


const nombre = ref('');
const apellido = ref('');
const correo = ref('');
const contrasena = ref('');
const contrasena_confirm = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const $router = useRouter(); // Access Vue Router


const handleSignup = async () => {
    const data = {
        'nombre': nombre.value,
        'apellido': apellido.value,
        'correo': correo.value,
        'contrasena': contrasena.value
    };

    console.log('created');
    console.log(data);

    try {
        // const formData = new FormData();
        // formData.append('nombre', data.nombre);
        // formData.append('apellido', data.apellido);
        // formData.append('correo', data.correo);
        // formData.append('contrasena', data.contrasena);

        // const response = await axios.post('register', formData);
        const response = await axios.post('register', data);
        console.log(response);
        // verify the response code, verify the boolean created if exists
        if (response.status === 200) {
            // mostrar alerta (registrado con exito)
            successMessage.value = 'Registrado con exitó !';

            // pasar al login
            // Delay redirection to login page by 2 seconds
            setTimeout(() => {
                $router.push('/login'); //redirect to the login page after 2 seconds
            }, 2000);
        } else {
            errorMessage.value = 'Usuario ya existe, usa otro correo';
        }

    } catch (error) {
        errorMessage.value = 'Usuario ya existe, usa otro correo';
        console.error('Error registering user:', error);
    }
};
</script>