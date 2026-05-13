from usuarios import cadastrar, login

from filmes import buscar_filme, listar_filmes

from series import buscar_serie, listar_series

from favoritos import (
    adicionar_favorito,
    listar_favoritos,
    remover_favorito
)

from curtidas import (
    curtir_video,
    descurtir_video
)


def menu_usuario(usuario):

    while True:

        print("\n--- MENU ---")
        print("1 - Listar filmes")
        print("2 - Buscar filme")
        print("3 - Listar séries")
        print("4 - Buscar série")
        print("5 - Curtir vídeo")
        print("6 - Descurtir vídeo")
        print("7 - Adicionar favorito")
        print("8 - Listar favoritos")
        print("9 - Remover favorito")
        print("10 - Logout")

        op = input("Escolha: ")

        if op == "1":

            listar_filmes()

        elif op == "2":

            buscar_filme()

        elif op == "3":

            listar_series()

        elif op == "4":

            buscar_serie()

        elif op == "5":

            curtir_video(usuario)

        elif op == "6":

            descurtir_video(usuario)

        elif op == "7":

            adicionar_favorito(usuario)

        elif op == "8":

            listar_favoritos(usuario)

        elif op == "9":

            remover_favorito(usuario)

        elif op == "10":

            print("Logout realizado!")
            break

        else:

            print("Opção inválida!")


def menu_inicial():

    while True:

        print("\n--- FEItv ---")
        print("1 - Login")
        print("2 - Cadastrar")
        print("3 - Sair")

        op = input("Escolha: ")

        if op == "1":

            usuario = login()

            if usuario != None:

                menu_usuario(usuario)

        elif op == "2":

            cadastrar()

        elif op == "3":

            print("Programa encerrado!")
            break

        else:

            print("Opção inválida!")


menu_inicial()