<script setup>
</script>

<template>
    <header>
        <nav>
            <div class="navBar">
                  <div class="branding">
                     <img src="../../assets/img/apologomenu.png" 
                        width="370" 
                        height="50"
                        position="top"/>
                    </div>
                 <div class="menu-items">
                         <div class="menu-item"><a href="#">About Us</a></div>
                         <div class="menu-item"><a href="#">Service</a></div>
                         <div class="menu-item"><a href="#">Fellowship</a></div>
                         <div class="menu-item"><a href="#">Information</a></div>
                         <div class="menu-item"><a href="#">Login</a></div>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'NavBar'
};
</script>


<style scoped>
nav .menu-items {
    color:blue;
    position:relative;
    text-align:center;
    border-bottom: 3px solid transparent;
    display:flex;
    transition:0.4s;
}
nav.menu-items a {
    color:cornflowerblue;
    text-decoration:none;
}
nav .menu-item  {
    padding: 15px 40px;
}
nav .navBar  {
    display:flex;
}
</style>