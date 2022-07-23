import React, { useContext } from 'react';
import { UserContext } from '../index';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { teal } from '@mui/material/colors';


const styles = {
  tab: {
    color: '#E7F6F2',
  },
};

const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'black',
  fontSize: 17,
};

export default function ImageAvatar(props) {
  const user = useContext(UserContext);
  console.log(props)
  if (user){
    return (
      <Grid xs={2}>
        <Link to="/profile" style={linkStyle}>{
          <Tab
            icon={
              <Avatar
                alt= {user.firstName[0] + user.lastName[0]}
                src={user.image}
                sx={{ width: 24, height: 24 }}
              />
            }
            style={styles.tab}
            label='PROFILE'
          />
        }
        </Link>
      </Grid>
    );
  } else{
    return (
      <Grid xs={2}><Link to="/profile" style={linkStyle}>{<Tab icon={<AccountCircleIcon sx={{ color: teal[100] }} />} style={styles.tab} label='PROFILE' />}</Link></Grid>
      )

  }
}