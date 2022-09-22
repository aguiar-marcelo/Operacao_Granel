import { createContext, useEffect, useState } from "react";
//import Axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    // const [users, setUsers] = useState();
    const usersStorage = [
        { "id": "maguiar", "password": "12345" },
        { "id": "lucas", "password": "12345" },
        { "id": "rita", "password": "12345" },
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
            );//verifica se o usuario e tem o mesmo id do token

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
                const token = Math.random().toString(36).substring(2);//gera token aleatorio
                localStorage.setItem("user_token", JSON.stringify({ id, token }));
                setUser({ id, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
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
