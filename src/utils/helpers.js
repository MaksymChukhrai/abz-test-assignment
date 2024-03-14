

//src\utils\upload.js

console.log('Upload script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Получаем ссылку на кнопку "Upload" и поле ввода
    const uploadButton = document.querySelector('.btn-upload-order');
    console.log(uploadButton);
    const fileInput = document.querySelector('uploadInput');
    console.log(fileInput);
  
    // Добавляем обработчик события на кнопку "Upload"
    uploadButton.addEventListener('click', () => {
      // При клике на кнопку открываем проводник файлов
      fileInput.click();
      console.log(uploadButton);
    });
  
    // Добавляем обработчик события на изменение значения поля ввода файла
    fileInput.addEventListener('change', () => {
      // Обновляем значение поля ввода с названием выбранного файла
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileInput.value = fileName;
      }
    });
});

