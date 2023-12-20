document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.buttons button');
    var gallery = document.querySelector('.gallery');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            loadImages(this.id);
        });
    });

    function loadImages(levelName) {
        gallery.innerHTML = '';
        var i = 1;

        function tryLoadImage() {
            var img = new Image();
            img.src = `img/${levelName}/${i}.jpg`; 
            img.onload = function() {
                gallery.appendChild(img);
                i++;
                tryLoadImage();
            };
            img.onerror = function() {
                console.log(`类别 ${className} 的图片加载完毕`);
            };
            img.alt = `图片 ${i}`;
        }

        tryLoadImage(); 
    }


    loadImages('level1');
});
