def adicionar_favorito(usuario):

    video = input("Digite o nome do vídeo: ")

    arquivo = open("Fei.tv/favoritos.txt", "a")

    arquivo.write(usuario["email"] + ";" + video + "\n")

    arquivo.close()

    print("Favorito adicionado!")


def listar_favoritos(usuario):

    arquivo = open("Fei.tv/favoritos.txt", "r")

    print("\n--- FAVORITOS ---")

    encontrou = False

    for linha in arquivo:

        dados = linha.strip().split(";")

        if dados[0] == usuario["email"]:

            print("-", dados[1])

            encontrou = True

    if encontrou == False:
        print("Nenhum favorito encontrado!")

    arquivo.close()


def remover_favorito(usuario):

    arquivo = open("Fei.tv/favoritos.txt", "r")

    linhas = arquivo.readlines()

    arquivo.close()

    video = input("Digite o nome do vídeo para remover: ")

    arquivo = open("Fei.tv/favoritos.txt", "w")

    removido = False

    for linha in linhas:

        dados = linha.strip().split(";")

        if dados[0] == usuario["email"] and dados[1].lower() == video.lower():

            removido = True

        else:

            arquivo.write(linha)

    arquivo.close()

    if removido:
        print("Favorito removido!")

    else:
        print("Vídeo não encontrado!")