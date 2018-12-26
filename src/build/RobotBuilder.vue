<template>
  <div>
    <div class="top-row">
      <RobotHead />
    </div>
    <div class="middle-row">
      <RobotLeftArms />
      <RobotTorsos />
      <RobotRightArms />
    </div>
    <div class="bottom-row">
      <RobotBases />
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import RobotHead from './RobotHead.vue';
import RobotRightArms from './RobotRightArms.vue';
import RobotLeftArms from './RobotLeftArms.vue';
import RobotTorsos from './RobotTorsos.vue';
import RobotBases from './RobotBases.vue';
import utils from '../helper/utils';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      utils,
    };
  },
  methods: {

  },
  components: {
    RobotHead,
    RobotLeftArms,
    RobotRightArms,
    RobotTorsos,
    RobotBases,
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
h3 {
  color: burlywood;
}

</style>
