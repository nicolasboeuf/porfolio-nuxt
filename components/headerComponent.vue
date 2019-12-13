<template>

	<div id="headerComponent">
    
    <div id="header_content_wrapper">

      <img id='portrait' src="~assets/img/portrait.png"/>

      <div id="nav">
        
        <div class="nav_btn">{{$t('app.projets')}}</div>
        <div class="nav_btn">{{$t('app.parcours')}}</div>
        <div class="nav_btn">{{$t('app.contact')}}</div>

      </div>

      <div id="lang">
        
        <nuxt-link :to=" '/fr'">
          <div class="lang_btn" data-lang="fr" :class="(currentLocale==='fr')?'selected':''">Fr</div>
        </nuxt-link>

        <nuxt-link :to=" '/en'">
          <div class="lang_btn" data-lang="en" :class="(currentLocale==='en')?'selected':''">En</div>
        </nuxt-link>

      </div>

    </div>

  </div>


</template>


<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {

  name: "headerComponent",

  components: {
  },

  props: [
  ],

  data: () => ({

  }),


  computed: {

    ...mapState({
      log : state => state.log, 
      locales : state => state.locales,
      localeCode : state => state.locale,

      myData : state => state.data.data,
    }),

    ...mapGetters({

      currentLocale: 'getCurrentLocale'
      
    }),

  },

  methods: {

  },


}

</script>

<style lang="scss">

  @import "~assets/scss/_variables.scss";
  @import "~assets/scss/_browsers.scss";

  #headerComponent{
  	position: relative;
  	width: 100%;
  	height: 100px;
    background-color: $blue;
    #header_content_wrapper{
      width: 100%;
      max-width: 1024px;
      position: relative;
      margin:0 auto;
      height: 100%;
      #portrait{
        width: 90px;
        position: relative;
        left:0px;
        display: inline-block;
        margin:0;
      }
      #nav{
        position: absolute;
        left:135px;
        height: 100%;
        top:0;
        .nav_btn{
          position: relative;
          display: inline-block;
          font-family: "rubikregular";
          font-size: 17px;
          color:white;
          margin-right: 30px;
          top:50%;
          @include transform(translate(0,-50%));
          cursor: pointer;
          &:after{
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: $orange;
            position: absolute;
            right:-15px;
            top:50%;
            @include transform(translate(0,-50%));
          }
          &:last-child{
            &:after{
              display: none;
            }
          }
          &:hover{
            &:before{
              content: "";
              width: 100%;
              height: 2px;
              background-color: $orange;
              position: absolute;
              bottom: -5px;
            }
          }
        }
      }
      #lang{
        position: absolute;
        right:0px;
        height: 100%;
        top:0;
        .lang_btn{
          position: relative;
          display: inline-block;
          font-family: "rubikregular";
          font-size: 17px;
          color:white;
          margin-right: 20px;
          top:50%;
          @include transform(translate(0,-50%));
          cursor: pointer;
          &:after{
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: $orange;
            position: absolute;
            right:-15px;
            top:50%;
            @include transform(translate(0,-50%));
          }
          &[data-lang="en"]{
            &:after{
              display: none;
            }
          }
          &:hover{
            &:before{
              content: "";
              width: 100%;
              height: 2px;
              background-color: $orange;
              position: absolute;
              bottom: -5px;
            }
          }
          &.selected{
            &:before{
              content: "";
              width: 100%;
              height: 2px;
              background-color: $orange;
              position: absolute;
              bottom: -5px;
            }
          }
        }
      }
    }
    
  }
  
  @media screen and (max-width: 1023px){

  	#headerComponent{
      #header_content_wrapper{
        max-width: 768px;
      }
    }

  }

  @media screen and (max-width: 767px){

    #headerComponent{
      #header_content_wrapper{
        #portrait{
          left:50%;
          @include transform(translate(-50%,0));
        }
        #nav{
          display: none;
        }

      }
    }

  }

</style>

