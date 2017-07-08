import React, { Component } from 'react';

class ProjectItem extends Component {
   deleteProject(id)
   {
      this.props.onDelete(id);
   } 

  render() {
      
    return (
      <li className="ProjectItem">
          <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.protoTypes = {
  project : React.PropTypes.object,
  onDelete : React.PropTypes.func
}

export default ProjectItem;