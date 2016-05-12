import d3 from 'd3';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Stops extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let transportIcon = (icon) => {
      switch(icon) {
        case 'plane':
          return '\uf072';
          break;
        default:
          return 'meh';
          break;
      }
    };

    let { width, height, stops } = this.props;
    let radius = 25;
    

    let yScale = d3.scale.linear()
      .domain([0, stops.length])
      .range([30, height]);

    return (
      <g>
      {stops.map((stop, i) => {
        let icon = transportIcon('plane');
        
        let y = yScale(i);

        if(i > 0) {
          console.log(stop.prevStop.time.format('m'));
          let lineCords = {
            x1: width/2,
            y1: yScale(i-1)+radius,
            x2: width/2,
            y2: yScale(i)-radius,
          }

          let line = (
            <line
              x1={lineCords.x1}
              y1={lineCords.y1}
              x2={lineCords.x2}
              y2={lineCords.y2}
              stroke='#63787c'
              strokeWidth='1'
              />
          )

          let travelCord = {
            y: yScale(i-0.5)
          }
          let travelForm = (
            <g>
              <text
                textAnchor='middle'
                alignmentBaseline="top"
                fontFamily='FontAwesome'
                fontSize='30'
                fill='black'
                x={width/2 + 15}
                y={travelCord.y}>
                {icon}
              </text>
 
              <text
                textAnchor='start'
                x={width/2}
                y={travelCord.y}>
                {`${stop.prevStop.time.format('m')} min.`}
              </text>
            </g>
          )



          var travel = (
            <g>
              {line}
              {travelForm}
            </g>
          )
        }
        

        return (
          <g key={i}>
          <circle
            cx={width/2}
            cy={y}
            r={radius}
            strokeWidth='1'
            fill="#a73c3c"
            stroke="#63787c"
            />

          <text
            textAnchor='end'
            x={width/2 - (radius+10)}
            y={y+5}>
            {stop.name}
          </text>

         {travel}
          </g>
        )
      })};
      </g>
    )
  }
};
