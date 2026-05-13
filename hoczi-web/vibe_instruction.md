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


at SentenceOrderContent app/quizzes/results/learn-by-activities/lessons/[id]/content/SentenceOrderContent.tsx line 167
- when user drag word and drop to blank box, sometimes it not the right place and it failed to drop
- so let highlight the box item if it is right to drop


bookDetailPage is empty at app/quizzes/results/books/[id]/BookDetailPage.tsx
- base on image, let create this page
- i can turn to next page, or previous page
- can also zoom in, zoom out

it is not what i want,
- i want the high of page is full, so user dont need to scroll down when they want to turn the page

for now we have 2 scroll bar, 1 for book content and 1 for page content
- let the page content fit the browser/screen, so user dont need to scroll when turn page
- if the book content is higher than the screen then scroll inside

can you have make function that collapse book then user can select 1 sepecific page


let implement book category page at app/quizzes/results/books/BookPage.tsx
- we have api categories, let show each category by cards
- click to each card, go to BookByCategorypage app/quizzes/results/books/books-by-category/[id]/page.tsx


AdminBookPage at app/admin/books/AdminBookPage.tsx is empty
- let display list of categories with category list api
- when click to each item, redirect to /books/books-by-category/[categoryId]



page list books by category at app/admin/books/books-by-category/[categoryId]/AdminBooksByCategory.tsx
- we have api get books by category with categorId
- display books group by topic
- data response as the image

each topic add a button, 
- when admin click button open modal to create book corespondense to that category and topic

books by category for users also at app/quizzes/results/books/books-by-category/[id]/BookByCategoryPage.tsx is empty
- let implement to show the list
- click to each book redirect to app/quizzes/results/books/[id]/BookDetailPage.tsx

create book at app/admin/books/books-by-category/[categoryId]/AdminBooksByCategory.tsx
- book_url is accept link now, let admin upload pdf file