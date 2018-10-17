<template>
  <q-tr>
    <q-td key="stixId">{{ stixId }}</q-td>
    <q-td key="actionDate">{{ actionDate }}</q-td>
    <q-td key="objectType">{{ objectType }}</q-td>
    <q-td key="fieldName">{{ fieldName }}</q-td>
    <q-td key="status">{{ status }}</q-td>
    <q-td key="fieldValue">
      {{ fieldValue }}
      <q-popup-edit v-model="fieldValue" buttons>
        <q-field count>
          <q-input v-model="fieldValue" @saved="valueUpdateHandler"/>
        </q-field>
      </q-popup-edit>
    </q-td>
  </q-tr>
</template>
<script>
import Vue from "vue";

export default {
  props: {
    stixId: { type: Number, required: true },
    actionDate: { type: String, required: true },
    objectType: { type: String, required: true},
    fieldName: { type: String, required: true}, 
    fieldValue: { type: String, required: true},
    status: { type: String, required: true},
    groupAction: { type: String, required: true}
  },
  data: () => {
    return {
      reviewItemData: {}
    }
  },
  methods: {
    valueUpdateHandler: (val, initialValue) => {
      this.reviewItemData.fieldValue = val;
      this.$emit('fieldValueUpdate', this);
    }
  },
  mounted: () => {
    let vm = this;
    console.log(JSON.stringify(vm));

    Vue.nextTick(() => {
      this.reviewItemData = {
        stixId: vm.stixId,
        actionDate: vm.actionDate,
        objectType: vm.objectType,
        fieldName: vm.fieldName, 
        fieldValue: vm.fieldValue,
        status: vm.status,
        groupAction: vm.groupAction
      }
    });
  }
};
</script>
<style>
</style>