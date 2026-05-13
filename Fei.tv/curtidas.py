def curtir_video(usuario):

    video = input("Digite o nome do vídeo: ")

    arquivo = open("Fei.tv/curtidas.txt", "a")

    arquivo.write(usuario["email"] + ";" + video + "\n")

    arquivo.close()

    print("Vídeo curtido!")


def descurtir_video(usuario):

    arquivo = open("Fei.tv/curtidas.txt", "r")

    linhas = arquivo.readlines()

    arquivo.close()

    video = input("Digite o nome do vídeo para descurtir: ")

    arquivo = open("Fei.tv/curtidas.txt", "w")

    removido = False

    for linha in linhas:

        dados = linha.strip().split(";")

        if dados[0] == usuario["email"] and dados[1].lower() == video.lower():

            removido = True

        else:

            arquivo.write(linha)

    arquivo.close()

    if removido:
        print("Curtida removida!")

    else:
        print("Vídeo não encontrado!")