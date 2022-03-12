(function () {
    'use strict';

    const $singUp = document.getElementById('singUp');
    const $radios = document.querySelectorAll('.checkboxRadial');

    $singUp.addEventListener('clicked', authenticateClick);

    function authenticateClick() {
        if ($singUp.value === '') {
            alert('Preencha os campos vazios:')
            $singUp.style.cssText =
                'border: 2px solid magenta;';

        }
        return $singUp;
        let $radio = document.querySelectorAll('.checkboxRadial');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log("Escolheu: " + radios[i].value);
            }
        }

    }

}) ();