def buscar_filme():
    arquivo = open("filmes.txt", "r")
    filmes = []

    for linha in arquivo:
        if linha.strip() == "" or linha.startswith("#"):
            continue
        filmes.append(linha.strip().split(";"))

    arquivo.close()

    generos = []

    for f in filmes:
        if f[3] not in generos:
            generos.append(f[3])

    print("\n--- GÊNEROS ---")
    for i, g in enumerate(generos):
        print(f"{i+1} - {g}")

        op = int(input("Escolha o gênero: "))
        genero_escolhido = generos[op-1]

        lista_filmes = [f for f in filmes if f[3] == genero_escolhido]

        print(f"\n--- FILMES DE {genero_escolhido} ---")
        for i, f in enumerate(lista_filmes):
            print(f"{i+1} - {f[0]}")

        escolha = int(input("Escolha o filme: "))
        filme = lista_filmes[escolha-1]

        print("\n--- INFORMAÇÕES ---")
        print("Nome:", filme[0])
        print("Duração:", filme[1], "min")
        print("Ano:", filme[2])

    elif:
print("Opção inválida!")
