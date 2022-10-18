# CDA-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6b0a6ce-3595-4a53-8491-9b8e501aad72/deploy-status)](https://app.netlify.com/sites/cdanatal/deploys)

## Instalando o Jekyll

Antes de instalarmos o Jekyll, precisamos instalar
todas as dependências necessárias.

```bash
sudo apt-get install ruby-full build-essential
```

Os comandos abaixo vai adicionar variáveis de ambiente
ao seu arquivo `~/.bashrc` para configurar
o caminho de instalação da gem. Assim você não precisar
rodar como superusuário(root).

 ```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Por fim, vamos instalar o Jekyll:

```bash
gem install jekyll bundler
```

## Rodando o projeto

Instale as dependências do projeto:

```bash
bundle install
```

Rodando o site:

```bash
bundle exec jekyll serve -l
```
