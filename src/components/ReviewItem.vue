<template>
  <q-tr>
    <q-td key="stixId">{{ stixId }}</q-td>
    <q-td key="actionDate">{{ actionDate }}</q-td>
    <q-td key="objectType">{{ objectType }}</q-td>
    <q-td key="fieldName">{{ fieldName }}</q-td>
    <q-td key="status">{{ status }}</q-td>
    <q-td key="fieldValue">
      {{ fieldValue }}
      <q-popup-edit v-model="fieldValue" @save="valueUpdateHandler" buttons>
        <q-field count>
          <q-input v-model="fieldValue"/>
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
      let reviewItemData = {
        stixId: vm.stixId,
        actionDate: vm.actionDate,
        objectType: vm.objectType,
        fieldName: vm.fieldName, 
        fieldValue: vm.fieldValue,
        status: vm.status,
        groupAction: vm.groupAction
      }
      reviewItemData.fieldValue = val;
      this.$emit('fieldValueUpdate', reviewItemData);
    }
  }
};
</script>
<style>
</style>