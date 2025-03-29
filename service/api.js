import axios from "axios";

export default async function getCotacao(){

    var url = "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    var result = []

    await axios.get(url)
    .then(function (response) {

        //recupera toda a resposta da chamada da API 
        const data = response.data;

    })
    .catch(function (error) {
        console.log(error);
    })

    return results



}