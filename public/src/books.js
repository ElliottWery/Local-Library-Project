function findAuthorById(authors, id) {
  let result = authors.filter((author) => author.id === id);
  return result[0];
  }
  
  function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
  }
  
  
  function partitionBooksByBorrowedStatus(books) {
    const borrowed = books.filter((book) => 
      book.borrows[0].returned === false); 
        const returned = books.filter((book) => 
        book.borrows[0].returned === true);
        let result = [borrowed, returned]; 
    return result;
  }
  
  function getBorrowersForBook(book, accounts) {
    let result = book.borrows.map((borrows) => { 
    let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account }; }); 
    return result.slice(0, 10);
  }
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };
  