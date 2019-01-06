<template>
  <div class ='selected-parts-details'>
    <table class ='parts-table'>
      <thead>
        <tr>
          <th> Part name </th>
          <th> Part Cost </th>
        </tr>
      </thead>
      <tbody>
        <tr class='parts-data' v-for="(part, partIdentifier, index) in currentParts" :key="index">
          <td > {{part.title}} </td>
          <td class ='sale-td' v-if='part.onSale === true'> {{part.cost}}  (Sale!)</td>
          <td v-else> {{part.cost}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PartsDetails',
  props: {
    currentParts: Object,
  },
};
</script>

<style>
.sale-td {
  color: red;
}
.selected-parts-details {
  padding: 25px;
  bottom: -20px;
  position: relative;
  justify-content: right;
  border:  1px solid black;
}

th, td {
  padding: 0 15px 0 45px;
  word-wrap: break-word;
  position: sticky;
}
tr {
  padding: 100px 15px 0 45px;
  line-height: 25px;
}
</style>
