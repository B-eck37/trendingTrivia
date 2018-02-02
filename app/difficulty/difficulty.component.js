angular.module('trendingApp').component('difficulty', {
    templateUrl: 'app/difficulty/difficulty.template.html',
    controllerAs: 'diffCtrl',
    controller: function(homeSrvc, quesSrvc, $stateParams, $state){
        this.preguntas = quesSrvc.questions;
        // $stateParams.difficulty = 1;

        if($stateParams.difficulty = 1){
            console.log($stateParams.difficulty)
            this.itemIndex = this.preguntas.findIndex(item => item.id === $stateParams.difficulty)
            this.item = this.preguntas[this.itemIndex];
        }

        this.goToDifficulty = function(){
            $state.go('home')
        }
    }
})