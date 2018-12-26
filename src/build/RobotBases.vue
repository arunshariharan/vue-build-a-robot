<template>
  <div class="bottom part">
    <div class ='base-name'>
      <h3>{{ selectedRobot.base.title }} </h3>
    </div>
    <img :src="availableParts.bases[selectedBasesIndex].src" title="left arm"/>
    <button @click="selectPreviousBase()"
      class="prev-selector">&#9668;</button>
    <button @click="selectNextBase()"
      class="next-selector">&#9658;</button>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';

function selectNextBase() {
  this.selectedBasesIndex = this.utils
    .getNextIndex(this.selectedBasesIndex, this.availableParts.bases);
}

function selectPreviousBase() {
  this.selectedBasesIndex = this.utils
    .getPreviousIndex(this.selectedBasesIndex, this.availableParts.bases);
}

export default {
  name: 'RobotBases',
  data() {
    return {
      availableParts,
      selectedBasesIndex: 0,
      selectNextBase,
      selectPreviousBase,
      utils,
    };
  },
  computed: {
    selectedRobot() {
      return {
        base: this.availableParts.bases[this.selectedBasesIndex],
      };
    },
  },
};
</script>

<style>
.base-name {
  position: absolute;
  top: 150px;
  width: 100%;
  text-align: center;
}
h3 {
  color: blue;
}
</style>
