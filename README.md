# Teste com Jest

Projeto de exemplo demonstrando testes unitários com Jest e integração contínua (CI).

## 📋 Descrição

Este projeto contém uma função de soma (`sum.js`) com validações e testes unitários abrangentes.

## 🚀 Como usar

### Instalação

```bash
npm install
```

### Executar testes

```bash
npm test
```

### Executar testes em modo watch

```bash
npm run test:watch
```

### Gerar relatório de cobertura

```bash
npm run test:coverage
```

## 🔧 Testes

Os testes cobrem os seguintes cenários:
- Soma de números positivos
- Validação de tipos (não permite strings)
- Soma de números negativos
- Soma de números decimais
- Edge cases e validações

## 🔄 CI/CD

O projeto utiliza GitHub Actions para integração contínua. A pipeline:

- ✅ Executa testes em múltiplas versões do Node.js (16.x, 18.x, 20.x)
- ✅ Gera relatórios de cobertura
- ✅ Envia cobertura para Codecov
- ✅ Configura um threshold mínimo de cobertura (80%)

### Workflow

O workflow é acionado em:
- Push para branches `master`, `main` ou `develop`
- Pull requests para as branches acima

## 📊 Cobertura de Testes

A cobertura mínima exigida é de 80% para:
- Branches
- Funções
- Linhas
- Statements

## 📝 Estrutura

```
.
├── .github/
│   └── workflows/
│       └── ci.yml          # Configuração da CI
├── coverage/               # Relatórios de cobertura (gerado)
├── sum.js                  # Função principal
├── sum.test.js             # Testes unitários
├── package.json            # Configuração do projeto
├── .gitignore             # Arquivos ignorados pelo Git
└── README.md              # Este arquivo
```

## 🛠️ Tecnologias

- **Node.js**: Runtime JavaScript
- **Jest**: Framework de testes
- **GitHub Actions**: CI/CD
- **Codecov**: Relatórios de cobertura

## 📄 Licença

ISC

