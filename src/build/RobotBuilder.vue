<template>
  <div>
    <div class="top-row">
      <RobotPartsSelector
        :part='availableParts.heads' position='top'
        @partSelected = 'part => selectedParts.head = part'
      />
    </div>
    <div class="middle-row">
      <RobotPartsSelector
        :part='availableParts.arms' position='left'
        @partSelected = 'part => selectedParts.leftArm = part'
      />
      <RobotPartsSelector
        :part='availableParts.torsos' position='middle'
        @partSelected = 'part => selectedParts.torso = part'
      />
      <RobotPartsSelector
        :part='availableParts.arms' position='right'
        @partSelected = 'part => selectedParts.rightArm = part'
      />
    </div>
    <div class="bottom-row">
      <RobotPartsSelector
        :part='availableParts.bases' position='bottom'
        @partSelected = 'part => selectedParts.base = part'
      />
    </div>
    <div class='parts-selected-details'>
      <PartsDetails :currentParts='selectedParts'/>
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';
import RobotPartsSelector from './RobotPartsSelector.vue';
import PartsDetails from './PartsDetails.vue';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      utils,
      selectedParts: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  components: {
    RobotPartsSelector,
    PartsDetails,
  },
};
</script>

<style>
.title {
  position: absolute;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
h3 {
  color: burlywood;
}

</style>
