<template>
  <div class="top part">
    <div class ='robot-name'>
      <h3>{{ selectedRobot.head.title }} </h3>
      <span v-if="selectedRobot.head.onSale" class = 'sale-span-head'>On Sale!</span>
    </div>
    <img :src="selectedRobot.head.src" title="head"/>
    <button @click="selectPreviousHead()"
      class="prev-selector">&#9668;</button>
    <button @click="selectNextHead()"
      class="next-selector">&#9658;</button>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';

function selectNextHead() {
  this.selectedHeadIndex = this.utils
    .getNextIndex(this.selectedHeadIndex, this.availableParts.heads);
}

function selectPreviousHead() {
  this.selectedHeadIndex = this.utils
    .getPreviousIndex(this.selectedHeadIndex, this.availableParts.heads);
}

function getName() {
  return this.selectedRobot.head.title;
}

export default {
  name: 'RobotHead',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectNextHead,
      selectPreviousHead,
      utils,
      getName,
    };
  },
  computed: {
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
      };
    },
  },
};
</script>

<style>
.robot-name {
  position: absolute;
  top: -50px;
  width: 100%;
  text-align: center;
}

.sale-span-head {
  color: red;
  top: 20px;
  left: 100px;
  position: absolute;
  width: 100%
}
</style>
