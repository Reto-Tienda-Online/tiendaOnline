<template>
    <div>
        <NavBar />
        <Carousel />
        <Categories />
        <Gallery />
        <ReviewPanel />
        <Footer />
        <TrustPanel />
    </div>
</template>

<script setup>
//Imprescindible "script setup"
import NavBar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import Footer from '../components/Footer.vue'
import ReviewPanel from '../components/ReviewPanel.vue'
import Gallery from '../components/Gallery.vue'
import Categories from '../components/Categories.vue'
import TrustPanel from '../components/TrustPanel.vue'
</script>

