import axios from "axios";

export default async function getCotacao() {
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    let result = [];

    await axios.get(url)
    .then(function (response) {
        const data = response.data;
        const ask = data.USDBRL.ask;
        const name = data.USDBRL.name;

        result = [ask, name];
        console.log("Cotacao do dia");
        console.log(ask);
        console.log(name);
    })
    .catch(function (error) {
        console.log(error);
    });

    return result;
}