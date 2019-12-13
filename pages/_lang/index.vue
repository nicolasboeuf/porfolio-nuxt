<template>

  <div>

    <section id='app'>

      <div id="content">

        <headerComponent></headerComponent>
        <h1> {{$t('app.title')}} </h1>

        <div v-for="p in projects">
          {{p}}
        </div>

      </div>

     </section>
     
  </div>


</template>


<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import _ from "underscore"
import headerComponent from '~/components/headerComponent.vue'
import { slugify } from '~/utils/slugify'

export default {

  name: "MainIndex",

  components: {
    'headerComponent':headerComponent,
  },

  middleware : [
  ],

  props: [
  ],

  beforeMount : function(){
    var self = this
    let langtest = this.$nuxt.$route.params.lang
  },

  mounted:function(){

    console.log("app mounted")

  },
  
  data() {
    return {
      slugify:slugify
    }
  },

  computed: {

    ...mapState({
      log : state => state.log, 

      locale : state => state.locale,
      locales : state => state.locales,
      defaultLocale : state => state.defaultLocale,

      projects : state => state.data,

    }),

    ...mapGetters({

    }),
  },

  methods: {

  },

}

</script>

<style lang="scss">

  @import "~assets/scss/_variables.scss";

  #app{
    position: absolute;
    width: 100%;
    height: auto;
    h1{
      color:blue;
    }
  }
  
  @media screen and (min-width: 768px){

    #app{
    }

  }

</style>