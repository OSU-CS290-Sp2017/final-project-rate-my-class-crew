(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['review'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " <i class=\"fa fa-star\"></i> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p class=\"class-tags\">\r\n            <b>Class tags: </b> "
    + container.escapeExpression(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tags","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p class=\"class-comments\">\r\n            <b>Comments: </b> "
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comments","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"review\">\r\n        <div class=\"review-icon\">\r\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"review-content\">\r\n          <p class=\"class-title\">\r\n            <b>Class Code: </b> "
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <p class=\"class-teacher\">\r\n            <b>Teacher: </b> "
    + alias4(((helper = (helper = helpers.teacher || (depth0 != null ? depth0.teacher : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"teacher","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <p class=\"class-grade\">\r\n            <b>Grade: </b> "
    + alias4(((helper = (helper = helpers.grade || (depth0 != null ? depth0.grade : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grade","hash":{},"data":data}) : helper)))
    + "\r\n          </p>\r\n          <p class=\"class-recommend\">\r\n            <b>Rating: </b> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rating : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n          </p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n      </article>\r\n";
},"useData":true});
})();