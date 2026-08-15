# Como colocar no ar

Duas partes: **guardar as respostas** (Google Sheets) e **gerar o link** (GitHub Pages).
Tudo grátis, sem prazo de validade. Uns 20 minutos no total.

---

## Parte 1: guardar as respostas

### 1. Crie a planilha

Abra <https://sheets.new> e dê um nome, algo como **Vigília 2026 · Respostas**.
Não precisa criar coluna nenhuma, o script faz isso sozinho na primeira resposta.

### 2. Cole o script

Nessa mesma planilha: menu **Extensões → Apps Script**.

Apague todo o conteúdo que aparecer no editor e cole o arquivo `apps-script.gs`
inteiro no lugar. Salve (ícone de disquete ou `Ctrl+S`).

### 3. Publique como app da web

No editor do Apps Script, botão **Implantar → Nova implantação**.

- No ícone de engrenagem ao lado de "Selecione o tipo", escolha **App da Web**
- **Executar como:** Eu (seu e-mail)
- **Quem pode acessar:** **Qualquer pessoa** ← esse é o passo que costuma passar batido
- Clique em **Implantar**

Na primeira vez o Google pede autorização. Ele vai mostrar um aviso de
"app não verificado", porque o script é seu e não passou por revisão do Google.
Clique em **Avançado → Acessar (nome do projeto)** e depois em **Permitir**.

No fim ele mostra uma **URL do app da Web**, terminada em `/exec`. Copie.

### 4. Teste

Cole essa URL no navegador. Tem que aparecer algo assim:

```json
{"ok":true,"status":"no ar","respostas":0}
```

Se apareceu, está funcionando.

### 5. Ligue a página no script

Abra o `index.html`, procure a linha:

```js
const ENDPOINT = '';
```

Cole a URL entre as aspas:

```js
const ENDPOINT = 'https://script.google.com/macros/s/AKfy.../exec';
```

Salve, abra o `index.html` no navegador e envie uma resposta de teste.
Ela tem que aparecer na planilha, na aba **Respostas**, com data e hora.

> Se você mexer no `apps-script.gs` depois, precisa fazer
> **Implantar → Gerenciar implantações → editar (lápis) → Versão: Nova versão**.
> Só salvar o script não atualiza o app que está no ar.

---

## Parte 2: gerar o link

### 1. Crie o repositório

Em <https://github.com/new>:

- **Repository name:** `renascer`
- Deixe **Public** (o GitHub Pages só é grátis em repositório público)
- Não marque nenhuma opção de inicialização

### 2. Suba os arquivos

Na tela seguinte, clique em **uploading an existing file** e arraste:

- `index.html`
- `logo-renascer.png`

Só esses dois. O `apps-script.gs` e este arquivo aqui não precisam ir
(não atrapalham se forem, mas não servem pra nada no site).

Clique em **Commit changes**.

### 3. Ligue o Pages

No repositório: **Settings → Pages** (menu da esquerda).

- **Source:** Deploy from a branch
- **Branch:** `main`, pasta `/ (root)`
- **Save**

Espere de 1 a 2 minutos e recarregue a página. Vai aparecer o link:

```
https://SEU-USUARIO.github.io/renascer/
```

Esse é o link pra mandar no grupo.

---

## Depois

**Ler as respostas:** é só abrir a planilha. Cada linha é uma resposta,
com data e hora. Pra imprimir ou levar pra reunião de equipe,
**Arquivo → Fazer o download → PDF** ou **CSV**.

**Compartilhar com a equipe:** botão **Compartilhar** da planilha,
adicione o e-mail da Tarsilla, do Gabriel e do Igor como **Leitor**.

**Mudar alguma coisa no site depois:** edite o `index.html`, suba o arquivo
de novo no GitHub por cima do antigo, e em 1 minuto o link já mostra a versão nova.

**Encerrar as respostas:** no Apps Script, **Implantar → Gerenciar implantações →
Arquivar**. O site continua no ar, mas para de aceitar envios.

---

## Sobre o anonimato

A planilha guarda **só a data/hora e o texto**. Nome, e-mail e IP não são
gravados em lugar nenhum, mesmo que quem responda esteja logado no Google.

O único detalhe: como a data e a hora ficam registradas, em tese dá pra
cruzar "quem respondeu logo depois que eu mandei o link no grupo".
Pra um grupo de igreja isso é irrelevante, mas se quiser anonimato total
me avisa que eu tiro a coluna de data.
