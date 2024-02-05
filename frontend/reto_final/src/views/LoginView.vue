<template>
    <div class="dark">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-[100px] h-[50px]" src="../img/icono-white.svg" alt="logo">
                </router-link>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Iniciar sesión
                        </h1>
                        <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                <input v-model="correo" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre@empresa.com" required="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input v-model="contrasena" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <!-- <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500 dark:text-gray-300">Recuérdame</label>
                                    </div> -->
                                </div>
                                <!-- <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">¿Olvidaste tu contraseña?</a> -->
                            </div>
                            <button type="submit" class="w-full text-white bg-primary hover:bg-resaltar focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">¿No tienes una cuenta aún? <RouterLink to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</RouterLink></p>
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
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


const correo = ref('');
const contrasena = ref('');
const successMessage = ref('');
const errorMessage = ref('');
const $router = useRouter(); // Access Vue Router

const handleSubmit = async () => {
    const data = {
        'username': correo.value,
        'password': contrasena.value
    };

    try {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        const response = await axios.post('token', formData);

        if (response.status === 200 && response.data.usuario && response.data.access_token) {
            // verificar que el usuario no es un admin
            if (!response.data.usuario.admin) {
                console.log('submited');
                // verificar y abrir sesion, dirigir al home
                const usuario = convertToUsuario(response.data);

                // Set user data and authentication status in localStorage
                localStorage.setItem('usuario', JSON.stringify(usuario));
                localStorage.setItem('isLoggedIn', true);

                successMessage.value = 'Login successful!';

                $router.push('/');
            } else {
                // user is admin, cannot login
                errorMessage.value = 'correo o contraseña incorrecto';

            }
        } else {
            //call modal error
            errorMessage.value = 'correo o contraseña incorrecto';
        }



    } catch (error) {
        // hay q mostrar la alerta de habia un error (usuario o password falso)
        errorMessage.value = 'Error logging in';
        console.error('Error registering user:', error);
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