<template>

  <div>

    <section id='app'>

        <headerComponent></headerComponent>

        <section class="main" id="projects">

          <div class="content_wrapper">
            
            <h1>{{$t('app.projets')}}</h1>

            <div id="tiles_wrapper">

              <a :href="projet.url" target="_blank" class="project_tile" v-for="projet in projects">
                  <div class="thumb" :data-id="projet.id"></div>
                  <div class="projet_label">{{projet.label}}</div>
                  <div class="projet_client">{{projet.client}}</div>
              </a>

            </div>

          </div>
            
        </section>

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
    .main{
      width: 100%;
      position: relative;
      display: block;
      .content_wrapper{
        max-width: 1024px;
        margin:0 auto;
        height: 100%;
        position: relative;
        display: block;
      }
      h1{
        font-family: "rubikregular";
        font-size: 60px;
        color:$deepBlue;
        position: relative;
        margin-left: 75px;
      }
      &#projects{
        background-color: $grey;
        padding-top: 50px;
        padding-bottom: 150px;
        .content_wrapper{
          #tiles_wrapper{
            padding-top: 60px;
            display: flex;
            flex-wrap:wrap;
            padding-left: 20px;
            padding-right: 20px;
            justify-content:space-between;
            .project_tile{
              width: 320px;
              height:227px;
              background-color: white;
              border-radius: 10px;
              margin-bottom: 20px;
              position: relative;
              padding-top: 20px;
              text-decoration: none;
              -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.05);
              -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.05);
              box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.05);
              @include transition(box-shadow(0.2s ease-in-out));
              .thumb{
                width: 140px;
                height: 140px;
                border-radius: 50%;
                position: absolute;
                left:50%;
                @include transform(translate(-50%,0));
                @include transition(transform(0.2s ease-in-out));
                background-size: cover;
                &[data-id="1"]{
                  background-image: url("~assets/img/projets/1.png");  
                }
                &[data-id="2"]{
                  background-image: url("~assets/img/projets/2.png");  
                }
                &[data-id="3"]{
                  background-image: url("~assets/img/projets/3.png");  
                }
                &[data-id="4"]{
                  background-image: url("~assets/img/projets/4.png");  
                }
                &[data-id="5"]{
                  background-image: url("~assets/img/projets/5.png");  
                }
                &[data-id="6"]{
                  background-image: url("~assets/img/projets/6.png");  
                }
                &[data-id="7"]{
                  background-image: url("~assets/img/projets/7.png");  
                }
                &[data-id="8"]{
                  background-image: url("~assets/img/projets/8.png");  
                }
                &[data-id="9"]{
                  background-image: url("~assets/img/projets/9.png");  
                }
                &[data-id="10"]{
                  background-image: url("~assets/img/projets/10.png");  
                }
                &[data-id="11"]{
                  background-image: url("~assets/img/projets/11.png");  
                }
                &[data-id="12"]{
                  background-image: url("~assets/img/projets/12.png");  
                }
                &[data-id="13"]{
                  background-image: url("~assets/img/projets/13.png");  
                }
                &[data-id="14"]{
                  background-image: url("~assets/img/projets/14.png");  
                }
                &[data-id="15"]{
                  background-image: url("~assets/img/projets/15.png");  
                }
              }
              .projet_label{
                text-align: center;
                font-family: "rubikregular";
                font-size: 16px;
                color:$deepBlue;
                margin-top: 150px;
              }
              .projet_client{
                text-align: center;
                text-align: center;
                font-family: "rubiklight";
                font-size: 16px;
                color:$blue;
              }
              &:hover{
                -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
                .thumb{
                  @include transform(translate(-50%,0) scale(1.05));
                }
              }
            }
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 1023px){

    #app{
      .main{
        .content_wrapper{
          max-width: 768px;
        }
      }
    }

  }

  @media screen and (max-width: 767px){

    #app{
      .main{
        .content_wrapper{
          max-width: 375px;
        }
        h1{
          font-size: 35px;
          color:$deepBlue;
          position: relative;
          margin-left:0;
          text-align: center;
        }
        &#projects{
          .content_wrapper{
            #tiles_wrapper{
              justify-content:center;
              .project_tile{
                  &:hover{
                  -webkit-box-shadow: none;
                  -moz-box-shadow: none;
                  box-shadow: none;
                  .thumb{
                    @include transform(translate(-50%,0) scale(1));
                  }
                }
              }
            }
          }
        }
      }
    }

  }

</style>