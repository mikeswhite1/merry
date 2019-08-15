/// <reference path="angular.js" />

var app = angular.module("myModule", [])


$(function (){
  $.ajax({
    type: 'GET',
    url: 'https://merry-972e0.firebaseapp.com',
    success: function(data) {
      console.log('success', data)
    }
  })
});