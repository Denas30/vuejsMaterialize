// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

 // Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "canal": 'ayacucho',
  "categoria": 23.5,
  "subcategoria": 18.1
},{
  "canal": 'miraflores',
  "categoria": 26.2,
  "subcategoria": 22.8
},{
  "canal":' bahovar',
  "categoria": 30.1,
  "subcategoria": 23.9
},{
  "canal": 'surco',
  "categoria": 29.5,
  "subcategoria": 25.1
},{
  "canal": 'ventanilla',
  "categoria": 24.6,
  "subcategoria": 25
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "canal";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "canal";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;

  var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
  categoryLabel.label.text = "{name}";
  categoryLabel.label.horizontalCenter = "right";
  categoryLabel.label.dx = -10;
  categoryLabel.label.fill = am4core.color("#fff");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

createSeries("categoria", "categoria");
createSeries("subcategoria", "subcategoria");