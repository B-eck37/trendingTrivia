angular.module('trendingApp').controller('homeCtrl', function($scope, homeSrvc){
        homeSrvc.getQuestions().then(response => {
            console.log(response, 'ctrl')
            $scope.questions = response;
        })
})

// angular.module('trendingApp').controller('homeCtrl', function($scope, homeSrvc){
//     homeSrvc.getQuestions().then(data => {
//         console.log(data, 'hello')
//         $scope.questions = data 
//     })
// })