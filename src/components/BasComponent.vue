<template>
<div>
  <h1>{{msg}}</h1>
  <input type="button" value="Change message" @click="getRouterName" >
 </div>

</template>
<script>
export default {
  name: 'bascomponent',
  data () {
    return {
      msg: 'basket'
    }
  },
  methods: {
    getRouterName () {
      if (this.msg === 'basket') {
        this.msg = 'teksab'
      } else {
        this.msg = 'basket'
      }
    }
  }
}
</script>


