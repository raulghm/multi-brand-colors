Multi Brand Colors
===================

Multi Brand Colors with support for CSS/CSS-Vars/SCSS/SASS/Stylus/LESS/JSON

#### Bower support
```
bower install --save multi-brand-colors
```

#### NPM support
```
npm install --save multi-brand-colors
```

## How use

### CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
  <link rel="stylesheet" href="bower_components/multi-brand-colors/dist/css/index.css">
  <!-- min version -->
  <link rel="stylesheet" href="bower_components/multi-brand-colors/dist/css/index.min.css">
</head>
	<body>
	  <span class="mbc-twitter">Lorem ipsum dolor.</span>
	  <div class="mbc-twitter-bg">Lorem ipsum dolor.</div>
	</body>
</html>
```

### W3C CSS Variables
About CSS Variables:
[www.w3.org/TR/css-variables](http://www.w3.org/TR/css-variables/)

How use with PostCSS:
[github.com/postcss/postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)
```css
@import 'bower_components/multi-brand-colors/dist/postcss/index.css';

.div {
  color: var(--mbc-twitter);
}
```

### SCSS
```scss
@import 'bower_components/multi-brand-colors/dist/scss/index.scss';

.div {
  color: $mbc-twitter;
}
```

### SASS
```sass
@import 'bower_components/multi-brand-colors/dist/sass/index.sass'

.div {
  color: $mbc-twitter
}
```

### LESS
```less
@import 'bower_components/multi-brand-colors/dist/less/index.less';

.div {
  color: @mbc-twitter;
}
```

### Stylus
```styl
@import bower_components/multi-brand-colors/dist/stylus/index.styl

.div
  color $mbc-twitter
```