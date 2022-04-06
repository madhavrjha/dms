class Modal {
  
  static removeCircuitManager() {
    const modalContainer = document.querySelector('.remove-circuit-manager');
    const modal = document.querySelector('.remove-circuit-manager .modal');
    const removeButtons = document.querySelectorAll('td .remove-btn');
    const cancelBtn = document.querySelector('.remove-circuit-manager .cancel');
    const closeBtn = document.querySelector('.remove-circuit-manager .close');
    const dropdownOptions = document.querySelectorAll('td .dropdown-option');

    // Hide Modal When Click on [Cancel] or Close(x) Button
    [closeBtn, cancelBtn].forEach(btn => {
      btn.addEventListener('click', e => {
        modalContainer.classList.remove('show');
        dropdownOptions.forEach(dropdown => {
          dropdown.removeAttribute('style');
        });
      });
    });

    // Hide Model When Click OutSide of Model
    modalContainer.addEventListener('click', e => {
      if (!modal.contains(e.target)){
        modalContainer.classList.remove('show');
      }
      dropdownOptions.forEach(dropdown => {
        dropdown.removeAttribute('style');
      });
    });
    
    // Show Modal When Click on Remove Dropdown
    removeButtons.forEach(removeBtn => {
      removeBtn.addEventListener('click', e => {
        modalContainer.classList.add('show');
        
        // Hide Dropdown after clicking on Remove Btn
        e.target.parentElement.style.display = 'none';
      });
    });

  }
}

Modal.removeCircuitManager();