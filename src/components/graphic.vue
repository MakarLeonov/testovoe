<script setup>
import Chart from 'chart.js/auto';
import { ref, onMounted } from 'vue';
import { usePostStore } from '../stores/posts'
const ctx = document.getElementById('myChart');

const store = usePostStore()
const labels = [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Chelsey Dietrich',
    'Mrs. Dennis Schulist',
    'Kurtis Weissnat',
    'Nicholas Runolfsdottir V',
    'Glenna Reichert',
    'Clementina DuBuque',
];

onMounted(() => {
    store.getUsers()
})

const data = {
    labels: labels,
    datasets: [{
        label: 'Возраст ',
        backgroundColor: '#fff',
        borderColor: 'red',
        data: store.usersAge

    }]
}

const config = {
    type: 'line',
    data: data,
    options: {}
}

onMounted(() => {
    const myChart = new Chart (
        document.getElementById('myChart'),
        config
    )
})

</script>

<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<style lang="">
    
</style>