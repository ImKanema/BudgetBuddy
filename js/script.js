document.addEventListener('DOMContentLoaded',function(){
const toggler = document.querySelector('.navbar-toggler');
const icon = toggler.querySelector('.navbar-toggler-icon');

icon.innerHTML = '<span style="font-size: 24px;">&#x2630;</span>';

function updateIcon(){
	if (toggler.classList.contains('collapsed')) {
		icon.innerHTML = '<span style="font-size: 24px;">&#x2630;</span>';
	}else{
		icon.innerHTML = '<span style="font-size: 24px;">&#x00d7;</span>';
	}
};

toggler.addEventListener('click', function(){
	updateIcon();
	});
});

// #######
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the href starts with "mailto:", and if so, exit the function
        if (this.getAttribute('href').startsWith('mailto:')) {
            return;
        }

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const offsetPosition = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function ScrolltoTop(){
	window.scrollTo({
		top:0,
		behavior: 'smooth'
	});
}

// document.addEventListener('DOMContentLoaded', function () {
//     // Get the button and modal elements
//     var openModalButton = document.getElementById('openModalButton');
//     var bukaModal = document.getElementById('bukaModal');
//     var myModal = new bootstrap.Modal(document.getElementById('myModal'));

//     // Add event listener to the button
//     openModalButton.addEventListener('click', function () {
//       myModal.show(); // Show the modal
//     });

//     bukaModal.addEventListener('click', function () {
//       myModal.show(); // Show the modal
//     });
//   });

function scrollToFeatures() {
    const element = document.getElementById('features');
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = window.innerHeight / 6; // Offset to center the element

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }

  function scrollToHarga() {
    const element = document.getElementById('harga');
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = window.innerHeight / 6; // Offset to center the element

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }

  // ############
