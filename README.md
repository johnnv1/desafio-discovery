# Bluegame: Desafio Discovery
Como o tempo passa rápido... Já estamos no penúltimo desafio, espero que fique entre os 10 primeiros. Leia atentamente as instruções abaixo e boa sorte!

## Passo a Passo

1. Vocé precisará de uma conta na IBM Cloud. Caso ainda não tenha, corra e crie logo a sua clicando [aqui][sign_up]. É necessário ter uma conta aqui no GitHUb.

2. Baixe e instale a ferramenta [Cloud-foundry CLI][cloud_foundry], caso ainda não tenha feito.

3. Faça um fork (Opção no canto superior à direita, para copiar este projeto para a sua conta GitHub) deste projeto e clone (o fork que você acabou de criar) para sua máquina.

4. Crie o serviço Discovery (Free) em sua conta clicando [aqui][discovery-link]. Vocé será redirecionado para sua Dashboard.

5. Em sua dashboard, selecione o serviço recém criado do Discovery. Clique em `Service credentials`, agora clique em `New Credential` (o botão azul que fica do lado direito da página). Após aparecer a modal de criação (modal com título Add new credential), apenas clique em `Add`.

6. Uma vez criada a credential, clique na action `View credentials`. Copie o JSON gerado para um arquivo temporário, logo iremos usá-lo.

7. Ainda na mesma página, volte para a sessão `Manage`.

8. Clique em `Launch Tool`. Você verá um box com o texto `Create a data collection`, clique nesta box para criar uma nova coleção. Caso veja telas de confirmação clique em continue.

9. Agora você verá uma modal onde irá criar um coleção. Escolha um nome e clique em `create`.

10. Agora clique em `Use this collection in API` e copie os valores `Collection Id` e `Environment Id` para um arquivo temporário.

11. Siga os passos apresentados neste [vídeo][video-link].

12. Crie um arquivo chamado `.env` no diretório root do repo clonado, usando o arquivo `env.sample` como template, usando o comando:

  ```none
  cp env.sample .env
  ```

O arquivo `.env` deve conter, em um primeiro momento, o seguinte conteúdo:

  ```none
    DISCOVERY_USERNAME=
    DISCOVERY_PASSWORD=
    DISCOVERY_COLLECTION_ID=
    DISCOVERY_ENVIRONMENT_ID=
  ```

13. Lembra do arquivo temporário, agora iremos usá-lo. Copie o valor `username`, `password`, `collection id` e `environment id` para as respectivas variáveis `DISCOVERY_USERNAME`, `DISCOVERY_PASSWORD`, `DISCOVERY_COLLECTION_ID` e `DISCOVERY_ENVIRONMENT_ID` no arquivo `.env`.
Agora o arquivo `.env` deverá estar assim:

  ```none
    DISCOVERY_USERNAME=<VALOR USERNAME COPIADO SEM ÁSPAS>
    DISCOVERY_PASSWORD=<VALOR PASSWORD COPIADO SEM ÁSPAS>
    DISCOVERY_COLLECTION_ID=<VALOR COLLECTION ID COPIADO SEM ÁSPAS>
    DISCOVERY_ENVIRONMENT_ID=<VALOR ENVIRONMENT ID COPIADO SEM ÁSPAS>
  ```

14. Estamos quase lá. Agora edite o arquivo `manifest.yml` e mude `<sua-id>` para que seja a mesma id que você recebeu no assunto em seu email de comfirmação de inscrição. Esse passo é muito importante para posterior validação de seu desafio.
  ```yaml
  ---
applications:
    - name: <sua-id>-discovery
      path: .
      memory: 256M
      instances: 1
      buildpack: sdk-for-nodejs
      route: mybluemix.net
      command: npm start
      disk_quota: 1024M
  ```

15. A partir de agora você precisa instalar (caso ainda não tenha) o NodeJS e o geranciador de pacotes NPM. Siga as instruções disponíveis em https://docs.npmjs.com/getting-started/installing-node. Detalhe muito importante, você precisa pelo menos da versão 8.9.4 do node.

16. Com tudo instalado. Execute o seguinte comando, na pasta do projeto, para instalar as dependências do projeto:

  ```none
  npm install
  ```

17. Para executar a aplicação localmente execute o comando:

  ```none
  npm run dev
  ```
18. Acesse o endereço [http://localhost:8080](http://localhsot:8080).

19. Para testar sua applicação, envie o aquivo `cpbr11_wks.docx`. É esperado que a seguinte saída, caso não seja mesma verique os passos acima antes de enviar:
```none
Funcionário(s) IBM: Eu; Eu; Sergio Gama; Eu
Funcionário(s) Volkswagem: pai
Funcionário(s) Bradesco: Carlos
Funcionário(s) Usiminas: tio
Funcionário(s) Claro: João
Funcionário(s) Ferrari: Pedro
Funcionário(s) Petrobras: mãe
Funcionário(s) Banco do Brasil: Eu
Funcionário(s) Campus Party: Carlos
Funcionário(s) Audi: pai
Funcionário(s) Itaú: amigo
Funcionário(s) Shopping Iguatemi: prima
```


20. Precisamos agora logar na IBM Cloud, para isto execute o seguinte comando.
```none
cf api https://api.ng.bluemix.net
cf login
```

21. Após feito o login, execute o seguinte comando para fazer o deploy de sua aplicação.
```sh
    npm run build && cf push
```
22. Veja que legal, você consiguiu terminar o desafio, agora acesse a página do [bluegame][page-link] no facebook e diga para o bot: `acabei`.

[sign_up]: https://console.ng.bluemix.net/registration/
[page-link]: https://www.facebook.com/ibmbluegame/
[dashboard-link]: https://console.bluemix.net/dashboard/apps
[discovery-link]: https://console.bluemix.net/catalog/services/discovery
[cloud_foundry]: https://github.com/cloudfoundry/cli
[video-link]: https://youtu.be/n4SR395FTO0