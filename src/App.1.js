import "./App.css";

import React, { Component } from "react";

import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //console.log("props initialised");
    // const nasa = [
    //   {
    //     id: 0,
    //     image_src: "https://api.nasa.gov/images/logo.png",
    //     title: "this is the title",
    //     description: "this is the description",
    //     centre: "0"
    //   },
    //   {
    //     id: 1,
    //     image_src: "https://api.nasa.gov/images/logo.png",
    //     title: "this is the title2",
    //     description: "this is the description2",
    //     centre: "1"
    //   }
    // ];

    // var nasaRows = [];
    // nasa.forEach(nasaItem => {
    //   console.log(nasaItem.title);
    //   const nasaRow = <NASARow nasaItem={nasaItem} />;
    //   nasaRows.push(nasaRow);
    // });
    // this.state = { rows: nasaRows };
    this.performSearch("moon");
  }

  performSearch(searchTerm) {
    console.log("Search using NASA API");
    const URLstring =
      "https://images-api.nasa.gov/search?q=" +
      searchTerm;
    $.ajax({
      url: URLstring,
      success: searchResults => {
        console.log("Data Fetch Successful");
        // console.log(searchResults);
        const results = searchResults.collection.items;
        // console.log(results[0]);

        var nasaRows = [];

        results.forEach(nasaItem => {
          nasaItem.image_src = nasaItem.links[0].href;
          console.log(nasaItem);
          const nasaRow = (
            <NASARow key="{nasaItem.data[0].nasa_id}" nasaItem={nasaItem} />
          );
          nasaRows.push(nasaRow);
        });

        this.setState({ rows: nasaRows });
      },
      error: (xhr, status, err) => {
        console.error("Data Fetch Failed");
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleHeader">
          <tbody>
            <tr>
              <td>
                <img
                  alt="Icon"
                  width="100"
                  src="https://api.nasa.gov/images/logo.png"
                />
              </td>
              <td width="10" />
              <td>
                <h1>NASA Images</h1>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="container">
          test
        </div>
      </div>
    );
  }
}

export default App;
