import React from 'react';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


class UserApi extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:8000';
    this.state = {
      users: [],
      f_name: '',
      l_name: '',
      email: '',
      password: '',
      password_validate: '',
      phone_num: '',
      bio: '',
      loading: true,
      error: false,
    };
  }

  // async componentDidMount() {
  //   try {
  //     const response = await fetch('http://localhost:8000/users');
  //     const data = await response.json();
  //     this.setState({ users: data, loading: false });
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ error: true });
  //   }
  // }

  async saveOnLocalForge(token,user) {
    try {
      const petApp = await localforage.getItem('petApp');

      if (petApp === null) {
        await localforage.setItem('petApp', {
          token: token,
          _id: user._id,
        });
      } else {
        await localforage.setItem('petApp', {
          token: token,
          _id: user._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }


  async newUser(f_name, l_name, email, password, password_validate, phone_num, bio) {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          f_name: f_name,
          l_name: l_name,
          email: email,
          password: password,
          password_validate: password_validate,
          phone_num: phone_num,
          bio: bio,
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem('petApp', data.token);
      //redirect to home page
      
      return
    } catch (error) {
      console.log(error);
    }
  }

  async login(email, password) {
    try {
      const response = await fetch('http://localhost:8000/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      await this.saveOnLocalForge(data.token,data.user);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      //remove token from local forage token and id
      await localforage.removeItem('petApp');
    } catch (error) {
      console.log(error);
    }
  }


  async getUserById(_id) {
    try {
      if (_id === '') {
        return
      }
      const response = await fetch("http://localhost:8000/user/" + _id, 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('petApp')
        },
      });

      
      const data = await response.json();
      return data
    } catch (error) {
      // console.log(error);
    }
  }

  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (this.state.error) {
      return <div>error...</div>;
    }
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.f_name} {user.l_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

UserApi.propTypes = {
  history: PropTypes.object.isRequired,
};


export default UserApi;
