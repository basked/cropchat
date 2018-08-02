<template>
  <div>
    <dx-form
      :form-data="formData"
      :items="items"
    />
    <dx-text-box :value='textbox'></dx-text-box>
    <dx-button :text='text' @click="getClick"/>
    <dx-form></dx-form>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */

  import {DxTextBox, DxButton, DxForm} from 'devextreme-vue'
  import 'devextreme/dist/css/dx.common.css'
  import 'devextreme/dist/css/dx.android5.light.css'
  import {persons, employee} from './data/data'

  export default {
    name: 'HelloWorld',
    data: function () {
      return {
        formData: employee,

        text: 'OK',

        items: [{
          dataField: 'name'
        },
        {
          dataField: 'surname',
          editorType: 'dxAutocomplete',
          editorOptions: {
            items: persons,
            value: ''
          }
        },
        {
          dataField: 'age',
          editorType: 'dxSelectBox',
          editorOptions: {
            items: persons,
            value: ''
          },
          validationRules: [{
            type: 'required',
            message: 'Position is required'
          }]
        }],
        textbox: ''
      }
    },
    methods: {
      getClick () {
        this.text = 'Cancel'
        this.textbox = 'Text Box'
        alert('Ya Amigo!')
      }
    },
    components: {
      DxForm,
      DxButton,
      DxTextBox
    }
  }
</script>
