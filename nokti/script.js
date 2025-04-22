document.addEventListener('DOMContentLoaded', () => {
    const polishItems = document.querySelectorAll('.polish-item');
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-polish-name');
    const modalDesc = document.getElementById('modal-polish-description');
    const modalImage = document.getElementById('modal-polish-image');
    const modalPrice = document.getElementById('modal-polish-price');
    const closeButton = document.querySelector('.close-button');

    // Otvaranje modala
    polishItems.forEach(item => {
        item.addEventListener('click', () => {
            modalName.textContent = item.dataset.name;
            modalDesc.textContent = item.dataset.description;
            modalImage.src = item.querySelector('img').src;
            modalImage.alt = item.dataset.name;
            modalPrice.textContent = `KM ${item.dataset.price}`;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Zatvaranje modala
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});