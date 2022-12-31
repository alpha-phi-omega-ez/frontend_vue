<script setup>
</script>

<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div class="branding">
                <img src="../assets/img/apologomemu.png" alt=""/>
            </div>
            <ul v-show="!mobile" class="navigation">

            </ul>
        </nav>
    </header>
</template>


<script>
export default {

};
</script>


<style lang="scss" scoped>
</style>