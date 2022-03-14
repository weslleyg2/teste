(function () {
    'use strict';

    const $labels = document.querySelector('.labels');
    const $email = document.querySelector('.email');
    const $form = document.querySelector('.form');
    const $check = document.querySelectorAll('.checkboxRadial');
    let selected = 0;
    let checkbox = document.myform.checkbox;
    let valid = false;

    $form.addEventListener('submit', authenticateClick);
    function authenticateClick(e) {
        selected = 0;
        $check.forEach(function (el) {
            
            if (el.checked) {
                selected++;
            }
        });
        if (selected === 0 || !$email.value) {
            alert("preencha os selecionados!");
        } else if(selected > 0 || $email.value){
            alert('Informações enviadas com sucesso!');

        }
        if (!$email.value) {
            $email.style.cssText =
                'border: 2px solid magenta;';
            // alert('Preencha os campos vazios:');
            e.preventDefault();

        } else {

            $email.style.cssText = 'border:none;';
        }

        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                valid = true;
                break;
            }
        }
        if (valid) {
            // alert('Informações enviadas com sucesso!');
            e.preventDefault();
            $labels.style.cssText = 'border:none';

        } else {
            $labels.style.cssText = 'border: 2px solid magenta;' +
                'box-sizing:border-box';
            e.preventDefault();
            return false;
        }
        

        console.log(selected);
    }
})();
