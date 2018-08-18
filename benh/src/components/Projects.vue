<template>
  <div id="projectsContainer">
   <h1>Projects</h1>
    <div id="projUnderline"></div>
    <router-link to="/">Back</router-link>
    <p>Click on a project to expand its details!</p>
    <div id="projectTitles">
      
      <div class="catagory" v-for="catagory in catagories">
        <h3>{{ catagory }}</h3>
        <div class="proj" v-for="project in projects"
             v-if="project.catagory == catagory">
          <div class="projTitle" @click="shown = project.id">
            <span class="title"> {{ project.title }}</span>
            <span class="elevator"> {{ project.elevator }}</span>
          </div>
          <div class="projDetails" v-if="true"
               :class="{
                       expanded: project.id == shown
                       }">
            <span v-if="project.position != ''">
              <b>Position:</b> {{ project.position }}<br>
            </span>
            <b>Description:</b> {{ project.description }}
            <br><br>
            <a v-bind:href="project.link" target="_blank"
               v-if="project.link != ''">Check it out here!</a>
          </div>
        </div>
      </div>
    </div>
    
  </div>



</template>

<script>
    
export default {
  name: 'Projects',
  data () {
    return {
      // Stores the id of the currently displayed project:
      shown: '',
      
      catagories: [
        'Music',
        'Code',
        'Politics',
        'In Progress'
      ],
      projects: [
        {
          title: 'The Drawing Blanks',
          position: 'Drummer/Singer',
          catagory: 'Music',
          elevator: 'My band!',
          thumb: '',
          image: '', 
          description: 'We\'re an indie/alt band! We\'ve been playing for 3 years, and have music on Spotify, iTunes, Bandcamp and Soundcloud. You can also like us on Facebook and Twitter',
          link: 'http://thedrawingblanks.com',
          id: 'tdb'
        },
        {
          title: 'Hacksu',
          position: 'Coleader',
          catagory: 'Code',
          elevator: 'KSU\'s programming club',
          thumb: '',
          image: '', 
          description: 'We meet every Tuesday at 7pm in the Kent Honors College and teach a lesson about two lessons about programming -- a beginner lesson and an advanced lesson. I often teach webdev, python, git, and node. We also have free pizza!',
          link: 'http://hacksu.com',
          id: 'hacksu'
        },
        {
          title: 'Funkhaus Berlin',
          position: 'Cohost',
          catagory: 'Politics',
          elevator: 'BSR Radio Show',
          thumb: '',
          image: '', 
          description: 'Funkhaus Berlin is consistently the highest rated political talk show in the history of the spoken word! Wow!  We talk about politics on a national and local scale, and what you can do to help. Funkhaus Berlin can be streamed from our website every Saturday from midnight to 2am. We also archive our episodes on bandcamp.',
          link: 'http://funkhaus.stream',
          id: 'fb'
        },
        {
          title: 'Hexiguessimal',
          position: 'Creator',
          catagory: 'Code',
          elevator: 'A Color Guessing Game with Hex Codes',
          thumb: '',
          image: '', 
          description: 'Hexiguessimal is a simple game I made a long time ago that helps you familiarize yourself with how hex codes convert to real colors!',
          link: 'http://hexiguessimal.com',
          id: 'hex'
        },
        {
          title: 'Planet Maker',
          position: 'Creator',
          catagory: 'Code',
          elevator: 'CSS Custom Planet Maker',
          thumb: '',
          image: '', 
          description: 'Simple vue application to make a fun css planet.  Made this sucker on code pen with jquery originally! I\'m gonna link it to a database so you can store your own planets, eventually - or that\'s the plan anyway.',
          link: '/planetmaker',
          id: 'pm'
        },
        {
          title: 'Cognote',
          position: 'Creator',
          catagory: 'Code',
          elevator: 'Note to Flashcard Parser',
          thumb: '',
          image: '', 
          description: 'This is a project I made for Hakron \'17. It takes some notes, and parses them into flashcards. Eventually I want to make this actually work better, and put it up on it\'s own website.',
          link: '/cognote',
          id: 'cognote'
        },
        
        {
          title: 'AutoMate',
          position: 'Creator',
          catagory: 'In Progress', 
          elevator: 'Adventures with Turing Complete Pals',
          thumb: '',
          image: '', 
          description: 'Obviously not finished yet. In this game, you gather resources to create colorful robots, who you can program to solve various puzzles or make beautiful machines.',
          link: '/automate',
          id: 'automate',
        },
        
        {
          
        }
      ]
    }
  }
}
</script>

<style scoped>
  #projUnderline {
    border: black solid 1px;
    height: 0px;
    width: 400px;
    animation: underline 2s;
    margin: auto;
    margin-bottom: 30px;
  }
  
  #projectTitles {
    width: 600px;
    margin: auto;
/*    cursor: pointer;*/
    
/*    border: solid red 1px;*/
  }
  
  .proj {
    width: 500px;
    transition-duration: 1s;
    margin: auto;
    
    border: solid black 1px;
    padding: 10px 20px 10px 20px;
  }
  .projTitle {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .title {
    font-weight: bold;
    
  }
  
  .projDetails {
    margin-top: 0px;
    text-align: left;
    max-height: 0px;
    overflow-y: hidden;
    transition-duration: 1s;
  }
  .expanded {
    margin-top: 15px;
    max-height: 200px;;
  }
  
  h1 {
    animation: fadeIn 2s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  
  @keyframes underline {
    from {
      width: 0px;
    }
    to {
      width: 400px;
    }
  }
  
</style>