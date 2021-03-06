<!DOCTYPE html>
<html>
<head>
<title>Backbone Application</title>
<script src="js/jquery.js" type="text/javascript"></script> 
<script src="js/underscore.js" type="text/javascript"></script> 
<script src="js/backbone.js" type="text/javascript"></script> 
<script src="js/handlebars.js" type="text/javascript"></script> 
</head>
<body>
  
<div class="content"></div>
 
<script id="artist-list-template" type="text/x-handlebars-template">
 
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Hometown</th>
      <th>Favorite Color</th>
    </tr>
  </thead>
  <tbody>
      {{#each []}}
      <tr>
          <td>{{this.name}}</td>
          <td>{{this.hometown}}</td>
          <td>{{this.favoriteColor}}</td>
      </tr>
      {{/each}}
  </tbody>
</table>
</script>
 
</script>
  
  
<script type="text/javascript">
 
var Artist = Backbone.Model.extend({
 
    defaults:{
        name: 'New Artist',
        birthday: 'January 1, 1970',
        hometown: 'Los Angeles, CA',
        favoriteColor: 'blue',
    },
 
    initialize: function() {
        console.log('New artist created...');
    }
 
});
 
var biggie = new Artist({ id: 1, name: 'Notorious BIG', birthday: 'May 21, 1972', hometown: 'Brooklyn, NY', favoriteColor: 'green' });
var mike = new Artist({ id: 2, name: 'Mike Jones', birthday: 'January 6, 1981', hometown: 'Houston, TX', favoriteColor: 'blue' });
var taylor = new Artist({ id: 3, name: 'Taylor Swift', birthday: 'December 13, 1989', hometown: 'Reading, PA', favoriteColor: 'red' });
 
var Artists = Backbone.Collection.extend({
 
    model: Artist,
 
    initialize: function() {
        console.log('New collection initialized...');
    }
});  
 
var artistArray = [biggie, mike, taylor];
var artists = new Artists(artistArray);  
 
 
var ArtistListView = Backbone.View.extend({
    el: '.content',
 
    initialize:function(){
        this.render();
    },
    render: function () {
        var source = $('#artist-list-template').html();
        var template = Handlebars.compile(source);
        var html = template(artists.toJSON());
        this.$el.html(html);
    }
});
 
var artistListView = new ArtistListView();
 
</script>
</body>
</html>