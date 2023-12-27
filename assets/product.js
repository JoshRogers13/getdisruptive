document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.bundle-products');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);

        const options = Array.from(formData.entries()).filter(([name]) => {
            return name.startsWith('bundle') || name === 'id';
        });

        const items = options.map(([name, value]) => ({
            id: value,
            quantity: 1
        }));

        console.log(items);

        // Add selected products to cart.
        fetch('/cart/add.js', {
            method: 'POST',
            body: JSON.stringify({ items }),
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'xmlhttprequest'
            }
        })
            .then(async response => {
                // If we've successfully added to cart.
                if (response.ok) {
                    // Go to cart page.
                    window.location.assign('/cart');

                    // Stop execution.
                    return;
                }

                // Get response data.
                const { description } = await response.json();

                // Only throw an error if we haven't successfully added to cart.
                throw new Error(description);
            })
            .catch(error => {
                // If there's an error - show it to the user.
                console.log('error', error);
            });
    });
});