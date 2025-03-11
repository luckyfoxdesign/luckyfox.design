# Используем официальный Node.js образ
FROM node:23-bookworm-slim

# Устанавливаем рабочую директорию
WORKDIR /sveltekit

COPY . .

# Устанавливаем зависимости проекта
RUN npm install

# Открываем порт для разработки
EXPOSE 3000

# Команда по умолчанию
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
