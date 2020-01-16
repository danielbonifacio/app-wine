# App Wine

Bem vindo ao segundo projeto mais importante da Wine: A maior loja de vinhos da América Latina.

Você foi convidado a fazer parte de algo grande. Fique feliz! :smile:

## Básico

O App da Wine passou por uma fase obscura, onde cada feature recém criada, já era legacy.

Mas, se você está lendo isso aqui, significa que o refactor do @danielbonifacio passou, e agora temos uma documentação. Seja grato a ele e a todos os envolvidos.

Todo mundo batalhou muito para conseguir chegar nesse nível de documentação e estabilidade. Por favor, valorize.

### Must have

- Todos os componentes do aplicativo devem ser padronizados, **sem exceção**;
- Você deve configurar o ambiente idêntico ao do time;
- Todo PR será analisado por, no mínimo, 2 membros do time, sendo você um deles;
- **Tudo** em inglês.

Já dizia o sábio Raul:

> "Eu não sou besta para tirar onda de herói, sou vacinado, sou cowboy..."

## Ambiente

Para evitar conflitos e dores de cabeça já conhecidas, resolvemos padronizar algumas coisas, como IDE, Package Manager, extensões, etc.

``` shell
# antes de tudo
brew install yarn

yarn global add eslint
yarn global add react-native

brew install cocoapods
brew install watchman

# provavelmente vai demorar uns 10 minutos
cd ios && pod install && cd ..
```

### IDE

Use o Visual Studio Code.

Instale as extensões:

- vscode-styled-components;
- ESLint;
- GitLens;
- Image preview;
- VSCode Great Icons; (recomendo)

Reinicie o VSCode. Por precaução.

### Package manager

Estamos usando por padão o Yarn. Não apenas por preferência, mas, também por que usamos algumas dependências que apenas conseguem ser resolvidas com ele.

Sabemos que isso é estranho. Podemos orquestrar uma melhor análise, posteriormente. Mas, por hora, use o Yarn.

### Contribuindo

O time do App segue um padrão similar ao do Git Flow.

1. Navegue até a branch base mais atual (geralmente `release/release-x.x.x`)
2. **A partir dela**, crie sua branch;
3. Suba sua branch para o repositório remoto;
4. Abra um Pull Request;
5. Corrija os Change Requests, caso haja;
6. Sua branch será mergeada pelo Scrum Master.

Repita o processo eternamente.

Exemplos de nomes branches:

- _feature_/**wineup**-list-ui-improvement
- _hotfix_/**winelist**-infinite-scroll-bug
- _feature_/**checkout**-add-applepay
- _hotfix_/**checkout**-applepay-bug

O nome do seu PR também deve ser padronizado:

- Feature - WineUp: list UI Improvement
- Hotfix - Winelist: infinite scroll bug
- Feature - Checkout: add ApplePay
- Hotfix - Checkout: ApplePay bug 

${Tipo de PR} - ${Módulo}: ${Descrição do que foi feito}

## Arquitetura e Desenvolvimento

No projeto você deve notar a presença do WineSDK.
