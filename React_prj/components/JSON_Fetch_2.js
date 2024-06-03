import React from 'react';
class JSON_Fetch_2 extends React.Component
{
    state = {
        items: []
     };

    componentDidMount() {
        fetch('http://localhost:8091/')
        .then(Response => Response.json())
        .then(data => this.setState({items: data }));
    }
    render() {
        const { items } = this.state;
        return (
            <div>
                 {items.map(item => (
                   <div key={item.id}>
                    <h1>{item.id}</h1>
                    <p>{item.name}</p>
              </div>
           ))}
       </div>
    );
  }
}

export default JSON_Fetch_2;
