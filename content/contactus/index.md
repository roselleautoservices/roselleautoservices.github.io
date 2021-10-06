---
title: Auto Body Shop 4 Roselle St Linden NJ 07036 (908)718-5446
layout: page
published: true
description: Free towing, we pay for your deductible. Contact us today - Call,
  or email. (Web discounts may apply, call now) - Collision repairs, dent
  removal, body paint. Auto Body Shop 4 Roselle St Linden NJ 07036 (908)718-5446
tags:
  - auto
  - body
  - auto
  - collission
  - auto
  - paint
  - Contact
  - Roselle
  - Auto
  - Service
  - dent
  - dent
  - removal
  - dent
  - repair
  - Email
  - us,
  - frame,
  - frame
  - straightening,
  - linden,
  - new
  - jersey,
  - nj,
  - painting,
  - paintless
  - dent
  - removal,
  - Phone,
  - removal,
  - Repair,
  - shop
slogan: Contact us
---
{% for global in site.data.global %}

# Contact Us

<div class="row">
<div class="u-full-width">
In order for us to help you fix your vehicle with speedy and convenient to you services, you need to contact us immediately. Don’t forget to ask for promotional discounts that may apply. The faster you call the faster we can help.

Our shop specialized in collision repairs, paintless dent removal, frame straightening, autobody paint. Our shop conveniently located in Linden New Jersey.

</div>
</div>

<div class="row center">
<div class="one-half column">

<i class="fa fa-map-marker fa-4x"></i>

```
<h4>Address</h4>
<h5><a href="https://www.google.com/maps/place/Auto+Body+Shop/@40.6381732,-74.2580369,15z/data=!4m9!1m2!2m1!1sauto+repair+shop+linden!3m5!1s0x89c3b2e1915caa2b:0x88a03a9cba693276!8m2!3d40.6353539!4d-74.2463088!15sChdhdXRvIHJlcGFpciBzaG9wIGxpbmRlbloZIhdhdXRvIHJlcGFpciBzaG9wIGxpbmRlbpIBEGF1dG9fcmVwYWlyX3Nob3CaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjVkM0YxUlZOQkVBRQ">4 Roselle Street, Linden, NJ 07036</a></h5>
```

</div>

<div class="one-half column">
    <i class="fa fa-phone fa-4x"></i>

```
<h4>Phone</h4>

<h5><a href="tel:+{{ global.number }}">{{ global.number }}</a></h5>
```

</div>

<div class="row center">

<i class="fa fa-envelope-o fa-4x"></i>

```
<h4> Email Us Today</h4>
```

  <form method="POST" action="https://formspree.io/f/roselleautoservices@gmail.com">
  	<!-- Subject for this email -->
  	<input type="hidden" name="_subject" value="Roselle Auto Email Question" />

  	<label for="name">Enter your name*</label>
      	<input type="text" name="name" placeholder="Your name" if="name" class="u-full-width" required>
      <label for="phonenumber">Phone Number*</label>
          <input type="tel" name="phone" placeholder="Your contact number" if="phonenumber" class="u-full-width" required>
      <label for="email">Your email</label>
      	<input type="email" name="phone" placeholder="{{global.email}}" if="email" class="u-full-width">
      <label for="description">Brief Description</label>
      	<textarea name="message" class="u-full-width" placeholder="Quickly describe your question" id="textbox"></textarea>
      <label for="required">* - Required fields</label>
      <input type="text" name="_gotcha" style="display:none" />
      <input class="button-primary" type="submit" value="Send">

  </form>

</div>
</div>
{% endfor %}