let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

function satu(){
	alert("Ini adalah gambar secangkir kopi yang dinikmati sambil melihat terbitnya matahari.");
};
function dua(){
	alert("foto kesunyian sungai saat hilangnya sinar surya menambah ke indahan fotografi");
};
function tiga(){
	alert("Forest tempat tinggal flora dan fauna liar sebagai habitat mereka");
};
function empat(){
	alert("Suara ombak di lautan dapat memanjakan mata, menenangkan fikiran dan hati");
};
function lima(){
	alert("Coffee shop ter nikamt di Daerah saya dengan design interior yang modern dan berkelas..");
};
function enam(){
	alert("Dream coffee surganya pecinta coffee, berbagai macam coffee tersedia di sini");
};

const accordion = document.getElementsByClassName('accordion');

		for(let i = 0; i<accordion.length; i++){
			accordion[i].addEventListener('click',function(){
				const panel = this.nextElementSibling;

				if(panel.style.display === 'block'){
					panel.style.display="none"
				}else {
					panel.style.display='block';
				}
			});
		}

