<script setup>
</script>

<template>
    <header>
        <nav>
            <div class="branding">
                <img src="../../assets/img/apologomenu.png" 
                width="370" 
                height="50"
                position="top"/>
            </div>
            <ul v-show="!mobile" class="navigation">

            </ul>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'NavBar'
};
</script>


<style scoped>

</style>