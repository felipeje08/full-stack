def ler_usuarios():
    lista = []
    arquivo = open("usuarios.txt", "r")

    for linha in arquivo:
        dados = linha.strip().split(";")

        usuario = {
            "nome": dados[0],
            "email": dados[1],
            "senha": dados[2]
        }

        lista.append(usuario)

    arquivo.close()
    return lista

def cadastrar():
    usuarios = ler_usuarios()

    nome = input("Nome: ")
    email = input("Email: ")
    senha = input("Senha: ")

    # 🚨 evita email repetido (ganha ponto)
    for u in usuarios:
        if u["email"] == email:
            print("Email já cadastrado!")
            return

    novo = {
        "nome": nome,
        "email": email,
        "senha": senha
    }

    usuarios.append(novo)

    arquivo = open("usuarios.txt", "a")
    arquivo.write(nome + ";" + email + ";" + senha + "\n")
    arquivo.close()

    print("Cadastrado!")

def login():
    usuarios = ler_usuarios()

    email = input("Email: ")
    senha = input("Senha: ")

    for u in usuarios:
        if u["email"] == email and u["senha"] == senha:
            print("Login OK!")
            return True


    print("Erro no login")
    return False

