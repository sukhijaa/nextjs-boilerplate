import React, {Component} from 'react';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/table';
import Head from 'next/head'

const textAreaID = 'textAreaForTinyMCE';

class TinyEditorComponent extends Component {
  static defaultProps = {
    content: '<p>This is the initial content of the editor</p>',
  };

  constructor(props) {
    super(props);
    this.state = {editor: null};
  }

  handleEditorChange = content => {
    console.log('Inside Change Handler');
    console.log(content);
  };

  componentDidMount() {
    tinymce.init({
      selector: `#${textAreaID}`,
      plugins: ['wordcount', 'table'],
      setup: editor => {
        this.setState({editor});
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.handleEditorChange(content);
        });
      },
    });
  }

  componentWillUnmount() {
    tinymce.remove(this.state.editor);
  }

  render() {
    return (
      <div>
        <Head>
          <script src={'/tinymce/tinymce.min.js'}/>
        </Head>
        <textarea
          id={textAreaID}
          value={this.props.content}
          onChange={e => console.log(e)}
        />
      </div>
    );
  }
}

export default TinyEditorComponent;
