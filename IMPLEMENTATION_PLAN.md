# Plano de Implementação - Site Tropicália

## Objetivo
Criar um site acessível inspirado no design Tropicália com transições suaves usando ScrollReveal.

## Requisitos Técnicos
- Next.js 15+ com TypeScript
- Tailwind CSS para estilização
- ScrollReveal para animações suaves
- Foco em acessibilidade (WCAG 2.1)
- Responsivo para todos os dispositivos

## Estrutura de Arquivos a Criar
1. `src/app/layout.tsx` - Layout principal da aplicação
2. `src/app/page.tsx` - Página inicial
3. `src/components/Header.tsx` - Componente do cabeçalho
4. `src/components/HeroSection.tsx` - Seção principal com "Boas-vindas"
5. `src/components/ScrollRevealWrapper.tsx` - Wrapper para animações

## Etapas de Implementação

### Fase 1: Estrutura Base
- [ ] Criar layout.tsx com configurações de acessibilidade
- [ ] Criar page.tsx com estrutura básica
- [ ] Instalar e configurar ScrollReveal

### Fase 2: Componentes
- [ ] Header com navegação acessível
- [ ] HeroSection com gradientes vibrantes
- [ ] Implementar ScrollReveal nas seções

### Fase 3: Estilização e Acessibilidade
- [ ] Aplicar cores tropicais (laranja, rosa, amarelo)
- [ ] Garantir contraste adequado para acessibilidade
- [ ] Adicionar ARIA labels e navegação por teclado
- [ ] Implementar foco visível

### Fase 4: Responsividade e Testes
- [ ] Testar em diferentes tamanhos de tela
- [ ] Verificar acessibilidade com ferramentas
- [ ] Otimizar performance

## Paleta de Cores
- Laranja: #FF6B35, #FF8C42
- Rosa: #FF69B4, #FFB6C1  
- Amarelo: #FFD700, #FFA500
- Neutros: #FFFFFF, #F5F5F5, #333333

## Considerações de Acessibilidade
- Contraste mínimo 4.5:1 para texto
- Navegação por teclado funcional
- ARIA labels em todos os elementos interativos
- Texto alternativo para imagens
- Foco visível em todos os elementos focáveis
