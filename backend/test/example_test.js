const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http');
const app = require('../server'); 
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const sinon = require('sinon');

const { expect } = chai;

chai.use(chaiHttp);
let server;
let port;

const BookList = require('../models/bookList');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

describe('Book Controller Tests', () => {
  afterEach(() => sinon.restore());

  it('should add a new book', async () => {
    const req = { user: { id: new mongoose.Types.ObjectId().toString() }, body: { title: 'Test Book', author: 'Author' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };

    sinon.stub(BookList, 'create').resolves({ _id: '123', ...req.body, userId: req.user.id });

    await addBook(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
  });

  it('should get books for a user', async () => {
    const userId = new mongoose.Types.ObjectId().toString();
    const req = { user: { id: userId } };
    const res = { json: sinon.spy() };

    sinon.stub(BookList, 'find').resolves([{ title: 'Book 1', userId }]);

    await getBooks(req, res);

    expect(res.json.calledOnce).to.be.true;
  });

  it('should update a book', async () => {
    const bookId = new mongoose.Types.ObjectId().toString();
    const req = { params: { id: bookId }, body: { title: 'Updated Title' } };
    const res = { json: sinon.spy(), status: sinon.stub().returnsThis() };

    const fakeBook = { title: 'Old Title', save: sinon.stub().resolvesThis() };
    sinon.stub(BookList, 'findById').resolves(fakeBook);

    await updateBook(req, res);

    expect(fakeBook.title).to.equal('Updated Title');
    expect(res.json.calledOnce).to.be.true;
  });

  it('should delete a book', async () => {
    const bookId = new mongoose.Types.ObjectId().toString();
    const req = { params: { id: bookId }, user: { id: new mongoose.Types.ObjectId().toString() } };
    const res = { json: sinon.spy(), status: sinon.stub().returnsThis() };

    const fakeBook = { remove: sinon.stub().resolves() };
    sinon.stub(BookList, 'findById').resolves(fakeBook);

    await deleteBook(req, res);

    expect(res.json.calledWith({ message: 'Book deleted' })).to.be.true;
  });
});