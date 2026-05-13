Fill the blank 
multiple choice 
matching

app/quizzes/results/learn-by-activities/[activity]/LearnByActivityDetailPage.tsx for now is only one page, make this page as tab page
- current tab is Sentence Order
- another 3 tabs are: Fill the blank, Multiple choice, Matching


create activityModal app/admin/activities/ActivitiesPage.tsx line 355 is UI for create Sentence Order only,
- let fix that if use choose fill_the_blank, multiple_choice, match, the UI will change coressponse to each activity_type

LessonService.getLessonsByCategoryId at app/quizzes/results/learn-by-activities/[activity]/LearnByActivityDetailPage.tsx for now we call API one time
- let change behavior that when navigate to other tabs, call the same api and pass tab as query string that i made it in LessonService.getLessonsByCategoryId


i see each tab has lesson list, let display lessons list on each tab
- when click to lesson then navigate to same current behavior


for lesson detail content at app/quizzes/results/learn-by-activities/lessons/[id]/LessonDetailPage.tsx
- i got activityType of query string to know what type of activity
 - i created 4 components:  SentenceOrderContent, MultipleChoiceContent, FillBlankContent, MatchingContent
 - i want to seperate content for each activity_type
 - we have already SentenceOrderContent
 - you let seperate these component and create another 3 components left


<!-- get lesson detail -->
 Lesson detail at path app/admin/lessons/[id]/LessonDetailPage.tsx is empty, let implement this page


<!-- delete lesson and learning activity -->
i have LessonService.deleteLesson and LessonService.deleteLearningActivity let implement these function in LessonDetailPage
