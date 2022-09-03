# rpg-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 17/07/2022

* Fazer aparecer nome do seu personagem na Home ✓ Mais ou menos

- Login salva no vuex (e no local storage) ✓
- Salvar o token para conseguir chamar o /me no Home e pegar o resto dos dados ✓

* Logins corretos levam para o Home ou "/" ✓

* Logins incorretos abrem um snakbar "https://vuetifyjs.com/en/components/snackbars" ✓

* Corrigir Vuetify ✓

## 31/07/2022

* Ajeitar proteção de rota

- Meta que diz se a rota é ou não protegida ✓

- Se for protegida e o usuário não estiver logado mande ele para login ✓

- Qualquer outro caso deixe ele passar ✓


* Criar página exclusiva para ver status do jogador (items equipados, inventário, vida, etc.) ✓

- Fazer axios rodar na action ✓

## 03/09/2022

* Quando clicar 2 vezes no item, equipar ele

* Mover card expandido (detalhes do item) para um outro componente: PlayerInventoryItemExpanded

* Mostrar slot do item no card expandido

* Fazer o item equipado