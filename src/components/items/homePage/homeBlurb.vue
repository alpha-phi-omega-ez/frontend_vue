<script setup>
import FooterBottom from "../MultiUse/FooterPage.vue"
</script>


<template>
         <body>
               <h1>Welcome to the Official Website of Alpha Phi Omega, Epsilon Zeta Chapter!</h1>
                   <div class="composite">
                       <img src="../../../assets/img/F2022_Composite_1.png"
                           width="1000" 
                           height="590"
                           position="center"/>
                  </div>
               <h1>Be a Leader, Be a Friend, Be of Service</h1>
           <div class="whatIsAPO">
                    <div class="texT1">
                           <h2>What is Alpha Phi Omega?</h2>
                                <div class="decor">
                                      <img src="../../../assets/img/decor.png"
                                         width="440" 
                                         height="15"
                                         position="center"/>
                                </div>
                            <h3>Alpha Phi Omega is a gender-inclusive national</h3>
                            <h3>service fraternity affiliated and founded on Boy</h3>
                            <h3>Scout Principles. As an organization, we strive</h3>
                            <h3>to better our community, campus, country, and</h3>
                            <h3>beyond through serving others and volunteerism,</h3>
                            <h3>while promoting ideals of leadership, friendship,</h3>
                            <h3>and service amongst members. First established</h3>
                            <h3>on Lafayette's College campus (PA), in 1925,</h3>
                            <h3>membership has since grown to over 525,000</h3>
                            <h3>members and 325 chapters nationwide!</h3>
                    </div>
                    <div class="LFS">
                          <img src="../../../assets/img/LeadershipFriendshipService.png"
                              width="770" 
                              height="600"
                              position="center"/>
                    </div>
                </div>
          </body>
     <FooterBottom>
     </FooterBottom>
</template>


<script>
export default {
  data: function () {
    return {
     
    };
  },
};
</script>


<style scoped lang="css">
    button  {
      font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 25px;
      font-weight: 12px;
      word-spacing: 3px;
      background-color: rgb(11, 54, 196);
      text-decoration-color: aliceblue;
      border-radius:10px;
      color:antiquewhite
    }
    h1 {
        color:#3f3f3f;
        background-color:rgb(255, 197, 8);
        align-items: center;
        justify-items: center;
        text-align: center;
        font-size: 22px;
        display: block;
        text-decoration: none;
        letter-spacing:.1px;
        word-spacing:4px;
        line-height: 4.5rem;
        font-family:Arial, Helvetica, sans-serif;
        font-weight: 545;
    }

    h2 {
        color:#3f3f3f;
        align-items: center;
        justify-items: center;
        text-align:justify;
        font-size: 21px;
        display: block;
        text-decoration: none;
        margin: 0px;
        text-indent: 175px;
        line-height: 3rem;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 700;
}

   h3 {
        color:#3f3f3f;
        align-items: center;
        justify-items: center;
        text-align:justify;
        font-size: 17px;
        display: block;
        text-decoration: none;
        margin: 0px;
        text-indent: 160px;
        line-height: 1.6rem;
        letter-spacing: .3px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   }
  
.composite  {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-bottom: 0px;
  margin-top:0px;
  
  
}
img:hover{
  box-shadow: 0 0 9px 9px rgba(0, 255, 89, 0.5);
  
}
.decor{
  text-indent: 105px;
  margin-bottom: .5rem;
  margin-top: .3rem;
  margin-right: 0px
  
}
.texT1{
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.whatIsAPO{
  display: flex;
  align-items:center;
  margin-top: 2rem
}
</style>