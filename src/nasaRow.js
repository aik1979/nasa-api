import React from "react";

class NASARow extends React.Component {
  viewnasaItem() {
    // console.log(this.props.nasaItem.data[0].nasa_id);
    const url =
      "https://images.nasa.gov/details-" +
      this.props.nasaItem.data[0].nasa_id +
      ".html";
    window.location.href = url;
  }
  render() {
    return (
      <div class="card-nasa col-md-5">
        <img
          class="card-img-top"
          src={this.props.nasaItem.image_src}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-uppercase">
            {this.props.nasaItem.data[0].title}
          </h5>
          <p class="card-text-nasa text-lowercase">
            {this.props.nasaItem.data[0].description}
          </p>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-6 font-italic">
              <p>Provided by: {this.props.nasaItem.data[0].center}</p>
            </div>
            <div class="col-md-6 text-right">
              <input
                class="btn btn-primary"
                onClick={this.viewnasaItem.bind(this)}
                value="Go to Item"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NASARow;
