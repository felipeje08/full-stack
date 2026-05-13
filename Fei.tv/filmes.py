def ler_filmes():

    filmes = []

    arquivo = open("Fei.tv/filmes.txt", "r")

    for linha in arquivo:

        linha = linha.strip()

        if linha != "":

            dados = linha.split(";")

            filme = {
                "nome": dados[0],
                "duracao": dados[1],
                "ano": dados[2],
                "genero": dados[3]
            }

            filmes.append(filme)

    arquivo.close()

    return filmes


def listar_filmes():

    filmes = ler_filmes()

    print("\n--- FILMES DISPONÍVEIS ---")

    contador = 1

    for filme in filmes:

        print(contador, "-", filme["nome"])

        contador = contador + 1


def buscar_filme():

    filmes = ler_filmes()

    nome = input("Digite o nome do filme: ")

    encontrado = False

    for filme in filmes:

        if nome.lower() in filme["nome"].lower():

            print("\n--- FILME ---")
            print("Nome:", filme["nome"])
            print("Duração:", filme["duracao"], "min")
            print("Ano:", filme["ano"])
            print("Gênero:", filme["genero"])

            encontrado = True

    if encontrado == False:

        print("Filme não encontrado!")