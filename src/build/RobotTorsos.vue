<template>
<div class="middle-row">
    <div class ='robot-name'>
      <h3>{{ selectedRobot.torso.title }} </h3>
    </div>
  <div class="center part">
    <img :src="availableParts.torsos[selectedTorsosIndex].src" title="left arm"/>
    <button @click="selectPreviousTorso()"
      class="prev-selector">&#9668;</button>
    <button @click="selectNextTorso()"
      class="next-selector">&#9658;</button>
  </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';

function selectNextTorso() {
  this.selectedTorsosIndex = this.utils
    .getNextIndex(this.selectedTorsosIndex, this.availableParts.torsos);
}

function selectPreviousTorso() {
  this.selectedTorsoIndex = this.utils
    .getPreviousIndex(this.selectedTorsosIndex, this.availableParts.torsos);
}

export default {
  name: 'RobotTorsos',
  data() {
    return {
      availableParts,
      selectedTorsosIndex: 0,
      selectNextTorso,
      selectPreviousTorso,
      utils,
    };
  },
  computed: {
    selectedRobot() {
      return {
        torso: this.availableParts.torsos[this.selectedTorsosIndex],
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
h3 {
  color: blueviolet;
}
</style>
