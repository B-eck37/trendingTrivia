angular.module('trendingApp', ['ui.router']);

angular.module('trendingApp').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/home/home.template.html',
        controller: 'homeCtrl',
    })
    .state({
        name: 'difficulty',
        url: '/difficulty/1',
        component: 'difficultyComponent'
        // controller: 
    })
    $urlRouterProvider.otherwise('/');
})