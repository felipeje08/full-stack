from usuarios import cadastrar, login
from filmes import buscar_filme
from series import buscar_serie


def opcoes():
    while True:
        print("1 - Login")
        print("2 - Cadastrar")
        print("3 - Sair")

        op = input("Escolha: ")

        if op == "1":
            if login():
                menu_usuario()
        elif op == "2":
            cadastrar()
        elif op == "3":
            break
        else:
            print("Opção inválida!")


def menu_usuario():
    while True:
        print("\n--- MENU USUÁRIO ---")
        print("1 - Buscar filme")
        print("2 - Buscar série")
        print("3 - Logout")

        op = input("Escolha: ")

        if op == "1":
            buscar_filme()
        elif op == "2":
            buscar_serie()
        elif op == "3":
            break
        else:
            print("Opção inválida!")


# ✔ INÍCIO DO PROGRAMA
opcoes()
menu_usuario()