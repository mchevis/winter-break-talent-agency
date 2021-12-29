import React from "react";
import axios from "axios";

class SingleClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {},
    };
  }
  async componentDidMount() {
    const { data: client } = await axios.get(
      `/api/clients/${this.props.match.params.id}`
    );
    this.setState({ client });
  }
  render() {
    return (
      <div id="single-client-page">{JSON.stringify(this.state.client)}</div>
    );
  }
}

export default SingleClient;
