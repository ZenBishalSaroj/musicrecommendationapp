import Songs from "../models/songs.js";
import {StatusCodes} from 'http-status-codes';
import { spawn,exec } from "child_process";
import axios from 'axios';
const storeSongs=async (req,res)=>{
   let songs_list=`[
      {
        "id": 0,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOAKIMP12A8C130995",
        "listen_count": 1,
        "title": "The Cove",
        "release": "Thicker Than Water",
        "artist_name": "Jack Johnson",
        "year": 0
      },
      {
        "id": 1,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOBBMDR12A8C13253B",
        "listen_count": 2,
        "title": "Entre Dos Aguas",
        "release": "Flamenco Para Niños",
        "artist_name": "Paco De Lucia",
        "year": 1976
      },
      {
        "id": 2,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOBXHDL12A81C204C0",
        "listen_count": 1,
        "title": "Stronger",
        "release": "Graduation",
        "artist_name": "Kanye West",
        "year": 2007
      },
      {
        "id": 3,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOBYHAJ12A6701BF1D",
        "listen_count": 1,
        "title": "Constellations",
        "release": "In Between Dreams",
        "artist_name": "Jack Johnson",
        "year": 2005
      },
      {
        "id": 4,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SODACBL12A8C13C273",
        "listen_count": 1,
        "title": "Learn To Fly",
        "release": "There Is Nothing Left To Lose",
        "artist_name": "Foo Fighters",
        "year": 1999
      },
      {
        "id": 5,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SODDNQT12A6D4F5F7E",
        "listen_count": 5,
        "title": "Apuesta Por El Rock 'N' Roll",
        "release": "Antología Audiovisual",
        "artist_name": "Héroes del Silencio",
        "year": 2007
      },
      {
        "id": 6,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SODXRTY12AB0180F3B",
        "listen_count": 1,
        "title": "Paper Gangsta",
        "release": "The Fame Monster",
        "artist_name": "Lady GaGa",
        "year": 2008
      },
      {
        "id": 7,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOFGUAY12AB017B0A8",
        "listen_count": 1,
        "title": "Stacked Actors",
        "release": "There Is Nothing Left To Lose",
        "artist_name": "Foo Fighters",
        "year": 1999
      },
      {
        "id": 8,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOFRQTD12A81C233C0",
        "listen_count": 1,
        "title": "Sehr kosmisch",
        "release": "Musik von Harmonia",
        "artist_name": "Harmonia",
        "year": 0
      },
      {
        "id": 9,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOHQWYZ12A6D4FA701",
        "listen_count": 1,
        "title": "Heaven's gonna burn your eyes",
        "release": "Hôtel Costes 7 by Stéphane Pompougnac",
        "artist_name": "Thievery Corporation feat. Emiliana Torrini",
        "year": 2002
      },
      {
        "id": 10,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOIYTOA12A6D4F9A23",
        "listen_count": 1,
        "title": "Let It Be Sung",
        "release": "If I Had Eyes",
        "artist_name": "Jack Johnson, Matt Costa, Zach Gill, Dan Lebowitz, Steve Adams",
        "year": 2007
      },
      {
        "id": 11,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOIZAZL12A6701C53B",
        "listen_count": 5,
        "title": "I'll Be Missing You (Featuring Faith Evans & 112)(Album Version)",
        "release": "No Way Out",
        "artist_name": "Puff Daddy",
        "year": 0
      },
      {
        "id": 12,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOJNNUA12A8AE48C7A",
        "listen_count": 1,
        "title": "Love Shack",
        "release": "Original Hits - Rock",
        "artist_name": "The B-52's",
        "year": 1989
      },
      {
        "id": 13,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOJPFQG12A58A7833A",
        "listen_count": 1,
        "title": "Clarity",
        "release": "As, Is: Cleveland, Cincinnati_ OH",
        "artist_name": "John Mayer",
        "year": 0
      },
      {
        "id": 14,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOKRIMP12A6D4F5DA3",
        "listen_count": 5,
        "title": "I?'m A Steady Rollin? Man",
        "release": "Diggin' Deeper Volume 7",
        "artist_name": "Robert Johnson",
        "year": 0
      },
      {
        "id": 15,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOLLGNU12AF72A4D4F",
        "listen_count": 1,
        "title": "The Old Saloon",
        "release": "Incredibad",
        "artist_name": "The Lonely Island",
        "year": 2009
      },
      {
        "id": 16,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOMGIYR12AB0187973",
        "listen_count": 6,
        "title": "Behind The Sea [Live In Chicago]",
        "release": "Live In Chicago",
        "artist_name": "Panic At The Disco",
        "year": 0
      },
      {
        "id": 17,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOMLMKI12A81C204BC",
        "listen_count": 1,
        "title": "Champion",
        "release": "Graduation",
        "artist_name": "Kanye West",
        "year": 2007
      },
      {
        "id": 18,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOMSQJY12A8C138539",
        "listen_count": 1,
        "title": "Breakout",
        "release": "There Is Nothing Left To Lose",
        "artist_name": "Foo Fighters",
        "year": 1999
      },
      {
        "id": 19,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SONSAEZ12A8C138D7A",
        "listen_count": 1,
        "title": "Ragged Wood",
        "release": "Fleet Foxes",
        "artist_name": "Fleet Foxes",
        "year": 2008
      },
      {
        "id": 20,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOOKGRB12A8C13CD66",
        "listen_count": 1,
        "title": "Mykonos",
        "release": "Sun Giant",
        "artist_name": "Fleet Foxes",
        "year": 2008
      },
      {
        "id": 21,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOPCVQE12AC468AF36",
        "listen_count": 1,
        "title": "Country Road",
        "release": "En Concert",
        "artist_name": "Jack Johnson, Paula Fuga",
        "year": 2009
      },
      {
        "id": 22,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOQIVUD12AB01821D2",
        "listen_count": 1,
        "title": "Oh No",
        "release": "Noble Beast",
        "artist_name": "Andrew Bird",
        "year": 2009
      },
      {
        "id": 23,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOQJLDY12AAF3B456D",
        "listen_count": 1,
        "title": "Love Song For No One",
        "release": "Room For Squares",
        "artist_name": "John Mayer",
        "year": 0
      },
      {
        "id": 24,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SOQLCKR12A81C22440",
        "listen_count": 1,
        "title": "Jewels And Gold",
        "release": "A Book Like This",
        "artist_name": "Angus & Julia Stone",
        "year": 2007
      },
      {
        "id": 25,
        "user_id": "b80344d063b5ccb3212f76538f3d9e43d87dca9e",
        "song_id": "SORPMYJ12AF729EB90",
        "listen_count": 1,
        "title": "Warning",
        "release": "Live in Malaysia 2004",
        "artist_name": "Incubus",
        "year": 2001
      },
  ]`
  let songs_lists=JSON.parse(songs_list)
    try{
        const songs= await Songs.collection.insert(songs_lists)
        res.status(StatusCodes.OK).json({songs})
    }
    catch(err){
        console.log('error',err)
    }
}
const getAllSongs=async(req,res)=>{
  try{
      const songs=await Songs.find().limit(300)
      res.status(StatusCodes.OK).json({songs})
  }
  catch(err){
      console.log('Error loading songs',err)
  }
 
}
const getRecommendedSongs=async(req,res)=>{
  const {user_id}=req.body
  try{
      const songs=await Songs.find({user_id:user_id}).select('title -_id')
      const titles=songs.map(item=>item.title)
      const {data}= await axios.post('http://127.0.0.1:8000',{titles})
      const recommendation= await Songs.find().where('title').in(Object.values(data.songs.song)).exec();
      res.status(StatusCodes.OK).json({recommendation})
      //res.status(StatusCodes.OK).json({titles})
  }
  catch(err){
      console.log('Error loading songs',err)
  }
 
}
const getUserSongs=async(req,res)=>{
  const {user_id}=req.body
  console.log(user_id)
  try{
      const usersongs=await Songs.find({user_id:user_id})
      res.status(StatusCodes.OK).json({usersongs})
  }
  catch(err){
      console.log('Error loading songs',err)
  }
 
}
const addSong=async (req,res)=>{
  const {id,user_id,song_id,listen_count,title, year,release,artist_name}=req.body
  try{
      const song= await Songs.create({id,user_id,song_id,listen_count,title, year,release,artist_name})
      res.status(StatusCodes.OK).json({song})
  }
  catch(err){
      console.log('error',err)
  }
      
}


const child= (req,res)=>{
  var process = spawn('python3',["./controller/try.py",'a','b'] );
  
    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )
    process.stderr.on('data', (data) => {
      console.error('err: ', data.toString());
    });
  // const process = spawn('python',["./try.py"]);
  // process.stdout.on('data', function (data) {
  //     //res.send(data.toString());
  //     console.log(`stdout: ${data}`);
  //     res.send('hello');
  //   });
  process.stdout.on('close',(code)=>{
    console.log('close',code)
  })
  process.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
  });
    // hild.stdin.write('https://www.youtube.com/watch?v=AVQpGI6Tq0o');
    // child.stdin.end();
}
export {storeSongs,getAllSongs,addSong,child,getRecommendedSongs,getUserSongs}