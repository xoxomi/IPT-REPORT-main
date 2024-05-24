let games = [
    {id: '1', title: 'Tower Of fantasy', platform: ['PC']},
    {id: '2', title: 'Honkai Impact 3rd', platform: ['PC']},
    {id: '3', title: 'Dota 2', platform: ['PC']},
    {id: '4', title: 'CounterSied', platform: ['PC']},
]

let authors = [
    {id: '1', name: 'I dont know the author', verified: true},
    {id: '2', name: 'same I dont know', verified: false},
    {id: '3', name: 'ambot', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content: 'just a content', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'just a content', author_id: '2', game_id: '3'},
    {id: '3', rating: 7, content: 'just a content', author_id: '3', game_id: '4'},
    {id: '4', rating: 6, content: 'just a content', author_id: '4', game_id: '1'},
]

export default { games, authors, reviews}