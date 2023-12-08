import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [{
      id: 1,
      title: 'Titulo 1',
      body: 'O corpo'
    },
    {
      id: 2,
      title: 'Titulo 2',
      body: 'O corpo'
    },
    {
      id: 3,
      title: 'Titulo 3',
      body: 'O corpo'
    }
    
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(posts => <h1 key={posts.id}>{posts.title}</h1>)}
      </div>
    );
  }
}

export default App;
