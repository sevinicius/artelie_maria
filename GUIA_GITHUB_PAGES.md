# 📖 Guia Completo: Colocar o Site Online no GitHub Pages

## 🚀 Método Simples (Recomendado)

### Passo 1: Acessar as Configurações do Repositório

1. Acesse seu repositório no GitHub: `https://github.com/sevinicius/artelie_maria`
2. Clique na aba **"Settings"** (Configurações) no topo do repositório
3. No menu lateral esquerdo, role até encontrar a seção **"Pages"** e clique nela

### Passo 2: Configurar o GitHub Pages

1. Na seção **"Source"** (Fonte), você verá um dropdown
2. Selecione **"Deploy from a branch"**
3. Escolha a branch **"main"** (ou "master" se for o caso)
4. Selecione a pasta **"/ (root)"** (raiz)
5. Clique no botão **"Save"** (Salvar)

### Passo 3: Aguardar o Deploy

1. Após salvar, você verá uma mensagem indicando que o GitHub Pages está sendo configurado
2. Aguarde alguns minutos (geralmente 1-3 minutos)
3. Uma mensagem verde aparecerá com o link do seu site publicado

### Passo 4: Acessar seu Site

Seu site estará disponível em:
```
https://sevinicius.github.io/artelie_maria/
```

**Nota:** O link pode levar alguns minutos para ficar ativo na primeira vez.

---

## 🔍 Verificar se está Funcionando

1. Volte para a aba **"Code"** do seu repositório
2. Você verá um badge laranja/amarelo indicando "website" ao lado do link do repositório
3. Clique nele para acessar seu site

---

## ⚠️ Solução de Problemas

### Site não aparece após alguns minutos?
- Verifique se o repositório é **público** (GitHub Pages gratuito só funciona em repositórios públicos)
- Verifique se há erros na aba **"Actions"** do repositório
- Certifique-se de que o arquivo `index.html` está na raiz do repositório

### Erro 404?
- Aguarde mais alguns minutos (pode levar até 10 minutos na primeira vez)
- Limpe o cache do navegador (Ctrl + F5)
- Verifique se o caminho está correto: `sevinicius.github.io/artelie_maria/`

### As imagens não aparecem?
- Verifique se todas as imagens foram commitadas e estão na pasta `imagens/`
- Verifique os caminhos no arquivo `script.js` - devem ser relativos (ex: `imagens/nome.jpg`)

---

## 📝 Configurações Adicionais (Opcional)

### Personalizar o Domínio (Opcional)
Se você tiver um domínio próprio, pode configurá-lo nas mesmas configurações do GitHub Pages.

### Atualizar o Site
Sempre que você fizer um `git push` para o repositório, o GitHub Pages atualizará automaticamente o site em alguns minutos.

---

## ✅ Checklist Final

- [ ] Repositório é público
- [ ] GitHub Pages está habilitado nas configurações
- [ ] Branch selecionada é "main" e pasta é "/ (root)"
- [ ] Aguardou alguns minutos após salvar
- [ ] Site está acessível em `https://sevinicius.github.io/artelie_maria/`

---

## 🎉 Pronto!

Seu site estará online e acessível para qualquer pessoa na internet!

