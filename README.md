# 🚀 App Boilerplate

Базовая конфигурация **React приложения** с современным стеком технологий для быстрого старта разработки.

---

## 📦 Технологии:

- **[React](https://react.dev/)** – библиотека для построения UI
- **[TypeScript](https://www.typescriptlang.org/)** – типизация и надежность кода
- **[Vite](https://vitejs.dev/)** – сборщик и dev-сервер
- **[TanStack Query](https://tanstack.com/query/latest)** – работа с серверным состоянием и запросами
- **[Ky](https://github.com/sindresorhus/ky)** – удобный HTTP-клиент
- **[Zustand](https://github.com/pmndrs/zustand)** – легковесное управление состоянием
- **[Styled-Components](https://styled-components.com/)** – стилизация через CSS-in-JS
- **[i18n (react-i18next)](https://react.i18next.com/)** – мультиязычность и локализация
- **[ESLint](https://eslint.org/)** – линтер для кода
- **[Prettier](https://prettier.io/)** – автоформатирование кода
- **[Stylelint](https://stylelint.io/)** – линтер для стилей
- **[Husky](https://typicode.github.io/husky/)** + **[lint-staged](https://github.com/okonet/lint-staged)** – pre-commit хуки
- **[FSD (Feature-Sliced Design)](https://feature-sliced.design/ru/docs/get-started/overview)** – архитектура проекта

---

## ⚙️ Установка:

```
# Клонировать репозиторий
git clone git@github.com:etoyadadaya/app-boilerplate.git

# Перейти в директорию
cd app-boilerplate

# Установить зависимости
npm i
```

---

## 🚀 Скрипты:

`npm run dev` - Запуск dev-сервера Vite

`npm run build` - Сборка проекта (TypeScript + Vite)

`npm run lint` - Запуск ESLint

`npm run lint:fix` - ESLint с автоисправлениями

`npm run stylelint` - Проверка стилей

`npm run stylelint:fix` - Исправление ошибок стилей

`npm run prettier` - Форматирование файлов Prettier

`npm run test` - Запуск тестов через Vitest

`npm run prepare` - Установка Husky (pre-commit хуки)

---
