<template>
    <div>
        <NavBarCesta activeElement="Cesta"/>
        <CestaMain />
    </div>
</template>

<script setup>
//Imprescindible "script setup"
import NavBarCesta from '@components/NavBarCesta.vue'
import CestaMain from '@components/CestaMain.vue'
</script>

