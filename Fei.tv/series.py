def ler_series():

    series = []

    arquivo = open("Fei.tv/series.txt", "r")

    for linha in arquivo:

        linha = linha.strip()

        if linha != "":

            dados = linha.split(";")

            serie = {
                "nome": dados[0],
                "temporadas": dados[1],
                "episodios": dados[2],
                "genero": dados[3]
            }

            series.append(serie)

    arquivo.close()

    return series


def listar_series():

    series = ler_series()

    print("\n--- SÉRIES DISPONÍVEIS ---")

    contador = 1

    for serie in series:

        print(contador, "-", serie["nome"])

        contador = contador + 1


def buscar_serie():

    series = ler_series()

    nome = input("Digite o nome da série: ")

    encontrado = False

    for serie in series:

        if nome.lower() in serie["nome"].lower():

            print("\n--- SÉRIE ---")
            print("Nome:", serie["nome"])
            print("Temporadas:", serie["temporadas"])
            print("Episódios:", serie["episodios"])
            print("Gênero:", serie["genero"])

            encontrado = True

    if encontrado == False:

        print("Série não encontrada!")