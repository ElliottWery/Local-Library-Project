
function getTotalBooksCount(books) {
  const totalBooks = books.length;
  return totalBooks;
}



function getTotalAccountsCount(accounts) {
  return accounts.length
}



function getBooksBorrowedCount(books) {
  let result = books.reduce((acc, book) => {
   for(let i = 0; i < book.borrows.length; i++) {
     if(book.borrows[i].returned === false) {
     acc++;
   }}
   return acc;
 },0)
 return result;
}



function getMostCommonGenres(books) { 
  let genres = []; 
  books.forEach((book) => { 
    let found = genres.find((genre) => genre.name === book.genre); 
    if (!found) { 
      let name = book.genre; 
      genres.push({ name, count: 1});
    } else { 
      found.count++; 
    }
  }); 
  genres.sort((a, b) => b.count - a.count); 
  return genres.slice(0, 5); 
}



function getMostPopularBooks(books) {
  let popularBooks = [];

  const borrows = books.reduce((acc, book) => {
    popularBooks.push({ name: book.title, count: book.borrows.length });
  }, []);

  return topFive(popularBooks);
}

function topFive(array) {
  let popularBooks = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return popularBooks;
}



function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }

  return topFive(popularAuthors);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
