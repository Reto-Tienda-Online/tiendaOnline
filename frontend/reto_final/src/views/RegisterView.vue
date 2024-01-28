<template>
    <div class="dark">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <router-link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Game Groover
                </router-link>
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up for a new account
                        </h1>
                        <form @submit.prevent="handleSignup" class="space-y-4 md:space-y-6" action="#">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label for="firstName"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                        Name</label>
                                    <input v-model="nombre" type="text" name="firstName" id="firstName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John" required>
                                </div>
                                <div>
                                    <label for="lastName"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                        Name</label>
                                    <input v-model="apellido" type="text" name="lastName" id="lastName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Doe" required>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input v-model="correo" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" required>
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input v-model="contrasena" type="password" name="password" id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required>
                            </div>
                            <div>
                                <label for="confirmPassword"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    Password</label>
                                <input v-model="contrasena_confirm" type="password" name="confirmPassword" id="confirmPassword"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-resaltar-600 focus:border-resaltar-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required>
                            </div>
                            <!-- Password equality validation -->
                            <div v-if="contrasena_confirm !== contrasena" class="text-red-500 text-sm">
                                Passwords do not match.
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-resaltar-600 hover:bg-resaltar-700 focus:ring-4 focus:outline-none focus:ring-resaltar-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-resaltar-600 dark:hover:bg-resaltar-700 dark:focus:ring-resaltar-800"
                                :disabled="contrasena_confirm !== contrasena">Sign
                                up</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <RouterLink to="/login"
                                    class="font-medium text-resaltar-600 hover:underline dark:text-resaltar-500">Sign in
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
import axios from 'axios';
import { ref } from 'vue'

const nombre = ref('');
const apellido = ref('');
const correo = ref('');
const contrasena = ref('');
const contrasena_confirm = ref('');

const handleSignup = async () => {
    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        contrasena: contrasena.value,
        contrasena_confirm: contrasena_confirm.value
    };

    console.log('created');
    console.log(data);

    try {
        const response = await axios.post('register', data);
        console.log(response);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};
</script>