describe('Percy Error Reproduction', () => {
	// Run before each test to set the viewport and visit the homepage
	beforeEach(() => {
		cy.viewport(1920, 1080);
	});

	it('should take a snapshot in the checkout', () => {
		cy.visit('https://metaflow.de/products/metaflow-shaker');
		// Allow time for dynamic elements to load
		cy.wait(4000);

		// Add product to the cart by clicking the "In den Warenkorb" button
		cy.contains('In den Warenkorb', { matchCase: false }).click({ force: true });

		// Wait for the cart to load
		cy.wait(3000);

		// Proceed to checkout by clicking the "Zur Kasse" button
		cy.contains('Zur Kasse').click();

		cy.wait(8000); // Ensure elements are loaded before snapshot

		// Take Percy snapshot of the checkout page
		cy.percySnapshot('Error-Reproduction-Checkout');
	});
});
