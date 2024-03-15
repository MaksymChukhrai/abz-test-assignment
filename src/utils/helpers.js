//src\utils\upload.js
document.addEventListener('DOMContentLoaded', function() {
  // Получаем ссылку на кнопку "Upload" и поле ввода
  const uploadButton = document.querySelector('.btn-upload-order');
  const placeholder = document.querySelector('#placeholder');
  const fileInput = document.querySelector('#uploadInput');
  console.log(placeholder);
  console.log(fileInput);
  console.log(uploadButton);

  if (uploadButton && placeholder && fileInput) {
    console.log('All elements found:', uploadButton, placeholder, fileInput);
    // Добавляем обработчик события на кнопку "Upload"
    uploadButton.addEventListener('click', () => {
      console.log('Upload button clicked');
      // При клике на кнопку открываем проводник файлов
      fileInput.click();
    });

    // Добавляем обработчик события на изменение значения поля ввода файла
    fileInput.addEventListener('change', () => {
      // Обновляем значение поля placeholder с названием выбранного файла
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        placeholder.textContent = fileName;
      } else {
        // Если файл не выбран, устанавливаем нужный текст
        placeholder.textContent = 'Upload your photo';
      }
    });
  } else {
    console.error('Elements not found:', uploadButton, placeholder, fileInput);
  }
});
