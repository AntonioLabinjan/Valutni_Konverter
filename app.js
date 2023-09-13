new Vue({
    el: '#app',
    data: {
        amount: null,
        fromCurrency: 'hrk',
        toCurrency: 'hrk',
        exchangeRates: {
            'usd-hrk': 7.005113,
            'hrk-usd': 0.142354,
            'eur-hrk': 7.53450,
            'hrk-eur': 0.132715,
            'eur-usd': 1.07,
            'usd-eur': 0.93
        },
        result: null,
        currencies: ['hrk', 'usd', 'eur']
    },
    methods: {
        convert() {
            const key = `${this.fromCurrency}-${this.toCurrency}`;
            const rate = this.exchangeRates[key];
            this.result = (this.amount * rate).toFixed(2);
        }
    }
});
