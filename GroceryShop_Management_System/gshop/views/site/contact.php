<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\ContactForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\captcha\Captcha;

$this->title = 'Contact';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="heading">
    <h1>Contact Us</h1>

</div>

<section class="contact">

    <div class="icons-container">

        <div class="icons">
            <i class="fas fa-phone"></i>
            <h3>our number</h3>
            <p>+91 9823402719</p>
           
        </div>

        <div class="icons">
            <i class="fas fa-envelope"></i>
            <h3>our email</h3>
            <p>freshogrocery@gmail.com</p>
           
        </div>

        <div class="icons">
            <i class="fas fa-map-marker-alt"></i>
            <h3>our address</h3>
            <p>Shop no 1, in front of North Point School, Vidyanagri, Deopur, 424005 Dhule, Maharashtra.
        </div>

    </div>

    <div class="row">

        <div style="height: 250px;">
            
        </div>


       <!--  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633968347413!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe> -->
       <iframe class="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=20.919846683044202,%2074.77927656795126+(SSVPS%20college)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

    </div>

</section>