[...document.querySelectorAll('.custom-radio')].forEach(categ => {
    categ.addEventListener('click', e => {
        // CHECK: Try to make this more reusable, more general and less specific
        if (e.target.getAttribute('name') === 'recom-liv') {
            // Reset
            document.querySelectorAll('[name="recom-liv"]').forEach(option => {
                option.setAttribute('aria-checked', "false");
                option.classList.remove('custom-radio-active');
            });

            // Set the clicked option to true
            e.target.setAttribute('aria-checked', 'true');
            e.target.classList.add('custom-radio-active');
        }
        
        if (e.target.getAttribute('name') === 'recom-mov') {
            // Reset
            document.querySelectorAll('[name="recom-mov"]').forEach(option => {
                option.setAttribute('aria-checked', "false");
                option.classList.remove('custom-radio-active');
            });

            // Set the clicked option to true
            e.target.setAttribute('aria-checked', 'true');
            e.target.classList.add('custom-radio-active');
        }

        if (e.target.getAttribute('name') === 'modal-mov') {
            // Reset
            document.querySelectorAll('[name="modal-mov"]').forEach(option => {
                option.setAttribute('aria-checked', "false");
                option.classList.remove('custom-radio-active');
            });

            // Set the clicked option to true
            e.target.setAttribute('aria-checked', 'true');
            e.target.classList.add('custom-radio-active');
        }

        if (e.target.getAttribute('name') === 'modal-liv') {
            // Reset
            document.querySelectorAll('[name="modal-liv"]').forEach(option => {
                option.setAttribute('aria-checked', "false");
                option.classList.remove('custom-radio-active');
            });

            // Set the clicked option to true
            e.target.setAttribute('aria-checked', 'true');
            e.target.classList.add('custom-radio-active');
        }
    });
});