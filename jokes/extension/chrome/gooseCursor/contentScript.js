const goose = new Image();
goose.src = 'goose.png';
goose.style.position = 'absolute';
document.body.appendChild(goose);

document.addEventListener('mousemove', function(event) {
  goose.style.left = (event.pageX - goose.width / 2) + 'px';
  goose.style.top = (event.pageY - goose.height / 2) + 'px';
});

goose.addEventListener('mouseover', function() {
  document.body.style.cursor = 'none';
  goose.style.cursor = 'none';
  goose.src = 'https://pngimg.com/uploads/goose/small/goose_PNG5.png';
});

goose.addEventListener('click', function() {
  // Add your click event logic here
});
