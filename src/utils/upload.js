//src\utils\upload.js
document.addEventListener('DOMContentLoaded', function() {
  const uploadButton = document.querySelector('.btn-upload-order'); 
  const fileInput = document.querySelector('#uploadInput'); 
  const placeholder = document.querySelector('#placeholder');
 

  if (uploadButton && fileInput && placeholder) {
    console.log(uploadButton, fileInput, placeholder)
    uploadButton.addEventListener('click', () => {
      fileInput.click();
      console.log('click', 'Button is working');
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        placeholder.innerText = fileName; 

         // Додаємо/видаляємо класи для коректної видимості
        placeholder.classList.add('is-hidden');
        fileInput.classList.remove('is-hidden'); 
      } else {
        placeholder.innerText = 'Upload your file';

         // Відображаємо placeholder, приховуємо input
        placeholder.classList.remove('is-hidden');
        fileInput.classList.add('is-hidden');  
      }
    });
  } else {
    console.error('Elements not found:', uploadButton, fileInput, placeholder);
  }
});

// export const uploadButton = document.querySelector('.btn-upload-order'); 
// export const fileInput = document.querySelector('#uploadInput'); 
// export const placeholder = document.querySelector('#placeholder');