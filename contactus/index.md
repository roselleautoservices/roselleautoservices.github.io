---
layout: page
title: Auto Body Shop 4 Roselle St Linden NJ 07036 (908)718-5446
published: true
description: Free towing, we pay for your deductible. Contact us today - Call, or email. (Web discounts may apply, call now) - Collision repairs, dent removal, body paint. Auto Body Shop 4 Roselle St Linden NJ 07036 (908)718-5446
tags: auto body, auto collission, auto paint, Contact Roselle Auto Service, dent, dent removal, dent repair, Email us, frame, frame straightening, linden, new jersey, nj, painting, paintless dent removal, Phone, removal, Repair, shop
slogan: Contact us
---
#Contact Us

<div class="row">
<div class="u-full-width">
In order for us to help you fix your vehicle with speedy and convenient to you services, you need to contact us immediately. Don’t forget to ask for promotional discounts that may apply. The faster you call the faster we can help.

Our shop specialized in collision repairs, paintless dent removal, frame straightening, autobody paint. Our shop conveniently located in Linden New Jersey.
</div>
</div>

<div class="row center">
<div class="one-half column">

{% for global in site.data.global %}
{% capture m %}

<i class="fa fa-map-marker fa-4x"></i>

#### Address
##### [4 Roselle Street, Linden, NJ 07036.](https://www.google.com/maps/place/Roselle+Auto+Services+Inc+-+Linden,+NJ/@40.635433,-74.246247,17z/data=!4m7!1m4!3m3!1s0x89c3b2e1928866e5:0xe440b805db07d78e!2sRoselle+Auto+Services+Inc+-+Linden,+NJ!3b1!3m1!1s0x89c3b2e1928866e5:0xe440b805db07d78e)
</div>
<div class="one-half column">
    <i class="fa fa-phone fa-4x"></i>

#### Phone

#####[{{ global.number }}](tel:{{ global.number }})

</div>



<div class="row center">

<i class="fa fa-envelope-o fa-4x"></i>

#### Email Us Today
{% endcapture %}
{{ m | markdownify }}
{% endfor %}

  <form method="POST" action="//formspree.io/roselleautoservices@gmail.com">
  	<!-- Subject for this email -->
  	<input type="hidden" name="_subject" value="Roselle Auto Email Question" />

  	<label for="name">Enter your name*</label>
      	<input type="text" name="name" placeholder="Your name" if="name" class="u-full-width" required>
      <label for="phonenumber">Phone Number*</label>
          <input type="tel" name="phone" placeholder="Your contact number" if="phonenumber" class="u-full-width" required>
      <label for="email">Your email</label>
      	<input type="email" name="phone" placeholder="test@mailbox.com" if="email" class="u-full-width">
      <label for="description">Brief Description</label>
      	<textarea name="message" class="u-full-width" placeholder="Quickly describe your question" id="textbox"></textarea>
      <label for="required">* - Required fields</label>
      <input type="text" name="_gotcha" style="display:none" />
      <input class="button-primary" type="submit" value="Send">
  </form>

</div>
</div>
