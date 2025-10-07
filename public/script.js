// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        // We check if the click is on the modal backdrop itself, not its children.
        if (e.target === this) {
            closeModal(this.id);
        }
    });
});

// Close any active modal on Escape key press
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal.id);
        });
    }
});

// Function to refresh the modal's iframe content
function refreshModalIframe(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        const iframe = modal.querySelector('.modal-iframe');
        if (iframe) {
            // The simplest and most reliable way to reload an iframe is to reset its src attribute.
            // This forces the browser to fetch and render the content again.
            iframe.src = iframe.src;
        }
    }
}
