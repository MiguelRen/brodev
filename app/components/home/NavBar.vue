<template>
    <navbar >
        <div class="title-styles">
            <h1>PlusBienes</h1>
        </div>
        <div class="links-navbar-styles">
            <nuxt-link to="">Premium</nuxt-link>
            <nuxt-link to="">Destacados</nuxt-link>
            <nuxt-link to="">Comprar</nuxt-link>
            <nuxt-link to="">Vender</nuxt-link>
            <nuxt-link to="">Propiedades</nuxt-link>
            <nuxt-link to="">Quíenes Somos?</nuxt-link>
            <nuxt-link to="">Conatactos</nuxt-link>
        
            
        </div>
    </navbar>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'NavBar'
})
</script>

<style scoped>
    .title-styles{
        display: flex;
        justify-content: center;
        /* align-items : center */
    }
    .links-navbar-styles{
        display:flex;
        justify-content: space-between;
    }
</style>