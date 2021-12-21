function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
  
}


const sortAccountsByLastName = (accounts) => 
  accounts.sort((accountA, accountB)=>
    accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1
  );


function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let { id } = account;
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (id === borrow.id) {
        total++;
      }
    });
  });
  return total; 
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });
  let result = borrowedBooks.map((book) => {
    return {...book, author: getAuthor(book, authors) };
  });
  return result;
}

function getAuthor(book, authors) {
  const author = authors.find((author) =>  author.id === book.authorId);
  return author;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
