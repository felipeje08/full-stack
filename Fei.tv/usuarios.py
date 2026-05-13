def ler_usuarios():

    usuarios = []

    arquivo = open("Fei.tv/usuarios.txt", "r")

    for linha in arquivo:

        linha = linha.strip()

        if linha != "":

            dados = linha.split(";")

            usuario = {
                "nome": dados[0],
                "email": dados[1],
                "senha": dados[2]
            }

            usuarios.append(usuario)

    arquivo.close()

    return usuarios


def cadastrar():

    usuarios = ler_usuarios()

    nome = input("Nome: ")
    email = input("Email: ")
    senha = input("Senha: ")
    

    for u in usuarios:

        if u["email"] == email:
            print("Email já cadastrado!")
            return

    arquivo = open("Fei.tv/usuarios.txt", "a")

    arquivo.write(nome + ";" + email + ";" + senha + "\n")

    arquivo.close()

    print("Usuário cadastrado com sucesso!")


def login():

    usuarios = ler_usuarios()

    email = input("Email: ")
    senha = input("Senha: ")

    for u in usuarios:

        if u["email"] == email and u["senha"] == senha:


            print("Login realizado!")
            return u

    print("Email ou senha inválidos!")

    return None