const OrderBook = require('./orderbook');

class AskOrderBook extends OrderBook {
    getTop(limit) {
        const rates = Object.keys(this.store).map(key => parseFloat(key));
        rates.sort();
        rates.reverse();
        rates.splice(limit);
        return rates.map(key => this.store[key]);
    }
}

module.exports = AskOrderBook;