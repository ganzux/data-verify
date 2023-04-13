import React from 'react';

class RandomGraph extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Generate an array of 10 random numbers between 0 and 10
        const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

        // Determine the max and min values in the data
        const minValue = Math.min(...data);
        const maxValue = Math.max(...data);

        // Calculate the range of the data
        const range = maxValue - minValue;

        // Calculate the width and height of each data point
        const pointWidth = width / data.length;
        const pointHeight = height / range;

        // Draw the y-axis
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, 0);
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Draw the x-axis
        ctx.beginPath();
        ctx.moveTo(0, height - (data[0] - minValue) * pointHeight);
        ctx.lineTo(width, height - (data[0] - minValue) * pointHeight);
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // Draw the line chart
        ctx.beginPath();
        ctx.moveTo(0, height - (data[0] - minValue) * pointHeight);
        for (let i = 1; i < data.length; i++) {
            ctx.lineTo(i * pointWidth, height - (data[i] - minValue) * pointHeight);
        }
        ctx.strokeStyle = '#0000ff';
        ctx.stroke();
    }

    render() {
        return <canvas ref={this.canvasRef} width={450} height={450} />;
    }
}

export default RandomGraph;
