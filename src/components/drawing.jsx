import React, { useRef, useState } from 'react';
import './drawing.css'

const drawing = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [color, setColor] = useState('#000');
  const [brushSize, setBrushSize] = useState(5);
  const [shape, setShape] = useState('rectangle'); // Default shape is rectangle

  const startDrawing = (e) => {
    setIsDrawing(true);
    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = shape === 'eraser' ? '#fff' : color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();

    setPrevX(e.nativeEvent.offsetX);
    setPrevY(e.nativeEvent.offsetY);
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const saveCanvas = () => {
    const link = document.createElement('a');
    link.href = canvasRef.current.toDataURL();
    link.download = 'my_sketch.png';
    link.click();
  };

  return (
    <div className='inspactor'>
      <h1>Whiteboard</h1><br />
       <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className='in1'
      />
      <input
        type="range"
        min="1"
        max="20"
        value={brushSize}
        onChange={(e) => setBrushSize(Number(e.target.value))}
        className='in1'
      />
      <button onClick={() => setShape('eraser')}className='but'>Eraser</button>
      <button onClick={clearCanvas} className='but'>Clear Canvas</button>
      <button onClick={saveCanvas} className='but'>Save</button>
    <div className='incharge'>
     
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        className='c1'
      />
    </div>
    </div>
  );
};


export default drawing;
