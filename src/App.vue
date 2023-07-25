<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import item from './components/item.vue';
import graphic from './components/graphic.vue';
import { usePostStore } from './stores/posts'

const store = usePostStore()

onMounted(() => {
  store.getUsers()
})

</script>

<template>
  <div class="wrapper">
    <div class="main">
      

      <graphic />

      <div class="table">
        <div class="header">

          <div class="id">
            <p>ID</p>
            <!-- <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
              </svg>
            </div> -->
          </div>

          <div class="name">
            <p>Имя пользователя</p>
            <!-- <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
              </svg>
            </div> -->
          </div>

          <div class="email">
            <p>Эл. почта</p>
            <!-- <div class="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <line x1="0.353553" y1="0.646447" x2="6.18011" y2="6.47301" stroke="#FCFCFC"/>
                <line x1="5.64645" y1="6.30331" x2="11.3033" y2="0.646453" stroke="white"/>
              </svg>
            </div> -->
          </div>

          <div class="city">
            <p>Город</p>
          </div>

          <div class="age">
            <p>Возраст</p>
          </div>

        </div>

        <div class="body">

          <item v-for="(user, index) in store.users" :key="user.id" :user="user" :age="store.usersAge[index]"/> 

        </div>
      </div>

    </div>
  </div>
</template>

<style lang="css">
body {
  background: #5A5C66;
}
.wrapper {
  display: flex;
  justify-content: center;
}
.main {
  width: 1232px;
  min-height: 820px;
  background: #FFF;
  /* background: #5A5C66; */
  box-shadow: 0px 4px 27px 0px rgba(230, 231, 234, 0.78);
  padding: 20px 77px; 
  margin-top: 100px;
  margin-bottom: 100px;
}

.search {
  width: 631px;
  height: 52px;
  background: #5A5C66;
  border: 0px solid #fff;
  padding: 15px 25px;

  color: #eaeef5;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.687%
}

::-webkit-input-placeholder {color:#B2B7BF;}
::-moz-placeholder          {color:#B2B7BF;}/* Firefox 19+ */
:-moz-placeholder           {color:#B2B7BF;}/* Firefox 18- */
:-ms-input-placeholder      {color:#B2B7BF;}

.search_button{
  position:relative;
  right: 40px;
  top: 5px;
  cursor: pointer;
}

.table {
  width: 1077px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
}

.header {
  width: 1071px;
  height: 54px;
  background: #474955;
  box-shadow: 0px 4px 27px 0px rgba(230, 231, 234, 0.78);
  display: flex;
}

.body {
  width: 1077px;
  display: flex;
  flex-direction: column;
}
.id {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.name, .email, .city {
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.age {
  width: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.header div p {
  color: #FFF;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 137.687%;
  margin-right: 25px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

}

.pagination p {
  color: #474955;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 137.687%;
  cursor: pointer;
  transition: all .2s ease-in;
}

.pagination p:hover {
  color: orange;
  transition: all .1s ease-in;
}
.pages {
  display: flex;
  gap: 10px;
}
.page {
  color: #474955;
  font-family: Roboto;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: 137.687%;
  cursor: pointer;
}

.page:hover {
  color: orange;
  font-family: Roboto;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: 137.687%;
}

.active_page {
  color: #7EBC3C;
  font-family: Roboto;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  line-height: 137.687%; 
}




</style>