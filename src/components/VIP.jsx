import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchData from "./service/service";
import "bootstrap/dist/css/bootstrap.min.css";

export default function VIP() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await fetchData("https://expressrichpepole.onrender.com/");
        setPeople(resp.data);
        console.log(resp.data);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">World’s Richest People</h2>
      <div className="row">
        {people.map((person) => (
          <div key={person.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={person.image}
                className="card-img-top"
                alt={person.name}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text mb-1">
                  <strong>Worth:</strong> {person.worth} USD</p>
                <p className="card-text">
                  <strong>Company:</strong> {person.source}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
