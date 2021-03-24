const {
  createRecord, getData, getRecordsWithStores
} = require('./recordsController');

const RecordModel = require('../model/RecordModel');

jest.mock('../model/RecordModel');

describe('Given a createStore function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      const req = {
        body: null
      };

      const res = {
        json: jest.fn()
      };

      createRecord(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getData function', () => {
  describe('When it is invoked', () => {
    let res;
    let req;
    beforeEach(() => {
      res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      };
      req = {};
    });
    test('Then res.send should be called when callback is true', () => {
      RecordModel.find.mockImplementationOnce((query, callback) => callback(true));

      getData(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('Then res.json should be called when callback is false', () => {
      RecordModel.find.mockImplementationOnce((query, callback) => callback(false));

      getData(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getRecordsWithStores function', () => {
  describe('When it is invoked', () => {
    let res;
    let req;
    beforeEach(() => {
      res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
      };
      req = {
        params: {
          param: 1
        }
      };
    });
    test('Then res.send should be called when callback is true', () => {
      RecordModel.findById.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true))
        }))
      }));

      getRecordsWithStores(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('Then res.json should be called when callback is false', () => {
      RecordModel.findById.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(false))
        }))
      }));

      getRecordsWithStores(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
