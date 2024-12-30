const ddBtns = document.querySelectorAll('.dd-btn');
const ddLists = document.querySelectorAll('.dd-list');
const ddLine = '__________';

[...ddBtns].forEach(btn => {
    const ddContainer = btn.parentElement;
    const assocList = ddContainer.querySelector('.dd-list');

    btn.addEventListener('click', () => {
        if (assocList.classList.contains('hidden')) {
            assocList.classList.remove('hidden');
            btn.style.borderRadius = '2rem 2rem 0 0';
            btn.querySelector('.dd-chevron').classList.add('rotated-90-ccw');
        } else {
            assocList.classList.add('hidden');
            btn.style.borderRadius = '2rem';
            btn.querySelector('.dd-chevron').classList.remove('rotated-90-ccw');
        }
    });
});

// CHECK: Try to make this more reusable especially since not every dropdown might use 'Whatever ' as placeholder. 
// Maybe handle some of this in recommender.js
// Maybe have an attribute in the .dropdown with a placeholder phrase like 'Whatever '
[...ddLists].forEach(list => {
    const ddContainer = list.parentElement;
    const ddContainerValues = [];
    const assocBtn = ddContainer.querySelector('.dd-btn');

    // Checkbox dropdown
    if (ddContainer.classList.contains('dd-checkboxes')) {
        [...list.querySelectorAll('input')].forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const value = checkbox.dataset.value;

                if (checkbox.checked) {
                    ddContainerValues.push(value);
                } else {
                    ddContainerValues.splice(ddContainerValues.indexOf(value), 1);
                }

                // Set the data-value of the associated .dropdown
                ddContainer.dataset.value = [...new Set(ddContainerValues)].length ? [...new Set(ddContainerValues)] : 'whatever';
                
                // Switch between line and 'Whatever'
                assocBtn.querySelector('.dd-btn-line').textContent = [...list.querySelectorAll('input')].some(el => el.checked) ? ddLine : 'Whatever ';
            });
        });
    }

    // Single option dropdown
    if (ddContainer.classList.contains('dd-single')) {
        [...list.children].forEach(option => {
            option.addEventListener('click', () => {
                // Visual stuff
                const btnLine = ddContainer.querySelector('.dd-btn-line');
                btnLine.textContent = option.textContent + ' ';
                list.classList.add('hidden');
                assocBtn.style.borderRadius = '2rem';
                assocBtn.querySelector('.dd-chevron').classList.remove('rotated-90-ccw');

                // Logic
                ddContainer.dataset.value = option.dataset.value;
            });
        });
    }
});

document.addEventListener('click', e => {
    [...ddLists].forEach(list => {
        const ddContainer = list.parentElement;
        const assocBtn = ddContainer.querySelector('.dd-btn');

        if (!list.contains(e.target) && !assocBtn.contains(e.target)) {
            if (!list.classList.contains('hidden')) {
                list.classList.add('hidden');
                assocBtn.style.borderRadius = '2rem';
                assocBtn.querySelector('.dd-chevron').classList.remove('rotated-90-ccw');
            }
        }
    });
});