import React from 'react';
import useResources from './useResources';

/*Class based example: See how we have to write duplicate code in multiple lifecycle events
class ResourceList extends React.Component {
  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}
*/

/* Hook based example: useResources being a React Hook can be re-used in multiple components */
const ResourceList = ({ resource }) => {
  return (
    <ul>
      {useResources(resource).map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
