<template>
  <div :class="position" class='part'>
    <img :src="this.part[this.selectedIndex].src"/>
    <button @click="selectPreviousPart()" class="prev-selector">&#9668;</button>
    <button @click="selectNextPart()" class="next-selector">&#9658;</button>
    </div>
</template>

<script>
import availableParts from '../data/parts';
import utils from '../helper/utils';

function selectNextPart() {
  this.selectedIndex = this.utils
    .getNextIndex(this.selectedIndex, this.part);
}

function selectPreviousPart() {
  this.selectedIndex = this.utils
    .getPreviousIndex(this.selectedIndex, this.part);
}

export default {
  name: 'RobotBases',
  props: {
    part: Array,
    position: String,
  },
  data() {
    return {
      availableParts,
      selectedIndex: 0,
      selectNextPart,
      selectPreviousPart,
      utils,
    };
  },
  created() {
    this.$emit('partSelected', this.part[this.selectedIndex]);
  },
  updated() {
    this.$emit('partSelected', this.part[this.selectedIndex]);
  },
};
</script>

<style>
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.head {
  border-bottom: none;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
