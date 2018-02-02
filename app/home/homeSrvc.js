angular.module('trendingApp').service('homeSrvc', function($http){
    this.getQuestions = function(){
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(response => {
            console.log(response.data, 'srvc')
            return response.data.map(item => {
                console.log(item, 'item')
                return {
                    question: item.question,
                    animal: item.animal,
                    difficulty: item.difficulty,
                    options: item.options,
                    corect_answer: item.correct_answer,
                    date_entered: item.date_entered,
                }
            })
        })
    }
})
// angular.module('trendingApp').service('homeSrvc', function($http){
//     this.getQuestions = function(){
//         return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(response => {
//             console.log(response.data)
//            return response.data.map(item => {
//                 console.log(item.question, 'hey!')
//             return {
//                 question: item.question,
//                 animal: item.animal,
//                 difficulty: item.difficulty,
//                 options: item.options,
//                 correct_answer: item.correct_answer,
//                 date_entered: item.date_entered
//             }  
//         })
//         })
//     }
// })