<script setup>
import Dropdown from './Menu-items/Dropdown.vue';
</script>

<template>
    <header>
        <nav>
            <div class="navBar">
                  <div class="branding">
                         <a href="../HomePage.vue">
                             <img src="../../assets/img/apologomenu.png" 
                                 width="450" 
                                 height="60"
                                 position="top"/>
                        </a>
                    </div>
                 <div class="menu-items">
                         <div class="menu-item"><a href="#">About Us</a></div>
                         <div class="menu-item"><a href="./Dropdown.vue">Service</a>
                            <Dropdown title="Service" :items="service"/></div>
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
        Service: [
            {
            title: 'Web',
            link: '#'

            },
            {
            title: 'Design',
            link: '#'   
            },
    ]
    }
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