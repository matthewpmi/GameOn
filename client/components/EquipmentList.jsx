/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint linebreak-style: ['error', 'windows'] */
import React from 'react';
import axios from 'axios';

const EquipmentList = ({ equipment }) =>
  equipment.map((item, i) => <li key={i}>{item.item}</li>);

export default EquipmentList;
