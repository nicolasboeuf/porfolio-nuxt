<template>

  <div>

    <section id='app'>

        <headerComponent></headerComponent>

        <section class="main" id="intro">

          <div class="content_wrapper">

            <h1>{{$t('app.presentation')}}</h1>

            <p>{{$t('app.datajournaliste')}}</p>

            <p>{{$t('app.realise')}}</p>

            <p>{{$t('app.enseigne')}}</p>

          </div>

        </section>


        <section class="main" id="projects">

          <div class="content_wrapper">
            
            <h1>{{$t('app.projets')}}</h1>

            <h2>{{$t('app.freelance')}}</h2>

            <div class="tiles_wrapper">

              <a :href="projet.url" target="_blank" class="project_tile" v-for="projet in  projects" v-if="projet.contexte == 'Free'">
                  <div class="thumb" :data-id="projet.id"></div>
                  <div class="projet_label">{{projet.label}}</div>
                  <div class="projet_client">{{projet.client}}</div>
              </a>

            </div>

            <h2>{{$t('app.wedodata')}}</h2>

            <div class="tiles_wrapper">

              <a :href="projet.url" target="_blank" class="project_tile" v-for="projet in  projects" v-if="projet.contexte == 'WDD'">
                  <div class="thumb" :data-id="projet.id"></div>
                  <div class="projet_label">{{projet.label}}</div>
                  <div class="projet_client">{{projet.client}}</div>
              </a>

            </div>

          </div>
            
        </section>

        <section class="main" id="contact">

          <div class="content_wrapper">
            
            <h1>{{$t('app.contact')}}</h1>

            <div class="contact_box">
              <img class="contact_picto" src="~/assets/img/picto-mail.svg"/>
              <div class="contact_text" data-text="mail" :class="(feedbackCopy)?'feedback':''" @click="copyMail()">boeufn@gmail.com</div>
            </div>

            <div class="contact_box">
              <img class="contact_picto" src="~/assets/img/picto-phone.svg"/>
              <a href="tel:0033608111730">
                <div class="contact_text">06 08 11 17 30</div>
              </a>
            </div>

            <div class="contact_box">
              <img class="contact_picto" src="~/assets/img/picto-twitter.svg"/>
              <a href="https://twitter.com/nicolas_boeuf" target="_blank" nofollow>
                <div class="contact_text">@nicolas_boeuf</div>
              </a>
            </div>

            <div class="contact_box">
              <img class="contact_picto" src="~/assets/img/picto-github.svg"/>
              <a href="https://github.com/nicolasboeuf/porfolio-nuxt" target="_blank" nofollow>
                <div class="contact_text">{{$t('app.reutiliser')}}</div>
              </a>
            </div>

            <div class="contact_box" v-if="locale==='fr'">
              <img class="contact_picto" data-picto="dl" src="~/assets/img/picto-dl.svg"/>
              <a href="downloads/cv-2022.pdf" download>
                <div class="contact_text">{{$t('app.telecharger')}}</div>
              </a>
            </div>

            <div class="contact_box" v-if="locale==='en'">
              <img class="contact_picto" data-picto="dl" src="~/assets/img/picto-dl.svg"/>
              <a href="../downloads/cv-2022-en.pdf" download>
                <div class="contact_text">{{$t('app.telecharger')}}</div>
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
      slugify:slugify,
      feedbackCopy:false
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

    copyMail(){
      var self = this
      const el = document.createElement('textarea');
      el.value = "boeufn@gmail.com"
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.feedbackCopy = true
      setTimeout(function(){
        self.feedbackCopy = false
      },2000)
    }

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
        h1{
          font-family: "rubikregular";
          font-size: 60px;
          color:$deepBlue;
          position: relative;
          margin-left: 75px;
        }
        h2{
          font-family: "rubiklight";
          font-size: 20px;
          color:$blue;
          position: relative;
          margin-left: 20px;
          margin-top: 40px;
        }
      }
      &#intro{
        background-color: $grey;
        padding-top: 50px;
        padding-bottom: 50px;
        p{
          font-family: "rubikregular";
          font-size: 20px;
          color:$deepBlue;
          margin-left: 75px;
          margin-top: 40px;
          display: block;
          span{
            color:$deepBlue!important;
            font-family: "rubikmedium";
          }
        }
      }
      &#projects{
        background-color: $grey;
        padding-top: 50px;
        padding-bottom: 150px;
        .content_wrapper{
          .tiles_wrapper{
            padding-top: 20px;
            display: flex;
            flex-wrap:wrap;
            padding-left: 20px;
            padding-right: 20px;
            justify-content:flex-start;
            .project_tile{
              width: 320px;
              height:227px;
              background-color: white;
              border-radius: 10px;
              margin-bottom: 10px;
              margin-left: 4px;
              margin-right: 4px;
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
                &[data-id="16"]{
                  background-image: url("~assets/img/projets/16.png");  
                }
                &[data-id="17"]{
                  background-image: url("~assets/img/projets/17.png");  
                }
                &[data-id="18"]{
                  background-image: url("~assets/img/projets/18.png");  
                }
                &[data-id="19"]{
                  background-image: url("~assets/img/projets/19.png");  
                }
                &[data-id="20"]{
                  background-image: url("~assets/img/projets/20.png");  
                }
                &[data-id="21"]{
                  background-image: url("~assets/img/projets/21.png");  
                }
                &[data-id="22"]{
                  background-image: url("~assets/img/projets/22.png");  
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
      &#parcours{
        background-color: white;
        padding-top: 50px;
        padding-bottom: 150px;
        .content_wrapper{
          .svg_container{
            width: 98%;
            max-width: 1024px;
            position: relative;
            margin:100px auto 0;
            &[data-svg="mobile"]{
              display: none;
            }
          }
        }
      }
      &#contact{
        background-color: $grey;
        padding-top: 50px;
        padding-bottom: 150px;
        .content_wrapper{
          h1{
            margin-bottom: 50px;
          }
          .contact_box{
            display: block;
            text-align: left;
            padding-left: 95px;
            margin-bottom: 30px;
            .contact_picto{
              width: 30px;
              display: inline-block;
              margin-right: 20px;
              position: relative;
              top:5px;
              &[data-picto="dl"]{
                top:3px;
              }
            }
            .contact_text{
              display: inline-block;
              font-family: "rubikregular";
              font-size: 30px;
              color:$blue;
              cursor: pointer;
              position: relative;
              &[data-text="mail"]{
                &:after{
                  content: "Copié dans le presse-papier !";
                  font-family: "rubiklight";
                  font-size: 15px;
                  color:$orange;
                  position:absolute;
                  top:10px;
                  width: 250px;
                  white-space: nowrap;
                  overflow: hidden;
                  display: block;
                  left:100%;
                  margin-left: 10px;
                  @include transition(all(0.2s ease-in-out));
                  opacity: 0;
                }
              }
              &.feedback{
                &:after{
                  opacity: 1;
                }
              }
              &:hover{
                color: $deepBlue;
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
          margin-left:0!important;
          text-align: center;
        }
        &#intro{
          p{
            margin-left: 25px;
            max-width: 90%;
          }
        }
        &#projects{
          padding-top: 50px;
          padding-bottom: 50px;
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
        &#parcours{
          .content_wrapper{
            .svg_container{
              width: 95%;
              max-width: 768px;
              position: relative;
              margin:50px auto 0;
              &[data-svg="mobile"]{
                display: block;
              }
              &[data-svg="desktop"]{
                display: none;
              }
            }
          }
        }
        &#contact{
          .content_wrapper{
            .contact_box{
              padding-left: 15px;
              .contact_picto{
                width: 30px;
                margin-right: 10px;
              }
              .contact_text{
                font-size: 22px;
                &[data-text="mail"]{
                  &:after{
                    top:25px;
                    left:0;
                    margin-left: 0px;
                  }
                }
                &:hover{
                  color: $blue;
                }
              }
            }
          }
        }
      }
    }

  }

</style>