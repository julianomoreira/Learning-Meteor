Images = new Mongo.Collection("images");

if (Meteor.isClient) {
  console.log("I am the client");
  var img_data = [];
  Template.images.helpers({images:img_data});
  Template.images.helpers({images:Images.find()});
  var timeNow = new Date();
  Template.myTime.helpers({timeNow});

  Template.images.events({
    'click .js-image':function(event){
      //alert("hello");
      console.log(event);
      $(event.target).css("width","100px");
    },
    'click .js-del-image':function(event){
      var image_id = this._id;
      console.log(image_id);
      $("#"+image_id).hide('slow', function(){
        Images.remove({"_id":image_id});
      });

    }
  });
}

if (Meteor.isServer) {
  console.log("I am a server");
}
