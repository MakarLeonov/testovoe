<template>
    <div class="item">
        <div class="id">
            <p>{{ props.user.id }}</p>
        </div>

        <div class="name">
            <p>{{ props.user.name }}</p>
        </div>

        <div class="email">
            <p>{{ props.user.email }}</p>
        </div>

        <div class="city">
            <p>
              {{ props.user.address.city }}
            </p>
        </div>

        <div class="age">
            <p>
              {{ props.age }}
            </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['user', 'age'])

</script>
<style lang="css" scoped>

.item {
  display: flex;
}

.item div {
  border: 1px solid #e2e2e2;
  padding: 10px;
}
.id {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
}

.name, .email {
  width: 290px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
}

.city {
  width: 260px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  color: rgb(34, 34, 34);
}

.age {
  width: 161px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  color: rgb(34, 34, 34);
}
    
</style>