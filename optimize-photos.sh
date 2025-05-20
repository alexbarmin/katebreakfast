#!/bin/bash

# Проверка наличия ImageMagick
if ! command -v magick &> /dev/null; then
    echo "Ошибка: ImageMagick (magick) не установлен."
    exit 1
fi

# Проход по файлам с нужными расширениями
for img in ./public/photos/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
    # Проверка, существует ли файл (если ни один не найден, glob вернёт саму строку)
    [ -e "$img" ] || continue

    # Удаление расширения
    base="${img%.*}"
    
    # Конвертация в WebP с шириной 415px, сохранением пропорций и максимальным качеством
    magick "$img" -resize 415x -quality 80 "${base}.webp"
    
    echo "Сконвертировано: $img -> ${base}.webp"
done

echo "Готово."
