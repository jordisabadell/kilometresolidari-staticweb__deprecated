# Kilòmetre Solidari (static web) [DEPRECATED]

**A web of Kilòmetre Solidari Project** :rocket:  
http://www.kilometresolidari.cat

Static web page. It built with grunt module bundler. This web was migrated to Webpack and deprecated  on March 2020. See continuous project https://github.com/jordisabadell/kilometresolidari-staticweb

---

## Technology

- HTML5/CSS3/JavaScript
- jQuery 1.12.4 (https://jquery.com)
- Bootstrap 3.3.7 (http://getbootstrap.com)
- Animate.css 3.5.2 (https://github.com/daneden/animate.css)
- Crazyload 1.3 (http://luis-almeida.github.com/unveil)
- Lightbox 2.9 (http://lokeshdhakar.com/projects/lightbox2)
- CountUp.js1.8.2 (https://inorganik.github.io/countUp.js)
- Highcharts 5.0.10 (https://www.highcharts.com)
- TimelineJS (https://timeline.knightlab.com)
- Awesome Font icons 4.7 (http://fontawesome.io/icons)
- ~~Google Maps (https://developers.google.com/maps)~~
- Leaflet Maps (https://leafletjs.com)
- OpenStreetMaps (https://www.openstreetmap.org)
- Google reCaptcha v2 (https://www.google.com/recaptcha/)
- Google Custom Search (https://developers.google.com/custom-search)
- Google Analytics (https://developers.google.com/analytics)

## Plugins
- Add This (https://www.addthis.com)
- Quantcast GDPR (https://www.quantcast.com/gdpr/consent-management-solution/)

## Function as a Services (FaaS)
- Google Firebase Realtime Database (https://firebase.google.com/docs/database/)

## Environment 
- NodeJS (https://nodejs.org/)
- Grunt (https://gruntjs.com/)
- Visual Studio Code (https://code.visualstudio.com/)
- GitHub (https://github.com/)

## Tools and performance
- Web Manifest generator (https://app-manifest.firebaseapp.com/)
- Fabicon generator (https://realfavicongenerator.net)
- Compress JPEG (http://www.compressjpeg.com)
- Google Cloud Platform (https://console.developers.google.com)
- Google Lighthouse Chrome audit (https://developers.google.com/web/tools/lighthouse)
- Google Page Speed (https://developers.google.com/speed/pagespeed/insights)

---
## Environment commands

### Grunt commands
- Install Grunt-cli `npm install -g grunt-cli`
- Install project dependencies `npm install`
- Grunt compile `grunt --apikey-gcp-gcs=(GCP Google Custom Search APIKEY) --apikey-gfb-app=(Google Firebase App APIKEY)`

### Fix audit potential security vulnerability in dependencies.
References https://itnext.io/fixing-security-vulnerabilities-in-npm-dependencies-in-less-than-3-mins-a53af735261d  

Delete package-lock.json file and node_modules folder.
```
del package-lock.json
````
Update npm.
```
npm update
rmdir /Q /S node_modules
```
Install dependencies (it will create lock json file again)
```
npm install
```