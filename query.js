const db = require("./models");

// Article Seed Data
const articleData1 = {
  title: "Article One",
  body: "This is the body for Article One",
  author: "John Doe",
  isPublic: true,
};

const articleData2 = {
  title: "Article Two",
  body: "This is the body for Article One",
  author: "John Doe",
  isPublic: false,
};

const articles = [articleData1, articleData2];

// ---------------------------- CREATE
// Create One Article
// create() takes an object and callback function
// The callback function is 'error first'
// Always handle the error first

// db.Article.create(articleData1, (error, createdArticle) => {
//   if (error) {
//     console.log('QUERY ERROR', error);
//   } else {
//     console.log(createdArticle);
//   }
//   process.exit();
// });

// Query Rejected: Title and Body are required
// db.Article.create(articleData2, (error, createdArticle) => {
//   if (error) {
//     console.log('QUERY ERROR', error); // undefined
//   } else {
//     console.log(createdArticle);
//     console.log(error); // null
//   }
//   process.exit();
// });

// ----------------------- FIND


// Find All Articles

// db.Article.find({}, (error, allArticles) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(allArticles);
//   }
//   process.exit();
// });


// Find All Public Articles

// db.Article.find({isPublic: true}, (error, allPublicArticles) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(allPublicArticles);
//   }
//   process.exit();
// });


// Filter By Title

// db.Article.find({title: 'Article One'}, (error, filteredArticles) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(filteredArticles);
//   }
//   process.exit();
// });


// Find One Article By ID

// db.Article.findById('5f77a1b8b0822ff6d22c9fd2', (error, foundArticle) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(foundArticle);
//   }

//   process.exit();
// });


// Find One Article By Author

// db.Article.findOne({author: 'John Doe'}, (error, foundArticle) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(foundArticle);
//   }

//   process.exit();
// });


// ---------------------------- UPDATE

// Update Article Author

// db.Article.findByIdAndUpdate(
//   '5f77a1b8b0822ff6d22c9fd2', // ID of record to find
//   {
//     title: 'Mongoose is Awesome!!!', // Object with updated data
//   },
//   {new: true}, // new: true === updated record, new: false === original record
//   (error, updatedArticle) => { // error first callback
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(updatedArticle);
//     }

//     process.exit();
//   }
// );


// ------------------------- DELETE

// db.Article.findByIdAndDelete('5f77a1b8b0822ff6d22c9fd2', (error, deletedArticle) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(deletedArticle);
//   }

//   process.exit();
// });

