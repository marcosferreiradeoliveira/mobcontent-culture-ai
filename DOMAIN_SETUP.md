# Configuração de Domínio Customizado para GitHub Pages

Este guia explica como configurar um domínio customizado para seu site no GitHub Pages.

## Passo 1: Configurar o Domínio no GitHub

1. Acesse o repositório no GitHub: `https://github.com/marcosferreiradeoliveira/mobcontent-culture-ai`
2. Vá em **Settings** → **Pages**
3. Na seção **Custom domain**, digite seu domínio (ex: `mobcontent.com.br` ou `www.mobcontent.com.br`)
4. Marque a opção **Enforce HTTPS** (recomendado)
5. Clique em **Save**

## Passo 2: Configurar DNS no Provedor do Domínio

Você precisa criar registros DNS no provedor onde comprou seu domínio. Existem duas opções:

### Opção A: Domínio Apex (sem www)
Exemplo: `mobcontent.com.br`

Crie os seguintes registros **A**:
```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.108.153
TTL: 3600 (ou padrão)

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.109.153
TTL: 3600

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.110.153
TTL: 3600

Tipo: A
Nome: @ (ou deixe em branco)
Valor: 185.199.111.153
TTL: 3600
```

### Opção B: Subdomínio www
Exemplo: `www.mobcontent.com.br`

Crie um registro **CNAME**:
```
Tipo: CNAME
Nome: www
Valor: marcosferreiradeoliveira.github.io
TTL: 3600 (ou padrão)
```

**Recomendação**: Use a Opção B (www) pois é mais simples e funciona melhor com HTTPS.

## Passo 3: Atualizar o Código para Usar Domínio Customizado

Após configurar o domínio no GitHub, você precisa atualizar o código:

1. Crie um arquivo `.env.production` na raiz do projeto:
```env
VITE_CUSTOM_DOMAIN=/
```

2. Ou configure diretamente no workflow do GitHub Actions (recomendado):

Edite o arquivo `.github/workflows/deploy.yml` e adicione a variável de ambiente no step de Build:

```yaml
- name: Build
  run: npm run build
  env:
    NODE_ENV: production
    VITE_CUSTOM_DOMAIN: /
```

## Passo 4: Aguardar Propagação DNS

- Pode levar de alguns minutos até 48 horas para o DNS propagar
- Você pode verificar o status em: https://dnschecker.org/
- O GitHub mostrará um aviso se o DNS não estiver configurado corretamente

## Passo 5: Verificar Certificado SSL

Após a propagação do DNS, o GitHub automaticamente:
- Criará um certificado SSL (pode levar até 24 horas)
- Habilitará HTTPS para seu domínio
- Você verá um ícone de cadeado verde no GitHub Pages settings

## Troubleshooting

### O domínio não está funcionando
1. Verifique se os registros DNS estão corretos
2. Aguarde a propagação DNS (pode levar até 48h)
3. Verifique se o domínio está configurado corretamente no GitHub Pages

### Erro de certificado SSL
- O GitHub cria o certificado automaticamente, pode levar até 24 horas
- Certifique-se de que "Enforce HTTPS" está marcado

### Site mostra 404
- Verifique se o workflow do GitHub Actions está executando corretamente
- Certifique-se de que a variável `VITE_CUSTOM_DOMAIN` está configurada

## Notas Importantes

- ⚠️ **Não** crie um arquivo `CNAME` manualmente na pasta `public` - o GitHub cria automaticamente
- ✅ Use sempre HTTPS (marque "Enforce HTTPS" no GitHub)
- ✅ Prefira usar `www` (subdomínio) em vez de domínio apex para melhor compatibilidade
- ✅ Após configurar o domínio, o GitHub Pages pode levar alguns minutos para atualizar

## Exemplo de Configuração Completa

Se seu domínio for `www.mobcontent.com.br`:

1. **No GitHub Pages**: Configure `www.mobcontent.com.br`
2. **No DNS**: Crie CNAME apontando `www` para `marcosferreiradeoliveira.github.io`
3. **No código**: Configure `VITE_CUSTOM_DOMAIN=/` no workflow
4. **Aguarde**: Propagação DNS e certificado SSL (até 24h)

Após isso, seu site estará disponível em `https://www.mobcontent.com.br` 🎉



