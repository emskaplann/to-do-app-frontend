class UserService {
  constructor(component) {
    this.component = component
    this.workingURL = 'https://arcane-sands-50858.herokuapp.com'
    // this.workingURL = 'http://localhost:3000'
  }


  createUser = (user) => {
    this.component.setState({loading: !this.component.state.loading})
    fetch(`${this.workingURL}/users`, { //eslint-disable-line
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then(response => response.json())
    .then((data) => {
      if(data.errors !== undefined && data.errors !== null) {
        this.component.setState({
          logErrors: data.errors
        }, () => this.component.setState({loading: !this.component.state.loading}))
      } else {
        localStorage.token = data.token
        localStorage.userId = data.user_id
        this.component.setState({
          token: data.token,
          loggedInUserId: data.user_id,
          loggedIn: data.token !== undefined && data.token !== "" && data.token !== null,
          logErrors: []
        }, () => this.component.setState({loading: !this.component.state.loading}))
      }
    })
    .catch((e) => {
      this.component.setState({loading: !this.component.state.loading})
      console.log(e)
    })
  }

  login = (user) => {
    this.component.setState({loading: !this.component.state.loading})
    fetch(`${this.workingURL}/login`, { //eslint-disable-line
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(response => response.json())
      .then((data) => {
        if(data.errors !== undefined && data.errors !== null) {
          this.component.setState({
            logErrors: data.errors
          }, () => this.component.setState({loading: !this.component.state.loading}))
        } else {
          localStorage.token = data.token
          localStorage.userId = data.user_id
          this.component.setState({
            token: data.token,
            loggedInUserId: data.user_id,
            loggedIn: data.token !== undefined && data.token !== "" && data.token !== null,
            logErrors: []
          }, () => this.component.setState({loading: !this.component.state.loading}))
        }
      })
      .catch((e) => {
        this.component.setState({loading: !this.component.state.loading})
        console.log(e)
      })
  }
}
export default UserService
