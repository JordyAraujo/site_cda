# CDA-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6b0a6ce-3595-4a53-8491-9b8e501aad72/deploy-status)](https://app.netlify.com/sites/cdanatal/deploys)

## Instalando o Jekyll em Windows

Primeiro, é preciso instalar o Ruby no RubyInstaller [aqui](https://rubyinstaller.org/downloads/).

 No último estágio do assistente de instalação rode o seguinte comando:

```bash
ridk install
```

Entre as opções, escolha as ferramentas de desenvolvimento MSYS2 e MINGW.

Após a instalação, abra um novo prompt de comando e instale o Jekyll com o comando abaixo:

```bash
gem install jekyll bundler
```

Para verificar se a instalação deu certo, basta rodar o comando `jekyll -v`, se retornar a versão do Jekyll, então deu tudo certo.

## Instalando o Jekyll em Linux

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
