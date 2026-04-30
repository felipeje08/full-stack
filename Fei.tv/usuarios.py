def cadastrar():
    arquivo = open("usuarios.txt", "a")

    nome = input("Nome: ")
    email = input("Email: ")
    senha = input("Senha: ")

    arquivo.write(nome + ";" + email + ";" + senha + "\n")
    arquivo.close()

    print("Cadastrado!")


def login():
    arquivo = open("usuarios.txt", "r")

    email = input("Email: ")
    senha = input("Senha: ")

    for linha in arquivo:
        dados = linha.strip().split(";")
        if dados[1] == email and dados[2] == senha:
            arquivo.close()
            print("Login OK!")
            return True

    arquivo.close()
    print("Erro no login")
    return False
