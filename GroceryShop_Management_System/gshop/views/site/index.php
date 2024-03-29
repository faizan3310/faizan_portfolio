<style>
.vl {
  border-left: 2px solid #bac34e;
  height: 200px;
  margin-left: 50%;
}
p {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
  color: #bac34e;
}
</style>

<section class="home">

    <div class="slides-container">

        <div class="slide active">
           <div class="content">
                <span>Fruits & Vegetable</span>
                <h3>upto 50% off</h3> 
                <h4>We provides fresh and healthy Fruits and Vegetables</h4>              
            </div>
            <div class="image">
               <img src="/image/home-img-1.png" alt="">
            </div>
        </div>

        <div class="slide">
            <div class="content">
                <span>Dairy Products</span>
                <h3>upto 30% off</h3>  
                <h4>We provides fresh Dairy Products with proper packaging</h4>               
            </div>
             <div class="image">
                <img src="/image/bd.jpg" alt="">
            </div>
        </div>

        <div class="slide">
            <div class="content">
                <span>Others Items</span>
                <h3>upto 20% off</h3>  
                <h4>We also provides many types of daily use product</h4>         
            </div>
            <div class="image">
                <img src="/image/home-img-3.png" alt="">
            </div>
        </div>

    </div>

    <div id="next-slide" class="fas fa-angle-right" onclick="next()"></div>
    <div id="prev-slide" class="fas fa-angle-left" onclick="next()"></div>

</section>

<section class="banner-container">

    <div class="banner">
        <img src="/image/banner-1.jpg" alt="">
        <div class="content">
            <h2>Fruits & Vegetable</h2>
            <span>limited sales</span>
            <h3>upto 50% off</h3>
            <a href="site/category?category_id=Fruits" class="btn btn-warning">shop now</a>
        </div>
    </div>

    <div class="banner">
        <img src="/image/banner-2.jpg" alt="">
        <div class="content">
             <h2>Dairy Products</h2>
            <span>limited stock</span>
            <h3>upto 30% off</h3>
            <a href="/site/category?category_id=Dairy Product" class="btn btn-warning">shop now</a>
        </div>
    </div>

    <div class="banner">
        <img src="/image/banner-3.jpg" alt="">
        <div class="content">
             <h2>Others Items</h2>
            <span>limited time Deal</span>
            <h3>upto 20% off</h3>
            <a href="/site/category?category_id=Other Items" class="btn btn-warning">shop now</a>
        </div>
    </div>

</section>

<div style="background:#bac34e26; padding: 40px; ">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div style="text-align: center;">
                <h1>Who are we? <br>You want to know.</h1>             
                <i class="fa fa-lightbulb" style="font-size: 100px; color: #bac34e"></i> <br>     
                <a href="/site/about" class="btn btn-warning btn-lg">Click to know</a>
            </div>
            </div>
             <div class="col-md-2">
                <div style="text-align: right;">
                   <p class="vl"></p>
                </div>
            </div>
             <div class="col-md-5">
                <div style="text-align: center;">
                <h1>If any Query or Inquiry let's connect with Us </h1>
                <i class="fa fa-question" style="font-size: 100px; color: #bac34e"></i> <br>    
                    <a href="/site/contact" class="btn btn-warning btn-lg">Connect with us</a>
                </div>
            </div>
        </div>      
    </div>
</div>

<div style="padding: 40px; text-align: center;" class="container">
    <h1>New Offer Comming Soon</h1>
    <p id="demo"></p>
</div>
  <hr style="margin-top: 10px;"><br>
    <?= $this->render('_brands') ?>

<br><br><br><br>
<div style="background:#bac34e26; padding: 40px; ">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                 <img src="/image/a2.jpg" alt="" width="100%">
          
            </div>
            
             <div class="col-md-6">
                <div style="text-align: center;">
                    <h1 style="color: red;">COVID-19 Declaration</h1>   
                    <hr>    
                    <h1>Due to covid 19, we cover very much care and cleanliness. Please be sure that your time is in our service.</h1>   
                    <i class="fa fa-smile" style="font-size: 100px; color: #bac34e"></i>         
                </div>
            </div>
        </div>      
    </div>
</div>




<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>













