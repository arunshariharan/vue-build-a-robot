<template>
  <div class="right part">
    <div class ='right-arm-name'>
      <h3>{{ selectedRobot.arms.title }} </h3>
    </div>
    <img :src="availableParts.arms[selectedArmsIndex].src" title="left arm"/>
    <button @click="selectPreviousArm()"
      class="prev-selector">&#9668;</button>
    <button @click="selectNextArm()"
      class="next-selector">&#9658;</button>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';

function selectNextArm() {
  this.selectedArmsIndex = this.utils
    .getNextIndex(this.selectedArmsIndex, this.availableParts.arms);
}

function selectPreviousArm() {
  this.selectedArmsIndex = this.utils
    .getPreviousIndex(this.selectedArmsIndex, this.availableParts.arms);
}

export default {
  name: 'RobotRightArms',
  data() {
    return {
      availableParts,
      selectedArmsIndex: 0,
      selectNextArm,
      selectPreviousArm,
      utils,
    };
  },
  computed: {
    selectedRobot() {
      return {
        arms: this.availableParts.arms[this.selectedArmsIndex],
      };
    },
  },
};
</script>

<style>
.right-arm-name {
  position: absolute;
  top: -75px;
  left: 35px;
  width: 100%;
  text-align: center;
}
h3 {
  color: blueviolet;
}
</style>
