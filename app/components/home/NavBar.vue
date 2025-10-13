<template>
    <navbar>
        <div class="navbar-container">
            <div class="title-styles">
                <img src="../../assets/images/plus_logo_no_background.png" />
            </div>
            <div class="links-navbar-styles">
           
                <nuxt-link to="">Vender</nuxt-link>
                <nuxt-link to="">Comprar</nuxt-link>
                <nuxt-link to="">Alquilar</nuxt-link>
                <nuxt-link to="">Nuestra Empresa</nuxt-link>
                <nuxt-link to="">Conatactos</nuxt-link>
            </div>
        </div>
    </navbar>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'NavBar'
})
</script>

<style scoped>
img{
    height:40px;
    width: auto;
}
.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
}
.title-styles {
    display: flex;
    align-items: center;
}
.title-styles img {
    height: 10%;
    width: auto;
}
.links-navbar-styles {
    display: flex;
    gap: 18px;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 500;
}
</style>