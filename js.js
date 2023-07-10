let kovalev = document.getElementById('kovalev');
kovalev.onmouseover = function(event) {
  console.log('tap')
  //kovalev.classList.add('kovalev-zoom');
  kovalev.style.width = document.documentElement.clientWidth*0.8 + 'px';
  kovalev.style.position = "fixed";
  kovalev.style.bottom = '20px';//document.documentElement.clientHeight/4 + 'px';
  kovalev.style.left = document.documentElement.clientWidth*0.1 + 'px';//document.documentElement.clientWidth/4 + 'px';
};
kovalev.onmouseout = function(event) {
  console.log('tap2')
  //kovalev.classList.remove('kovalev-zoom');
  kovalev.style.width = "131px";
  kovalev.style.position = '';
  kovalev.style.bottom = '';
  kovalev.style.left = '';
};