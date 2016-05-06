import d3 from 'd3';
import './chart.scss';

export default class RouteNetwork {
  constructor(el, size, data) {
    this.svg = d3.select(el).append('svg')
    .attr('width', size.width)
    .attr('height', size.height);


    this.force = d3.layout.force()
    .size([size.width, size.height]);

    this.update(el, data);
  }

  update(el, data) {
    
    let formatedData = this.formatData(data);

    this.force
      .nodes(formatedData.nodes)
      .links(formatedData.links);

    var link = this.svg.selectAll(".link")
      .data(formatedData.links)
      .enter().append("line")
      .attr("class", "link");

    var node = this.svg.selectAll(".node")
      .data(formatedData.nodes)
      .enter().append("g")
      .attr("class", "node")

    //node.append("text")
    //  .attr("dx", 12)
    //  .attr("dy", ".35em")
    //  .text(function(d) { return d.name });

    this.force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

      node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    }); 

    this.force.start();
  }

  formatData(data) {

    return {
      nodes: [
        { x:   this.width/3, y: this.height/2 },
        { x: 2*this.width/3, y: this.height/2 }
      ],
      links: [
        { source: 0, target: 1 }
      ]
    };
    let formatedData = {
      nodes: [],
      links: [],
    }

    data.map((stop, i) => {
      formatedData.nodes.push({
        'name': stop.name,
      })

      stop.prevStop.map((pStop) => {
        formatedData.links.push({
          'source': i,
          'target': pStop.stopId,
        })
      });
    });

    console.log(formatedData);
    

    return formatedData;
 }
}
