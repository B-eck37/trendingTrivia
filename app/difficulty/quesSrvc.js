angular.module('trendingApp').service('quesSrvc', function(){
    this.questions = [
        {
            id: 0,
            question: 'first question',
            animal: 'hippo',
            difficulty: 1,
            options: {1: 'option 1', 2: 'option 2', 3: 'option 3', 4: 'option 4'},
            corect_answer: 4,
        },
        {
            id: 1,
            question: 'second question',
            animal: 'owl',
            difficulty: 2,
            options: {1: 'option 1', 2: 'option 2', 3: 'option 3', 4: 'option 4'},
            corect_answer: 3,
        },
        {
            id: 2,
            question: 'third question',
            animal: 'alligator',
            difficulty: 3,
            options: {1: 'option 1', 2: 'option 2', 3: 'option 3', 4: 'option 4'},
            corect_answer: 1,
        },  
        {
            id: 3,
            question: 'fourth question',
            animal: 'horse',
            difficulty: 2,
            options: {1: 'option 1', 2: 'option 2', 3: 'option 3', 4: 'option 4'},
            corect_answer: 2,
        }
    ]
})