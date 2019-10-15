import React from 'react';
import './App.css';

const App = () => <PersonList />

const PersonList = () => {
  const people = [
    {
      image: 75,
      name: 'Lina',
      job: 'Developer'
    },
    {
      image: 22,
      name: 'Ilona',
      job: 'Designer'
    },
    {
      image: 35,
      name: 'Laura',
      job: 'Artist'
    }
  ]
  return (
    <section>
      <Person person={people[0]}>
        Reprehenderit ullamco Lorem est proident. Cupidatat tempor qui esse nulla labore do incididunt aute amet magna occaecat magna officia. 
      </Person>
      <Person person={people[1]}>
        Ipsum ad laborum et id eiusmod. Aliqua aliquip sint esse esse aliquip minim do nisi laborum consectetur magna. 
      </Person>
      <Person person={people[2]}>
        Incididunt tempor irure esse laborum Lorem. Eiusmod ut aliquip commodo quis amet sint voluptate ut reprehenderit laborum.        
      </Person>
    </section>
  );
}

const Person = (props) => {
  const {image,name,job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${image}.jpg`;
  return (
  <div className="person">
    <img alt={name} src={url} />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>
  );
}

export default App;
