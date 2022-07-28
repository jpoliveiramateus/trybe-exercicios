Passo a passo executado no terminal durante o desenvolvimento dos exercícios.

1 - Crie e execute um container no modo interativo.

- newgrp docker
- docker run -it debian:stable-slim

2 - No terminal, você deve conseguir rodar o comando cat /etc/*-release

- cat /etc/*-release

3 - Encerre o terminal.

- exit

4 - Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.

- docker ps -a

5 -  Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.

- docker start *id do container
- docker ps

6 - Retome o container que foi criado anteriormente neste exercício.

- docker attach *id do container

7 - Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container e encerre o terminal.

- cat /etc/debian_version
- exit

8 - Remova somente o container criado para esse exercício.

- docker rm *id do container
- docker ps -a

Bônus - Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.

- docker run -it --rm andrius/ascii-patrol



