import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dogImagePath: '',
      dogName: '',
      dogBreed: '',
      storedImages: [],
      storedBreeds: [],
      infoSaved: {},
      loading: true,
    };

    this.loadSavedDogs = this.loadSavedDogs.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    this.dogNameInput = this.dogNameInput.bind(this);
    this.fetchDogImage = this.fetchDogImage.bind(this);
    this.addDog = this.addDog.bind(this);
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      const info = localStorage.getItem('infosSalvas');
      if (info.length > 2) this.loadSavedDogs();
    }
    this.fetchDogImage();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { dogImagePath } = nextState;
    return !dogImagePath.includes('terrier');
  }

  componentDidUpdate() {
    const { infoSaved } = this.state;
    if (infoSaved) {
      const info = JSON.stringify(infoSaved);
      localStorage.setItem('infosSalvas', info);
    }
  }

  clearStorage() {
    localStorage.clear();
  }

  loadSavedDogs() {
    const info = localStorage.getItem('infosSalvas');
    const allInfo = JSON.parse(info);
    const storedImages = [];
    const storedBreeds = [];
    Object.keys(allInfo).forEach((dogImage) => {
      storedImages.push(dogImage);
      storedBreeds.push(allInfo[dogImage][1]);
    });
    this.setState({
      storedImages,
      storedBreeds,
      infoSaved: allInfo,
    }, () => this.fetchDogImage());
  }

  addDog() {
    const {
      infoSaved,
      dogImagePath,
      dogBreed,
      dogName } = this.state;

    if (!dogImagePath.includes('terrier')) {
      if (dogName.trim() !== '') {
        infoSaved[dogImagePath] = [dogName, dogBreed];
      }
      this.setState((prevState) => ({
        storedImages: [...prevState.storedImages, dogImagePath],
        storedBreeds: [...prevState.storedBreeds, dogBreed],
        infoSaved,
        dogName: '',
      }));
    }
    this.fetchDogImage();
  }

  async fetchDogImage() {
    this.setState(
      { loading: true },
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const { message } = await response.json();
        const dogBreed = message.replace(/.*breeds\//, '').replace(/\/.*/, '');
        this.setState({
          dogImagePath: message,
          loading: false,
          dogBreed,
        });
      },
    );
  }

  dogNameInput({ target: { value } }) {
    this.setState({
      dogName: value,
    });
  }

  renderDogImage() {
    const { dogImagePath, dogName, dogBreed } = this.state;
    if (dogImagePath.includes('terrier')) return;
    return (
      <div>
        <p>
          {dogBreed}
        </p>
        <img
          className="dog-img"
          src={ dogImagePath }
          alt="Dog"
        />
        <input
          name={ dogImagePath }
          onChange={ this.dogNameInput }
          value={ dogName }
        />
      </div>
    );
  }

  render() {
    const { storedImages, storedBreeds, infoSaved, loading } = this.state;
    const loadingElement = <div>Loading...</div>;
    return (
      <div className="App">
        <div className="stored-images">
          {storedImages.map((imagePath, index) => (
            <div key={ index }>
              <p>{ storedBreeds[index] }</p>
              <img
                className="dog-img"
                src={ imagePath }
                alt="Dog"
              />
              { infoSaved[imagePath]
                ? (<p>{infoSaved[imagePath][0]}</p>) : null }
            </div>
          ))}
          {loading ? loadingElement : this.renderDogImage() }
        </div>
        <div>
          <button type="button" onClick={ this.addDog }>
            Buscar mais um doguinho
          </button>
          <button type="button" onClick={ this.clearStorage }>
            Limpar doguinhos
          </button>
        </div>
      </div>
    );
  }
}

export default App;
