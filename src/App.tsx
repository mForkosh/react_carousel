import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, step, frameSize, itemWidth, animationDuration } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
        />
        <div className="wrapForInputs">
          <input
            className="inputs"
            type="number"
            placeholder="Размер в пикселях"
            onChange={e => {
              this.setState({ itemWidth: Number(e.target.value) });
            }}
          />
          <input
            className="inputs"
            type="number"
            placeholder="Количество картинок"
            onChange={e => {
              this.setState({ frameSize: Number(e.target.value) });
            }}
          />
          <input
            className="inputs"
            type="number"
            placeholder="Шаг прокрутки"
            onChange={e => {
              this.setState({ step: Number(e.target.value) });
            }}
          />
          <input
            className="inputs"
            type="number"
            placeholder="Время анимации"
            onChange={e => {
              this.setState({ animationDuration: Number(e.target.value) });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
