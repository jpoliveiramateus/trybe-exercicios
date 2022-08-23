const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ]});

const { expect } = chai;

chai.use(chaiHttp);

describe('Testando a API Cacao Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/toal para buscar a quantidade de chocolates', function () {
    it('Retorna a quantidade de tipos de chocolates que existem', async function () {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(
        {
          totalChocolates: 4,
        }
      );
    });
  });

  describe('Usando o método GET em /chocolates/search', function () {
    it('Retorna os chocolates que contém o termo pesquisado', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 3,
          name: "Mon Chéri",
          brandId: 2
        },
        {
          id: 4,
          name: "Mounds",
          brandId: 3
        }
      ]);
    });

    it('Retorna um array vazio quando não há chocolates que contenham o termo pesquisado.', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body.chocolates).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate que existe na base de dados', async function () {
      const response = await chai.request(app).put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 1,
          name: "Mint Pretty Good",
          brandId: 2
        }
      );
    });

    it('Retorna uma mensagem de erro quando não há um chocolate com a id passada', async function() {
      const response = await chai.request(app).put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2
      });

      expect(response.status).to.be.equal(404);
      expect(response.body.chocolate).to.deep.equal(
        {
          message: 'chocolate not found',
        }
      );
    });
  });
  
});
