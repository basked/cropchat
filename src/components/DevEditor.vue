<template>
    <div calss='widget'>
        <dx-text-box></dx-text-box>
        <br>
        <dx-button :text='text' @click="getClick"/>
    </div>
</template>
<script>
    import {DxTextBox, DxButton} from 'devextreme-vue'
    import 'devextreme/dist/css/dx.common.css'
    import 'devextreme/dist/css/dx.darkmoon.css'

    export default {
      name: 'HelloWorld',
      data () {
        return {
          text: 'Hello!'
        }
      },
      methods: {
        getClick () {
          alert('Ya Amigo!')
        }
      },
      components: {
        DxButton,
        DxTextBox
      }
    }
</script>

<style>
    .widget {
        display: inline-block
    }
</style>
