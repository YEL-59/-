const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="images/home/logo.png" class="logo" alt="">
            <div class="f-ul-container">
                <ul class="ctgry">
                    <li class="ctgry-title">men</li>
                    <li><a href="#" class="f-link">shirt</a></li>
                    <li><a href="#" class="f-link">t-shirt</a></li>
                    <li><a href="#" class="f-link">jeans</a></li>
                    <li><a href="#" class="f-link">shoes</a></li>
                    <li><a href="#" class="f-link">watches</a></li>
                    <li><a href="#" class="f-link">bag</a></li>
                </ul>

                <ul class="ctgry">
                    <li class="ctgry-title">women</li>
                    <li><a href="#" class="f-link">saree</a></li>
                    <li><a href="#" class="f-link">hijab</a></li>
                    <li><a href="#" class="f-link">qurta</a></li>
                    <li><a href="#" class="f-link">shoes</a></li>
                    <li><a href="#" class="f-link">watches</a></li>
                    <li><a href="#" class="f-link">bag</a></li>
                </ul>

                <ul class="ctgry">
                    <li class="ctgry-title">kid</li>
                    <li><a href="#" class="f-link">frock</a></li>
                    <li><a href="#" class="f-link">shirt</a></li>
                    <li><a href="#" class="f-link">jeans</a></li>
                    <li><a href="#" class="f-link">shoes</a></li>
                    <li><a href="#" class="f-link">watches</a></li>
                    <li><a href="#" class="f-link">bag</a></li>
                </ul>
            </div>
         </div>

         <p class="f-title">about company</p>
         <p class="info">Dash commerce is a collection of apparel designed for a target audience and sold in retail locations and/or through online stores. When you enter into the clothing industry, creating a clothing line includes establishing a company, designing the clothes, selecting materials, and sourcing the manufacturing process.Our mission is To innovate, to lead, to enhance, to provide best-value products and services to global customers. To make a difference through our branding to stay ahead of fashion trends, market changes and the latest technology. To enhance the quality of life for our business partners,customers and employees.</p>
         <p class="info">support email- tintfleck@gmail.com, tin&&&&&g@gmai.com</p>
         <p class="info">telephone- 180 00 00 01, 170 00 03 65</p>

         <div class="f-social">

            <div class="">
                <a href="#" class="s-link">terms & services</a>
                <a href="#" class="s-link">privacy page</a>
            </div>

            <div class="">
                <a href="#" class="s-link">instagram</a>
                <a href="#" class="s-link">facebook</a>
                <a href="#" class="s-link">youtube</a>
                <a href="#" class="s-link">twitter</a>
            </div>

         </div>
         <div class="icon">
             <div class="l-icon">
                <a href="#"><i class="fa fa-university ic"></i></a>
                <a href="#"><i class="fa fa-shopping-cart ic"></i></a>
             </div>

             <div class="l-icon">
                <a href="#"><i class="fa fa-instagram ic"></i></a>
                <a href="#"><i class="fa fa-facebook ic"></i></a>
                <a href="#"><i class="fa fa-youtube ic"></i></a>
                <a href="#"><i class="fa fa-twitter ic"></i></a>
             </div>
        
         </div>

         <p class="credit">dash-commerce eCommerce © 2022,All Rights Reserved</p>`;
}

createFooter();
