// Находим изображение и кнопку на странице
const myImage = document.getElementById('myImage');
const changeButton = document.getElementById('changeButton');

// При нажатии меняем путь к изображению
changeButton.addEventListener('click', function () {
    myImage.setAttribute('src', 'images/image2.jpg');
});
