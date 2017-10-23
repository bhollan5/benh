<template>
  <div>
    wow lol
    <cogMain v-if="cognoteRoute == 'home'"></cogMain>
    <cogQuiz v-if="cognoteRoute == 'quiz'"></cogQuiz>
    <cogFin v-if="cognoteRoute == 'finish'"></cogFin>
  </div>
</template>

<script>
import cogMain from './CognoteHome.vue';
import cogQuiz from './Quiz.vue';
import cogFin from './CognoteFinish.vue';
  
export default {
  name: 'app',
  components: {
    cogMain,
    cogQuiz,
    cogFin
  },
  data () {
    return {
      questions: [],
      correct: 0,
      incorrectOnly: false,
      cognoteRoute: 'home'
    }
  },
  computed: {
    
  },
  mounted: function() {
    console.log(this.$route.path);
    this.$router.push('/cognote/home');
  },
  methods: {
    changeCogRoute: function(newRoute) {
      this.cognoteRoute = newRoute;
      this.$router.push('/cognote/' + newRoute);
    }
  }
}
</script>

<style>

</style>
