import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var jquery: any;
declare var $: any;
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    $(document).ready(function () {

      // Initialize Tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Add smooth scrolling to all links in navbar + footer link
      $('.navbar a, footer a[href="#myPage"]').on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {

          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          const hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      const $item = $('.carousel .item');
      let $wHeight = $(window).height();
      $item.eq(0).addClass('active');
      $item.height($wHeight);
      $item.addClass('full-screen');

      $('.carousel img').each(function () {
        const $src = $(this).attr('src');
        const $color = $(this).attr('data-color');
        $(this).parent().css({
          'background-image': 'url(' + $src + ')',
          'background-color': $color
        });
        $(this).remove();
      });

      $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
      });

      $('.carousel').carousel({
        interval: 6000,
        pause: 'false'
      });
    });

    $('.toggleButton').click(function (e) {
      if ($(window).width() <= 769) {
        $('#myNavbar').collapse('toggle');
      }
    });

    $('#mc_embed_signup .button').click(function (e) {
      $('#myModal').modal('hide');
      $('#mce-EMAIL').val('');
    });
  }
}
