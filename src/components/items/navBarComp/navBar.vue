<script setup>
import Dropdown from './Menu-items/Dropdown.vue';
</script>

<template>
    <header>
        <nav>
            <div class="navBar">
                  <div class="branding">
                         <a href="../HomePage.vue">
                             <img src="../../../assets/img/apologomenu.png" 
                                 width="350" 
                                 height="45"
                                 position="top"/>
                        </a>
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
    name: 'NavBar',
    components: {
        Dropdown
    },
    data(){
        
    }
};
</script>


<style scoped>
nav .menu-items {
    color:blue;
    position:relative;
    text-align:center;
    border-bottom: 0px solid transparent;
    display:flex;
    transition:0.4s;
    font-size: 16px;
}
nav.menu-items a {
    color:cornflowerblue;
    text-decoration:none;
}
nav .menu-item  {
    padding: 15px 45px;
}
nav .navBar  {
    display:flex;
}
header{
    position:fixed;
    left:0;
    top:0;
    z-index:200;
    height:55px
}
</style>

