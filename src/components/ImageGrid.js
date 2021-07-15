import React from 'react';

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({spans})
  }
  render() {
    const { spans } = this.state;
    const { description, urls } = this.props.image;
    return(
      <div style={{ gridRowEnd: `span ${spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageGrid;
