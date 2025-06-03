// Function to create and insert the footer
function createFooter() {
    // Footer HTML structure
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <!-- Footer Column 1 --> : About
                <div class="footer-col">
                    <h4>Rejevo CloTHING</h4>
                    <ul>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/lookbooks">Our services</a></li>
                        <li><a href="/privacy">Privacy policy</a></li>
                    </ul>
                </div>
                
                <!-- Footer Column 2 -->
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </div>
                
                <!-- Footer Column 3 -->
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                    <a href="https://www.facebook.com/rejevoclothing"><i class="fa-brands fa-facebook" style="color: #FFD43B;"></i></a> | 
                    <a href="https://www.instagram.com/rejevoclothing"><i class="fa-brands fa-instagram" style="color: #FFD43B;"></i></a>|
                    <a href="https://www.tiktok.com/rejovoclothing"><i class="fa-brands fa-tiktok" style="color: #FFD43B;"></i></a>
                                          
                    </div>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="footer-copyright">
                <p>&copy; ${new Date().getFullYear()} ReJevo CloTHING. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);