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

* Quando clicar 2 vezes no item, equipar ele ✓ -> Tentei fazer isso e usar os emits para conseguir dar update no player mas não funcionou como esperado, então fui com o método zuado de dar refresh na página

* Mover card expandido (detalhes do item) para um outro componente: PlayerInventoryItemExpanded ✓

* Mostrar slot do item no card expandido ✓

* Fazer o item equipado ✓


## 09/10/2022


- Unificar componente de equipado/nao equipado, eles são a mesma coisa - ✓ 

* Eles não são parecidos mas cortei um dos arquivos fora, não sei se você queria que generalizasse a primeira parte, não fiz porque achei que nem valia a pena

- Pensar em visualização de loading para quando item estiver sendo equipado/desequipado ✓

- Fazer erro na tela quando tenta equipar um item inequipavel ✓

- Mostrar no item, antes de enviar a requisição de equipar, que ele não é equipavel ✓

- Fazer mais 4 colunas no banco de dados: currentHealth, maxHealth, currentMana, maxMana ✓

- Fazer mais 1 coluna no banco de dados: experience ✓

- Nível é uma propriedade virtual calculada baseada no calculo de nível ✓


## 18/10/2022

- Fazer endpoint que cria a batalha (e monstro) ✓ 

- Fazer endpoint que lista as batalhas de um jogador ✓

- Fazer endpoint que cria um round numa batalha ✓ 

## 06/11/2022

- Sistema de batalha

* Endpoint I -> create-monsters-for-battle ✓ 

* Create monsters for battle, sem parâmetro, cria e retorna 3 monstros (baseados no nível do player) ✓ 

* Endpoint II -> create-battle ✓ 

* Creates battle, Recebe ID do monstro para a batalha entre os 3 id de monstro ✓ 

* Endpoint III -> battle/id/rounds ✓ 

* Creates round in battle, Recebe ID da batalha e cria um round para aquela batalha ✓

- Deletar endpoint antigos ✓

- Colocar validação nos endpoints

- O dano do player deve levar em conta sua classe ✓

- Fixar tudo, visualmente ✓ 