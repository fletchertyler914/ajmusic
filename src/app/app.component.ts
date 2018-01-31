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
      // Initialize Google Maps
      const mapProp = {
        center: new google.maps.LatLng(36.1627, -86.7816),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#212121'
              }
            ]
          },
          {
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#757575'
              }
            ]
          },
          {
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#212121'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#757575'
              }
            ]
          },
          {
            'featureType': 'administrative.country',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#9e9e9e'
              }
            ]
          },
          {
            'featureType': 'administrative.land_parcel',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'administrative.locality',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#bdbdbd'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#757575'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#181818'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#616161'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#1b1b1b'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#2c2c2c'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#8a8a8a'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#373737'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#3c3c3c'
              }
            ]
          },
          {
            'featureType': 'road.highway.controlled_access',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#4e4e4e'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#616161'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#757575'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#000000'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#3d3d3d'
              }
            ]
          }
        ]
      };

      // Initialize Google Maps
      const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

      google.maps.event.addDomListener(window, 'resize', function() {
        const center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      });

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
    });
  }
}
