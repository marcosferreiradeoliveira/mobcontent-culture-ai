# Guia de desempenho – mobcontent-culture-ai

Como avaliar e melhorar a performance do site quando houver travamentos ou lentidão.

---

## 1. Como medir o desempenho

### Chrome DevTools – aba Performance

1. Abra o site e pressione **F12** (ou Cmd+Option+I no Mac).
2. Vá na aba **Performance**.
3. Clique em **Record** (círculo), use o site por alguns segundos (scroll, mover o mouse, abrir páginas) e pare.
4. Analise:
   - **Main**: tempo de JavaScript (picos longos = possíveis travamentos).
   - **Raster / GPU**: trabalho de pintura e composição (animações pesadas).
   - **Eventos amarelos** longos: funções JS que demoram; clique para ver o trecho (call tree).

**O que procurar:** `mousemove` disparando muitas vezes, `setTimeout`/`setInterval` em excesso, funções que aparecem sempre no topo do call tree.

### Chrome DevTools – aba Lighthouse

1. Abra o site, **F12** → aba **Lighthouse**.
2. Marque **Performance** (e opcionalmente **Best practices**).
3. Escolha **Mobile** ou **Desktop** e **Analyze page load**.
4. Veja a nota e as sugestões (reduzir JS, imagens, etc.).

### React DevTools Profiler

1. Instale a extensão [React Developer Tools](https://react.dev/learn/react-developer-tools).
2. Abra o **Profiler** (aba ao lado de Components).
3. Clique em **Record**, use o site e pare.
4. Veja quais componentes re-renderizam mais e quanto tempo cada um leva (flamegraph).

Útil para: identificar re-renders desnecessários e componentes lentos.

### Redução de movimento / “preferir menos movimento”

No código, podemos respeitar a preferência do usuário por menos animação (acessibilidade e performance):

- `window.matchMedia('(prefers-reduced-motion: reduce)').matches`  
- Se for `true`, desativar ou simplificar: trail do cursor, partículas, animações decorativas e typing effect.

---

## 2. O que costuma impactar (e o que já foi feito)

| Item | Impacto | Status / sugestão |
|------|--------|--------------------|
| **Cursor trail** (`useCursorTrail`) | Alto: criava um DOM a cada `mousemove`. | ✅ Throttle (1 ponto a cada 100 ms), desativado em touch, limite de 12 pontos, cleanup correto. |
| **Cursor customizado (Hero)** | Médio: atualizava a cada `mousemove`. | ✅ Atualização apenas via `requestAnimationFrame` (1x por frame). |
| **useTypingEffect** | Médio: vários `setState` e timeouts sem cleanup. | ✅ Cleanup de todos os timeouts e ref para evitar setState após unmount. |
| **Partículas (PillarsSection)** | Alto: 3 instâncias do tsparticles (30 partículas cada). | ⚠️ Considerar desativar em mobile ou reduzir número; carregar só quando a seção estiver visível. |
| **Animações CSS** | Médio: `animate-electric-flow`, `animate-parallax-float`, `neural-pulse` em vários elementos. | ⚠️ Em dispositivos fracos, desativar ou reduzir (ex.: `prefers-reduced-motion`). |
| **Imagens grandes** | Médio: hero e backgrounds em full size. | Usar `srcset`/sizes ou versões menores para mobile; lazy load abaixo da dobra. |
| **Vídeo no hero (VideoProduction)** | Alto: autoplay + decode. | Manter `muted` e `playsInline`; considerar poster e carregar vídeo só quando visível. |

---

## 3. Desativar efeitos pesados (debug / usuários sensíveis)

Para testar se o site fica estável sem certos efeitos:

1. **Cursor trail**  
   Comentar ou remover as chamadas a `useCursorTrail()` nas páginas (Hero, AI, VideoProduction, Portfolio).

2. **Partículas nos pilares**  
   Em `PillarsSection.tsx`, não renderizar `<ParticleHoverEffect />` ou passar uma prop para desligar (ex.: `enableParticles={false}` e não montar o tsparticles).

3. **Typing effect**  
   No `useTypingEffect`, você pode expor uma opção `disabled: true` que retorna o texto completo sem animação (evita dezenas de setState).

4. **Animações CSS**  
   No `index.css` ou em um wrapper, usar:

   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

   Assim você mantém o layout mas remove o custo das animações para quem pede menos movimento.

---

## 4. Checklist rápido quando o site travar

1. Abrir **Performance** no DevTools, gravar e ver onde o **Main** fica mais tempo (funções no call tree).
2. Verificar se **mousemove** ou **scroll** aparecem em excesso; se sim, revisar listeners (throttle/RAF/passive).
3. No **React Profiler**, ver se algum componente re-renderiza a cada movimento ou scroll.
4. Desativar **cursor trail** e **partículas** e testar de novo.
5. Testar em **Mobile** (throttling de CPU no DevTools) para simular dispositivo mais fraco.

Se quiser, na próxima etapa podemos adicionar um “modo leve” (variável de ambiente ou preferência do usuário) que desativa trail, partículas e typing effect de uma vez.
