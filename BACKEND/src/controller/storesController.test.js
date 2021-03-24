const {
  getStores, createStore, getStoresWithrecords
} = require('./storesController');

const Shop = require('../model/ShopModel');

jest.mock('../model/ShopModel');

describe('Given a createStore function', () => {
  describe('When it is invoked', () => {
    test('Then res.json should be called', () => {
      const req = {
        body: null
      };

      const res = {
        json: jest.fn()
      };

      createStore(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getStores function', () => {
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
      Shop.find.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true))
        }))
      }));

      getStores(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('Then res.json should be called when callback is false', () => {
      Shop.find.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(false))
        }))
      }));

      getStores(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getStoresWithrecords function', () => {
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
      Shop.findById.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(true))
        }))
      }));

      getStoresWithrecords(req, res);
      expect(res.send).toHaveBeenCalled();
    });
    test('Then res.json should be called when callback is false', () => {
      Shop.findById.mockImplementationOnce(() => ({
        populate: jest.fn().mockImplementationOnce(() => ({
          exec: jest.fn().mockImplementationOnce((callback) => callback(false))
        }))
      }));

      getStoresWithrecords(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
