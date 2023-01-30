import { createContext, useEffect, useState } from "react";
//import Axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    // const [users, setUsers] = useState();
    const usersStorage = [
        { "id": "maguiar", "password": "12345", "nivel": "mestre", "nmcompleto": "Marcelo Aguiar Rocha dos Santos", "depto": "TI/STS" },
        { "id": "lucas", "password": "12345", "nivel": "mestre","nmcompleto": "Lucas Rodrigues", "depto": "TI/STS" },
        { "id": "dbarbosa", "password": "dba@158", "nivel": "mestre","nmcompleto": "Diego Campos Barbosa", "depto": "DIN/STS" },
        { "id": "gnascimento", "password": "ghn@155", "nivel": "mestre","nmcompleto": "Gustavo Honorato Nascimento", "depto": "COS/STS" },
        { "id": "mnascimento", "password": "mna@265", "nivel": "mestre","nmcompleto": "Mauricio Nascimento Junior", "depto": "DIN/STS" },
        { "id": "msantos", "password": "mdcs@133", "nivel": "mestre","nmcompleto": "Mauricio da Conceição Santos", "depto": "COS/STS" },
        { "id": "ssebadelhe", "password": "sas@266", "nivel": "mestre","nmcompleto": "Sérgio Augusto Sebadelhe", "depto": "COS/STS" },
        { "id": "glsilva", "password": "gls@558", "nivel": "mestre","nmcompleto": "Genilson Luiz da Silva", "depto": "COS/STS" },
        { "id": "cprofessor", "password": "csp@866", "nivel": "mestre","nmcompleto": "Caio Santana Professor", "depto": "COS/STS" },
        { "id": "arsantos", "password": "ars@351", "nivel": "mestre","nmcompleto": "Aduilson Ribeiro dos Santos", "depto": "COS/STS" },
        { "id": "amsouza", "password": "ams@854", "nivel": "mestre","nmcompleto": "Alexandre Moreira de Souza", "depto": "COS/STS" },
        { "id": "gmsantos", "password": "gms@152", "nivel": "mestre","nmcompleto": "Gabriel Maciel Dos Santos", "depto": "COS/STS" },
        { "id": "rpsouza", "password": "rps@160", "nivel": "mestre","nmcompleto": "Roberto Pereira de Souza", "depto": "COS/STS" },
        { "id": "nalves", "password": "nia@741", "nivel": "mestre","nmcompleto": "Nicolas Ildefonso Alves", "depto": "DIN/STS" },
        { "id": "tazevedo", "password": "taz@055", "nivel": "mestre","nmcompleto": "Túlio Augusto Azevedo", "depto": "COS/STS" },
        { "id": "mssilva", "password": "mass@353", "nivel": "mestre","nmcompleto": "Marcos Antonio Santos da Silva", "depto": "COS/STS" },
        { "id": "mmsantos", "password": "mms@753", "nivel": "mestre","nmcompleto": "Marconi Raimundo Mendonça dos Santos", "depto": "COS/STS" },
        { "id": "joao", "password": "12345", "nivel": "mestre", "nmcompleto": "Joao Roberto Archiolli", "depto": "TI/STS"},
        { "id": "arodrigues", "password": "12345", "nivel": "mestre","nmcompleto": "Anderson Rodrigues", "depto": "TI/STS" },
    ]


    // const getUsers = () => {
    //     Axios.get('http://localhost:8080/users').then((response) => {
    //         setUsers(response.data);
    //     });
    // }
    // getUsers();

    useEffect(() => {//toda vez que for carregada a aplicação, verifica user e token
        const userToken = localStorage.getItem("user_token");


        if (userToken) {//if verifica se existe algum usuario e token
            const hasUser = usersStorage.filter(
                (user) => user.id === JSON.parse(userToken).id
            );//verifica se o usuario tem o mesmo id do token

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const login = (id, password) => {//func. que recebe id e senha
        //objeto que puxa os registros
        //const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        //verifica se o id ja esta cadastrado
        const hasUser = usersStorage?.filter((user) => user.id === id);


        if (hasUser?.length) {//caso exista esse usuario, verifica se id e senha esta correto
            if (hasUser[0].id === id && hasUser[0].password === password) {
                //gera token
                const nome = hasUser[0].nmcompleto;
                const departamento = hasUser[0].depto;
                const token = Math.random().toString(36).substring(2);//gera token aleatorio
                localStorage.setItem("user_token", JSON.stringify({ id, token, nome, departamento }));
                setUser({ id, password, nome, departamento });
                return;
            } else {
                return "Usuário ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };


    const logout = () => {//faz o logout
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return ( //retorna os valores para que possam ser usados no resto da aplicação
        <AuthContext.Provider
            value={{ user, signed: !!user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
