import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../components/album.css";
var id;
var album1 = "";
var album2 = "";
var album3 = "";
var title1 = "";
var title2 = "";
var title3 = "";
var array = [];

var firstAlbumCounter = 0;
var secondAlbumCounter = 0;
var thirdAlbumCounter = 0;
function Album() {
  const [albumOne, setAlbumOne] = useState([]);
  const [albumTwo, setAlbumTwo] = useState([]);
  const [albumThree, setAlbumThree] = useState([]);
  const [data1, setData] = useState("");
  // album.length
  useEffect((e) => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        //   setAlbum(res.data)
        // console.log(res.data.length)
        for (let index = 0; index < res.data.length; index++) {
          if (res.data.length - 1 === index) {
            console.log(res.data[index].albumId);

            id = res.data[index].albumId;
          }
          // console.log(data1);
        }

        console.log(id);

        for (let index = 0; index < res.data.length; index++) {
          if (res.data[index].albumId == id - 2) {
            // setAlbum(res.data[index]);
            firstAlbumCounter++;
            // console.log(res.data[index].url);
            album1 = album1 + res.data[index].url + firstAlbumCounter + "url";
            title1 =
              title1 + res.data[index].title + firstAlbumCounter + "title";
            // if(res.data[index].albumId===id-3){
            //     console.log(res.data[index].albumId)
            // }
          }
          if (res.data[index].albumId == id - 1) {
            // setAlbum(res.data[index]);
            secondAlbumCounter++;
            // console.log(res.data[index].url);
            album2 = album2 + res.data[index].url + secondAlbumCounter + "url";
            title2 =
              title2 + res.data[index].title + secondAlbumCounter + "title";
            // if(res.data[index].albumId===id-3){
            //     console.log(res.data[index].albumId)
            // }
          }
          if (res.data[index].albumId == id) {
            // setAlbum(res.data[index]);
            thirdAlbumCounter++;
            // console.log(res.data[index].url);
            album3 = album3 + res.data[index].url + thirdAlbumCounter + "url";
            title3 =
              title3 + res.data[index].title + thirdAlbumCounter + "title";

            // if(res.data[index].albumId===id-3){
            //     console.log(res.data[index].albumId)
            // }
          }
        }
        // array.push( {
        //     pic: album1.split("48url")[1].split("49url")[0],
        //     title: title1.split("48title")[1].split("49title")[0],
        //   },
        //   {
        //     pic: album1.split("49url")[1].split("50url")[0],
        //     title: title1.split("49title")[1].split("50title")[0],
        //   },
        //   {
        //     pic: album2.split("48url")[2].split("49url")[0],
        //     title: title2.split("48title")[1].split("49title")[0],
        //   },
        //   {
        //     pic: album2.split("49url")[1].split("50url")[0],
        //     title: title2.split("49title")[1].split("50title")[0],
        //   },
        //   {
        //     pic: album3.split("48url")[1].split("49url")[0],
        //     title: title3.split("48title")[1].split("49title")[0],
        //   },
        //   {
        //     pic: album3.split("49url")[2].split("50url")[0],
        //     title: title3.split("49title")[1].split("50title")[0],
        //   },)
        setAlbumOne([
          ...albumOne,

          {
            pic: album1.split("48url")[1].split("49url")[0],
            title: title1.split("48title")[1].split("49title")[0],
          },
          {
            pic: album1.split("49url")[1].split("50url")[0],
            title: title1.split("49title")[1].split("50title")[0],
          },
        ]);
        setAlbumTwo([
          ...albumTwo,
          {
            pic: album2.split("48url")[2].split("49url")[0],
            title: title2.split("48title")[1].split("49title")[0],
          },
          {
            pic: album2.split("49url")[1].split("50url")[0],
            title: title2.split("49title")[1].split("50title")[0],
          },
        ]);
        setAlbumThree([
          ...albumThree,
          {
            pic: album3.split("48url")[1].split("49url")[0],
            title: title3.split("48title")[1].split("49title")[0],
          },
          {
            pic: album3.split("49url")[2].split("50url")[0],
            title: title3.split("49title")[1].split("50title")[0],
          },
        ]);
        // console.log(title2.split("48title")[1].split("49title")[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  //   console.log(album[0].pic);
  //   console.log(album.split("junaid49")[1]);
  // console.log();
  return (
    <div>
      <div className="row show">
        {albumOne.map((data) => (
          <div className="album1 col-lg-5">
            <img className="image" src={data.pic} />
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>

      <div className="show row">
        {albumTwo.map((data) => (
          <div className="col-lg-5 album2">
            <img className="image" src={data.pic} />
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>
      <div className="show row">
        {albumThree.map((data) => (
          <div className="col-lg-5 album3">
            <img className="image" src={data.pic} />
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
