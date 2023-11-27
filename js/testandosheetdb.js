import axios from "axios";


export function salvar(modelo, departamento, enderecoIP) {
    axios.post('https://sheetdb.io/api/v1/rlqz6dcrsq80s', {
        "data":
        {
            "modelo": modelo,
            "departamento": departamento,
            "enderecoIP": enderecoIP
        }
    }, {
        "auth": {
            "username": "cuxvormk",
            "password": "7qruwh0mri5yhgjuds6b"
        }
    }
    )
    console.log("teste de ok");
};

salvar("Testes", "Testes","Testes")
''