//src\utils\upload.js
document.addEventListener('DOMContentLoaded', function() {
  // Получаем ссылку на кнопку "Upload" и поле ввода
  const uploadButton = document.querySelector('.btn-upload-order');
  const fileInput = document.querySelector('#uploadInput');

  if (uploadButton && fileInput) {
    // Добавляем обработчик события на кнопку "Upload"
    uploadButton.addEventListener('click', () => {
      // При клике на кнопку открываем проводник файлов
      fileInput.click();
      console.log('click event');
      console.log('fileInput value:', fileInput.value);
    });

    // Добавляем обработчик события на изменение значения поля ввода файла
    fileInput.addEventListener('change', () => {
      // Обновляем значение поля ввода с названием выбранного файла
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileInput.value = fileName;
      } else {
        // Если файл не выбран, устанавливаем новый текст placeholder
        fileInput.setAttribute('.placeholder', 'Upload your photo');
      }
    });
  } else {
    console.error('Elements not found:', uploadButton, fileInput);
  }
});
