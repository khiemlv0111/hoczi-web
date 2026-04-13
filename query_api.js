/*

GET: https://api.hoczi.com/api/questions/question-list


POST: https://api.hoczi.com/api/questions/create-answer
{
    "content": "What is the output of: console.log(typeof null)?", 
    "type": "mcq", 
    "categoryId": 1, 
    "topicId": 1,
    "gradeId": 1,
    "difficulty": "easy",
    "code": "ohgoiaheaw",
    "explanation": "What is the output of: console.log(typeof null)"
}

POST: https://api.hoczi.com/api/questions/create-answer
{
    "content": "What is the more", 
    "questionId": 3, 
    "isCorrect": false
}