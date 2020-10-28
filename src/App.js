import React, { Component } from "react";
import {
  ReactiveList,
  ReactiveBase,
  DataSearch,
  NumberBox,
  RangeInput,
  DateRange,
  SingleList,
  RangeSlider,
} from "@appbaseio/reactivesearch";
import { ReactiveGoogleMap } from "@appbaseio/reactivemaps";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="rettetetetettet"
          credentials="NADMdVx0I:f5579985-2e52-4f5f-bcaf-a47452cac311"
          theme={{
            colors: {
              primaryColor: "#41ABF5",
            },
          }}
        >
          <div className="search-container">
            <DataSearch
              componentId="search"
              dataField="Name"
              placeholder="Search   names..."
              iconPosition="left"
              className="search"
            />
            <RangeInput
  dataField="Age"
  componentId="AgeRange"
  range={{
    start: 0,
    end: 100,
  }}
  rangeLabels={{
    start: '0',
    end: '100',
  }}
/>
            <DateRange
              componentId="SpeciesFilter"
              dataField="Date"
              title="DateRange"
              placeholder={{
                start: "Start Date",
                end: "End Date",
              }}
              queryFormat="date"
              autoFocusEnd={true}
              showClear={true}
              showFilter={true}
              filterLabel="Date"
              URLParams={false}
            />{" "}
          </div>
          <div className="result-map-container">
            <ReactiveGoogleMap
              componentId="map"
              defaultMapStyle="Flat Map"
              dataField="location"
              defaultZoom={5}
              pagination
              showMarkers={true}
              showMarkerClusters={false}
              showSearchAsMove={true}
              innerClass={{
                label: "label",
              }}
              renderAllData={(
                hits,
                streamHits,
                loadMore,
                renderMap,
                renderPagination
              ) => (
                <div>
                  <div className="flex-container">
                    <div className="d-none  d-lg-flex card-container">
                      {" "}
                      {hits.map((data) => (
                        <div
                          key={data._id}
                          className="card text-white bg-danger mb-3"
                        >
                          <div className="card-header">
                            {" "}
                            {data.Sex} - {data.Name} - {data.Age}  years{" "}
                          </div>{" "}
                          <div className="card-text white-card">
                            <div
                              data-toggle="tooltip"
                              data-html="true"
                              title="White Shark"
                              data-placement="top"
                              className="card__image"
                              style={{
                                backgroundImage: `url( "${data.Image}" )`,
                              }}
                              alt={data.Species}
                            />{" "}
                            <div className="pt-2 attack-data">
                            <div className="activity">Activity : {data.Activity}</div>
                            <div className="type">Type : {data.Type}</div>
                              <a
                                target="_blank"
                                href={data.href}
                                className="mt-2 card__info"
                              >
                                <svg
                                  width="1.5em"
                                  height="1.5em"
                                  viewBox="0 0 16 16"
                                  className="mr-2 bi bi-file-earmark-text"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                                  />
                                </svg>
                                {data.Location} · {data.Date}{" "}
                              </a>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>
                      ))}{" "}
                      <div> {renderPagination()} </div>{" "}
                    </div>{" "}
                    <div className="map-container"> {renderMap()} </div>{" "}
                  </div>{" "}
                </div>
              )}
              renderData={(data) => ({
                label: (
                  <div
                    className="marker"
                    style={{
                    }}
                  >
                    <div className="extra-info"> </div> {data.Name} -{" "}
                    {data.Date}{" "}
                  </div>
                ),
              })}
              react={{
                and: ["search", "DateSensor", "SpeciesFilter","AgeRange"],
              }}
            />{" "}
          </div>{" "}
        </ReactiveBase>{" "}
      </div>
    );
  }
}

export default App;

// TO DO

//RELOAD
//responsive
//MARKERS
//FATAL
//PUSH

//   <div className="row">
//             <div className="col">
//               <SingleList
//                 title="Places"
//                 componentId="SpeciesFilter"
//                 dataField="Species.keyword"
//                 size={50}
//                 showSearch
//               />
//               <div
//                 style={{
//                   marginTop: "20px",
//                   marginBottom: "5px",
//                   fontSize: "1 rem"
//                 }}
//               >
//               </div>
// </div>
// </div>
