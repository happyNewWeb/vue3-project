<template>
  <div class="chart">
    <Suspense>
      <template #default>
          <Chart />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import Chart from './Chart.vue'
</script>

<style lang="scss" scoped>
.chart {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>