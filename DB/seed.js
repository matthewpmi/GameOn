/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Models = require('./models');
const { getMaxListeners } = require('./Users');

const { Users, Events, TeamList} = Models;

const eventData = [
  {
    attendees: [],
    owner: '',
    locName: 'Jefferson Playground',
    description: 'In the gymnasium',
    address: '4100 South Drive, Jefferson, Louisiana 70121, United States',
    date: '2021-03-30',
    time: '6:00 pm',
    coordinates: [-90.166775, 29.95726],
    category: '',
    catName: 'Basketball',
    image: 'basketball',
    players: 5,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'City Park Tennis Courts',
    description: 'BYOR',
    address: 'City Park Pepsi Tennis Center, Marconi Drive, Lakeview, New Orleans, LA 70124',
    date: '2022-08-21',
    time: '3:00 pm',
    coordinates: [-90.09817715313504, 29.99698613212327],
    category: '',
    catName: 'Tennis',
    image: 'tennis',
    players: 2,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Coconut Beach Volleyball Complex',
    description: 'Bring knee pads',
    address: '100 Coconut Beach Ct, Kenner, LA 70065',
    date: '2023-05-22',
    time: '5:00 pm',
    coordinates: [-90.243582, 30.0374896],
    category: '',
    catName: 'Volleyball',
    image: 'volleyball',
    players: 12,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Lafreniere Flag Football Field',
    description: 'Bring water and a white shirt',
    address: '3000 Downs Blvd, Metairie, LA 70003',
    date: '2022-10-05',
    time: '9:00 pm',
    coordinates: [-90.214837, 29.996739],
    category: '',
    catName: 'Football',
    image: 'football',
    players: 22,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Lafreniere Soccer Field',
    description: 'We will be wearing red shirts.',
    address: '3000 Downs Blvd, Metairie, LA 70003',
    date: '2022-12-08',
    time: '2:00 pm',
    coordinates: [-90.214837, 29.9990368],
    category: '',
    catName: 'Soccer',
    image: 'soccer',
    players: 10,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Shelter #12 at Audubon Park',
    description: 'We are playing by the shelter near the playground',
    address: 'Park Nature Trail, 6500 Magazine St, New Orleans, LA 70118',
    date: '2023-09-29',
    time: '6:00 pm',
    coordinates: [-90.124135, 29.9342911],
    category: '',
    catName: 'Ultimate frisbee',
    image: 'frisbee',
    players: 4,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Quad Softball Field 2',
    description: 'Play softball over near grow dat farm',
    address: '35 Diagonal Dr, New Orleans, LA 70122',
    date: '2022-05-10',
    time: '12:00 pm',
    coordinates: [-90.0961103, 29.9956118],
    category: '',
    catName: 'Softball',
    image: 'softball',
    players: 10,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Rock N Bowl',
    description: 'Go bowling at rock n bowl',
    address: '3016 S Carrollton Ave, New Orleans, LA 70118',
    date: '2022-03-29',
    time: '5:00 pm',
    coordinates: [-90.1092962, 29.995657],
    category: '',
    catName: 'Bowling',
    image: 'bowling',
    players: 22,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Dreyfous Meadow',
    description: 'Play rugby at outside of NOMA',
    address: 'Collins Diboll Cir, New Orleans, LA 70119',
    date: '2022-02-19',
    time: '4:00 pm',
    coordinates: [-90.0931201, 29.9854845],
    category: '',
    catName: 'Rugby',
    image: 'rugby',
    players: 14,
    isOpen: true,
    isExpired: false,
  },
  {
    attendees: [],
    owner: '',
    locName: 'Shamrock',
    description: 'Play ping pong at shamrock',
    address: '4133 S Carrollton Ave, New Orleans, LA 70119',
    date: '2025-01-04',
    time: '9:00 pm',
    coordinates: [-90.1086827, 29.9700193],
    category: '',
    catName: 'Ping Pong',
    image: 'pingpong',
    players: 4,
    isOpen: true,
    isExpired: false,
  },
];

eventData.forEach((event) => {
  Events.create(event).catch((err) => {
    console.error(err);
  });
});

const usersData = [
  {
    googleUser: 'jas@gmail.com',
    username: 'jasMin',
    email: 'jas@gmail.com',
    address: '143 Street',
    phone: '5046804756',
    googleId: 'jas@gmail.com',
    secret: String,
  },
  {
    googleUser: 'puckjones@gmail.com',
    username: 'puck',
    email: 'puckjones@gmail.com',
    address: '833 Dodge Ave',
    phone: '5043372289',
    googleId: 'puckjones@gmail.com',
    secret: String,
  },

];

usersData.forEach((event) => {
  Users.create(event).catch((err) => {
    console.error(err);
  });
});

const teamData = [
  {
    owner: 'brendantcarmichael@gmail.com',
    teamName: 'Postmen At Work',
    playerList: ['Jordan Davis', 'Matt Mekita', 'Kevin Klein', 'Brendan Carmichael']
  },
  {
    owner: 'colinhay@colinhayexample.com',
    teamName: 'Men At Work',
    playerList: ['Colin Hay', 'Ron Strykert', 'Greg Ham', 'Jerry Speiser', 'John Rees']
  },
  {
    owner: 'bugsbunny@bugsbunnyexample.com',
    teamName: 'Toon Squad',
    playerList: ['Bugs Bunny', 'Michael Jordan', 'Daffy Duck', 'Bill Murray', 'Yosemite Sam']
  },
  {
    owner: 'Gregg Popovich',
    teamName: 'San Antonio Spurs',
    playerList: ['Tim Duncan', 'Manu Ginobli', 'Tony Parker', 'Kawhi Leonard', 'Danny Green',
    'Tiago Splitter', 'Boris Diaw', 'Marco Belinelli']
  },

];



teamData.forEach((team) => {
  TeamList.create(team).catch((err) => {
    console.error(err);
  });
});
