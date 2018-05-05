const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try{
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=5ff2c9aab39f450a57b1033e48f95da5');
    
    console.log(response.data.rates[to]);
    }
    catch (e){
        throw new Error(`Unable to get country from: ${from} and ${to}`);
        
    }
}

getExchangeRate('EUR', 'USD');