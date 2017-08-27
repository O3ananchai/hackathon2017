import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'

class FileInput extends PureComponent {
  state = { file: null }
  handleDrop = files => {
    const [file] = files
    this.setState({ file })
    const reader = new FileReader()
    reader.onload = e => {
      this.props.onChange(e.target.result)
    }
    reader.readAsBinaryString(file)
  }

  renderFileInfo() {
    if (!this.state.file) {
      return null
    }
    const { file } = this.state
    return (
      <div>
        <h5>Added file:</h5>
        - {file.name} - {file.size} bytes
      </div>
    )
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.handleDrop}>
          <p>
            {this.props.description}
          </p>
          {this.renderFileInfo()}
        </Dropzone>
      </div>
    )
  }
}

export default FileInput
