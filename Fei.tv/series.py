def buscar_serie():
    arquivo = open("series.txt", "r")

    series = []

    for linha in arquivo:
        if linha.strip() == "":
            continue
        series.append(linha.strip().split(";"))

    arquivo.close()

    print("\n--- SÉRIES DISPONÍVEIS ---")
    for i, s in enumerate(series):
        print(f"{i+1} - {s[0]}")

    try:
        escolha = int(input("Escolha uma série: "))
        serie = series[escolha - 1]

        print("\n--- INFORMAÇÕES ---")
        print("Nome:", serie[0])
        print("Temporadas:", serie[1])
        print("Episódios:", serie[2])

    except:
        print("Opção inválida!")
