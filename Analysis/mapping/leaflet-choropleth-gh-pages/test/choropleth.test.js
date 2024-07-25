var fs = require('fs');
var assert = require('assert');
var choropleth = require('../src/choropleth');

var geojson = JSON.parse(fs.readFileSync('./examples/basic/crimes_by_district.geojson'));

describe('Leaflet Choropleth Plugin Tests', function () {
  var style = {fillColor: 'lime'};
  var layer;

  before(function () {
    layer = choropleth(geojson, {
      style: style,
      valueProperty: 'incidents'
    });
  });

  it('should return a layer', function () {
    assert.ok(layer._layers);
  });

  it('should set limits correctly', function () {
    assert.ok(layer.options.limits);
    var limits = layer.options.limits;
    assert.strictEqual(limits.length, 5);
    assert.strictEqual(limits[0], 814);
    assert.strictEqual(limits[4], 45529);
  });

  it('should set colors correctly', function () {
    assert.ok(layer.options.colors);
    var colors = layer.options.colors;
    assert.strictEqual(colors.length, 5);
    assert.strictEqual(colors[0], '#ffffff');
    assert.strictEqual(colors[4], '#ff0000');
  });

  it('should set the color of a feature correctly', function () {
    var featureStyle = layer.options.style(geojson.features[0]);
    assert.deepStrictEqual(featureStyle.fillColor, '#ffbfbf');
  });

  it("should not modify the style object", function () {
    assert.deepStrictEqual(style, {fillColor: 'lime'});
  });
});