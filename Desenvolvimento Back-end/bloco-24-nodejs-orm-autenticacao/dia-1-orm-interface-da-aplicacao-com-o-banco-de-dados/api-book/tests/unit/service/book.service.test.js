const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../../src/models');
const BookService = require('../../../src/services/book.service');

const { testBook, booksMock } = require('./mocks/book.service.mock');

describe('BookService', () => {
  describe('#getAll', () => {
    const findAllStub = sinon.stub(Book, 'findAll');
    let books;

    describe('quando não existe nenhum livro cadastrado', () => {
      before(async () => {
        findAllStub.resolves([]);
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.reset();
      });
  
      it('called Book.findAll', () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um array', () => {
        expect(books).to.be.an('array');
      });
  
      it('o array está vazio', () => {
        expect(books).to.be.empty;
      });
    });

    describe('quando existem livros cadastrados', () => {
      before(async () => {
        findAllStub.resolves([testBook]);
        books = await BookService.getAll();
      });
  
      after(() => {
        findAllStub.restore();
      });
  
      it('called Book.findAll', async () => {
        expect(Book.findAll.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um array', async () => {
        expect(books).to.be.an('array');
      });
  
      it('o array deve retornar objetos', async () => {
        expect(books).to.be.deep.equal([testBook]);
      });
    });
  });
  
  describe('#getById', () => {
    const findByPkStub = sinon.stub(Book, 'findByPk');
    let book;

    describe('quando existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(testBook);
        book = await BookService.getById(1);
      });
  
      after(() => {
        findByPkStub.reset();
        book = null;
      });
  
      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.deep.equal(testBook);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        findByPkStub.resolves(null);
        book = await BookService.getById(1000);
      });
  
      after(() => {
        findByPkStub.reset();
        book = null;
      });
  
      it('called Book.findByPk', async () => {
        expect(Book.findByPk.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.be.null
      });
    });
  });
  
  describe('#createBook', () => {
    describe('retorna o registro do livro criado', () => {
      const createStub = sinon.stub(Book, 'create');
      const testBook = {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        pageQuantity: 689,
      };
      let book;
  
      before(async () => {
        createStub.resolves({
          id: 2,
          ...testBook,
          updatedAt: "2022-01-28T15:45:28.398Z",
          createdAt: "2022-01-28T15:45:28.398Z"
        });
  
        book = await BookService.createBook(testBook);
      });
  
      after(() => {
        createStub.reset();
      });
  
      it('called Book.create', async () => {
        expect(Book.create.calledOnce).to.be.equals(true);
      });
  
      it('a resposta é um objeto contendo os dados do livro', async () => {
        expect(book).to.include(testBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
      });
    });
  });
  
  describe('#updateBook', () => {
    const updateStub = sinon.stub(Book, 'update');

    const testBook = {
      title: "The Va Cinci Dode",
      author: "Ban Drown",
      pageQuantity: 589,
    };

    let updated;

    describe('quando existe o livro', () => {
      before(async () => {
        updateStub.resolves([true]);
        updated = await BookService.updateBook(2, testBook)
      });
        
      after(() => {
        updateStub.reset();
      });
  
      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });
  
      
      it('retorna true', async () => {
        expect(updated).to.be.true;
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        updateStub.resolves([false]);
        updated = await BookService.updateBook(1000, testBook)
      });
        
      after(() => {
        updateStub.reset();
      });
  
      it('called Book.update', async () => {
        expect(Book.update.calledOnce).to.be.equals(true);
      });
  
      
      it('retorna 0', async () => {
        expect(updated).to.be.false;
      });
    });
  });

  describe('#removeBook', () => {
    const removeStub = sinon.stub(Book, 'destroy');

    let removed;

    describe('quando existe o livro', () => {
      before(async () => {
        removeStub.resolves(true);
        removed = await BookService.removeBook(2);
      });
        
      after(() => {
        removeStub.reset();
      });
  
      it('called Book.destroy', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });
  
      it('retorna true', async () => {
        expect(removed).to.be.eq(true);
      });
    });

    describe('quando não existe o livro', () => {
      before(async () => {
        removeStub.resolves(false);
        updated = await BookService.removeBook(1000)
      });
        
      after(() => {
        removeStub.reset();
      });
  
      it('called Book.update', async () => {
        expect(Book.destroy.calledOnce).to.be.equals(true);
      });
  
      
      it('retorna false', async () => {
        expect(updated).to.be.eq(false);
      });
    });
  });

  // describe('#getByAuthor', () => {
  //   const findAllStub = sinon.stub(Book, 'findAll');
  //   let books;

  //   describe('quando existe pelo menos um livro com o author', () => {
  //     const listBooksByAuthor = booksMock.filter((book) => book.author.includes('Izabela Wagner'));
  //     before(async () => {
  //       findAllStub.resolves(listBooksByAuthor);
  //       books = await BookService.getByAuthor('Izabela Wagner');
  //     });
  
  //     after(() => {
  //       findAllStub.reset();
  //     });

  //     it('called Book.getByAuthor', () => {
  //       expect(Book.findAll.calledOnce).to.be.equals(true);
  //     });
  
  //     it('a resposta é um array', () => {
  //       expect(books).to.be.an('array');
  //     });
  
  //     it('a resposta é um arry de objetos contendo os dados dos livros com o nome do Author', () => {
  //       expect(books).to.deep.equal(listBooksByAuthor);
  //     });
  //   });

  //   describe('quando não existe nenhum livro com o author', () => {
  //     before(async () => {
  //       findAllStub.resolves([]);
  //       books = await BookService.getByAuthor('João Pedro');
  //     });
  
  //     after(() => {
  //       findAllStub.reset();
  //     });

  //     it('called Book.getByAuthor', () => {
  //       expect(Book.findAll.calledOnce).to.be.equals(true);
  //     });
  
  //     it('a resposta é um array vazio', () => {
  //       expect(books).to.be.an('array');
  //       expect(books).to.be.empty;
  //     });
  //   });
  // });
})