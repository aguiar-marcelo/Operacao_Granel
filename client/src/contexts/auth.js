import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {//toda vez que for carregada a aplicação, verifica user e token
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");

        if (userToken && usersStorage) {//if verifica se existe algum usuario e token
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );//verifica se o usuario e tem o mesmo email do token

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const login = (email, password) => {//func. que recebe email e senha
        //objeto que puxa os registros
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        //verifica se o email ja esta cadastrado
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {//caso exista esse usuario, verifica se email e senha esta correto
            if (hasUser[0].email === email && hasUser[0].password === password) {
                //gera token
                const token = Math.random().toString(36).substring(2);//gera token aleatorio
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    const inscrever = (email, password) => {//função de inscrição
        //puxa os registros
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        //verifica se email ja esta cadastrado
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {//caso sim, retorna que email ja esta cadastrado
            return "Já tem uma conta com esse E-mail";
        }

        let newUser;//caso nao, cria novo usuario

        if (usersStorage) {
            //pega todos usuarios ja cadastrados e acrescenta mais um
            newUser = [...usersStorage, { email, password }];
        } else {
            //caso for o primeiro usuario que sera cadastrado
            newUser = [{ email, password }];
        }

        //envia para o local storage o array com os usuarios atualizados
        localStorage.setItem("users_bd", JSON.stringify(newUser));

        return;
    };

    const logout = () => {//faz o logout
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return ( //retorna os valores para que possam ser usados no resto da aplicação
        <AuthContext.Provider
            value={{ user, signed: !!user, login, inscrever, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
