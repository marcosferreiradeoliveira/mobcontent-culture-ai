# Configuração de Domínio no Registro.br para GitHub Pages

Este guia é específico para configurar um domínio .br no Registro.br para apontar para o GitHub Pages.

## Passo 1: Configurar o Domínio no GitHub

1. Acesse: https://github.com/marcosferreiradeoliveira/mobcontent-culture-ai/settings/pages
2. Na seção **Custom domain**, digite seu domínio:
   - Se usar `www`: `www.seudominio.com.br`
   - Se usar sem www: `seudominio.com.br`
3. Marque **Enforce HTTPS**
4. Clique em **Save**

## Passo 2: Acessar o Painel do Registro.br

1. Acesse: https://registro.br
2. Faça login com sua conta
3. Vá em **Meus Domínios** → Selecione seu domínio
4. Clique em **Gerenciar DNS** ou **Zona DNS**

## Passo 3: Configurar DNS no Registro.br

### Opção A: Usar Subdomínio www (RECOMENDADO) ⭐

Esta é a opção mais simples e recomendada:

1. No painel DNS do Registro.br, procure por registros do tipo **CNAME**
2. Se já existir um registro CNAME para `www`, edite-o
3. Se não existir, crie um novo registro:

**Configuração:**
```
Tipo: CNAME
Nome: www
Valor: marcosferreiradeoliveira.github.io
TTL: 3600 (ou padrão)
```

4. Salve as alterações

### Opção B: Usar Domínio Apex (sem www)

Se preferir usar apenas `seudominio.com.br` (sem www):

1. No painel DNS do Registro.br, procure por registros do tipo **A**
2. Você precisa criar ou editar 4 registros A para o domínio raiz:

**Registros A necessários:**
```
Registro 1:
Tipo: A
Nome: @ (ou deixe em branco para domínio raiz)
Valor: 185.199.108.153
TTL: 3600

Registro 2:
Tipo: A
Nome: @
Valor: 185.199.109.153
TTL: 3600

Registro 3:
Tipo: A
Nome: @
Valor: 185.199.110.153
TTL: 3600

Registro 4:
Tipo: A
Nome: @
Valor: 185.199.111.153
TTL: 3600
```

**⚠️ Importante:** Se você já tem outros registros A (como para email), mantenha-os e adicione estes 4 novos.

## Passo 4: Verificar Configuração no Registro.br

Após salvar, você pode verificar:

1. No painel do Registro.br, veja a lista de registros DNS
2. Confirme que os registros foram salvos corretamente
3. O Registro.br pode levar alguns minutos para processar as alterações

## Passo 5: Atualizar o Código para Usar Domínio Customizado

Após configurar o DNS, você precisa atualizar o workflow:

1. Edite o arquivo `.github/workflows/deploy.yml`
2. No step de Build, descomente a linha `VITE_CUSTOM_DOMAIN`:

```yaml
- name: Build
  run: npm run build
  env:
    NODE_ENV: production
    VITE_CUSTOM_DOMAIN: /  # Descomente esta linha
```

3. Faça commit e push:

```bash
git add .github/workflows/deploy.yml
git commit -m "Enable custom domain support"
git push origin main
```

## Passo 6: Aguardar Propagação

### Tempo de Propagação DNS
- **Registro.br**: Geralmente 5-30 minutos (pode levar até 2 horas)
- **Propagação global**: Pode levar até 48 horas em alguns casos

### Verificar Propagação
Você pode verificar se o DNS está propagado em:
- https://dnschecker.org/
- Digite seu domínio e verifique os registros A ou CNAME

### Verificar no GitHub
1. Volte em Settings → Pages
2. O GitHub mostrará o status do DNS:
   - ✅ **Verificado**: DNS configurado corretamente
   - ⚠️ **Não verificado**: Ainda aguardando propagação ou configuração incorreta

## Passo 7: Certificado SSL

Após o DNS estar configurado:
- O GitHub **automaticamente** cria um certificado SSL
- Pode levar **até 24 horas** para o certificado ser emitido
- Você verá um ícone de cadeado verde quando estiver pronto
- Certifique-se de que "Enforce HTTPS" está marcado

## Exemplo Prático: mobcontent.com.br

Se seu domínio for `mobcontent.com.br`:

### No GitHub Pages:
- Custom domain: `www.mobcontent.com.br` (recomendado)

### No Registro.br:
1. Acesse o painel DNS
2. Crie/edite registro CNAME:
   - Nome: `www`
   - Valor: `marcosferreiradeoliveira.github.io`
   - TTL: 3600

### No Código:
- Descomente `VITE_CUSTOM_DOMAIN: /` no workflow

### Resultado:
- Site disponível em: `https://www.mobcontent.com.br`
- Redirecionamento automático para HTTPS
- Certificado SSL válido

## Troubleshooting - Problemas Comuns

### ❌ "DNS not configured correctly" no GitHub
**Solução:**
- Verifique se os registros foram salvos no Registro.br
- Aguarde alguns minutos (propagação DNS)
- Verifique se o valor está correto (sem espaços extras)
- Para CNAME: deve ser exatamente `marcosferreiradeoliveira.github.io` (sem http:// ou https://)

### ❌ Site não carrega após configurar DNS
**Solução:**
- Aguarde a propagação DNS (pode levar até 2 horas)
- Verifique se o workflow do GitHub Actions executou com sucesso
- Certifique-se de que `VITE_CUSTOM_DOMAIN: /` está configurado no workflow
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

### ❌ Certificado SSL não aparece
**Solução:**
- O certificado é criado automaticamente, pode levar até 24h
- Certifique-se de que "Enforce HTTPS" está marcado
- Verifique se o DNS está propagado corretamente

### ❌ Email para o domínio parou de funcionar
**Solução:**
- Se você usa email no domínio (ex: contato@seudominio.com.br)
- Mantenha os registros MX existentes
- Adicione apenas os registros A ou CNAME para o GitHub Pages
- Não remova registros existentes que não sejam relacionados ao site

## Dicas Importantes

✅ **Use www (subdomínio)**: Mais simples, funciona melhor com HTTPS, e não interfere com outros serviços (email, etc.)

✅ **Não crie arquivo CNAME manualmente**: O GitHub cria automaticamente quando você configura o domínio

✅ **Mantenha outros registros DNS**: Se você tem email, subdomínios, etc., mantenha esses registros

✅ **Aguarde a propagação**: DNS pode levar tempo, seja paciente

✅ **Verifique regularmente**: Use ferramentas como dnschecker.org para monitorar a propagação

## Checklist Final

- [ ] Domínio configurado no GitHub Pages (Settings → Pages)
- [ ] Registros DNS criados no Registro.br (CNAME para www ou A para domínio raiz)
- [ ] `VITE_CUSTOM_DOMAIN: /` descomentado no workflow
- [ ] Commit e push das alterações feitos
- [ ] DNS propagado (verificado em dnschecker.org)
- [ ] Certificado SSL ativo (pode levar até 24h)
- [ ] Site acessível via HTTPS

Após completar todos os passos, seu site estará disponível no seu domínio customizado! 🎉



