(function () {
    'use strict';

    const $singUp = document.getElementById('singUp');
    const $labels = document.querySelectorAll('label');
    const $label = document.querySelector('.checkboxRadial');
    const $email = document.querySelector('.email');
    const $form = document.querySelector('.form');

    $form.addEventListener('submit', authenticateClick);
    function authenticateClick(e) {
        if (!$email.value) {
            $email.style.cssText =
                'border: 2px solid magenta;';
            alert('Preencha os campos vazios:');
            e.preventDefault();

        }
            
            if (!$labels[0].checked && !$labels[1].checked) {
                console.log($labels[i]);
                $label.style.cssText = 'color: magenta;' +
                    'border: 2px solid magenta;';
                e.preventDefault();
            }
               
            
           
            /* else if(!$labels[i-1].checked && $labels[i].checked){
                $labels[i].style.cssText = 'color: magenta;' +
                    'border: 2px solid magenta;';
                e.preventDefault();
            } */
            
        }

        /* let $radio = document.querySelectorAll('#label');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log("Escolheu: " + radios[i].value);
            }
        } */
        return $singUp;
    
})();