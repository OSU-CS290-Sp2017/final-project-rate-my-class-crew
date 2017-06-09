(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['review'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"review\">\n        <div class=\"review-icon\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"review-content\">\n          <p class=\"class-title\">\n            <b>Class Code: </b> "
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\n          </p>\n          <p class=\"class-teacher\">\n            <b>Teacher: </b> "
    + alias4(((helper = (helper = helpers.teacher || (depth0 != null ? depth0.teacher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"teacher","hash":{},"data":data}) : helper)))
    + "\n          </p>\n          <p class=\"class-grade\">\n            <b>Grade: </b> "
    + alias4(((helper = (helper = helpers.grade || (depth0 != null ? depth0.grade : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grade","hash":{},"data":data}) : helper)))

    + "\n          </p>\n          <p class=\"class-recommend\">\n            <b>Rating: </b> "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\n          </p>\n          <p class=\"class-comments\">\n            <b>Comments: </b> "
    + "\r\n          </p>\r\n          <p class=\"class-recommend\">\r\n            <b>Rating: </b> "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <p class=\"class-comments\">\r\n            <b>Comments: </b> "
    + alias4(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data}) : helper)))
    + "\n          </p>\n        </div>\n      </article>\n";
},"useData":true});
})();