import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import Head from "next/head";

export default class TinyMCEEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editor: null};
  }

  handleEditorChange = content => {
    console.log('Inside Change Handler');
    console.log(content);
  };

  render() {
    return (
      <div>
        <Head>
          <script type={'text/javascripti'} src={'/tinymce/tinymce.min.js'}/>
        </Head>
        <Editor
          initialValue="<p>This is the initial content of the editor</p>"
          apiKey={'yv40zlzn9i27qfj1wxdbi6pud7bxehmit5kb2k6ex0a5nft5'}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={this.handleEditorChange}
        />
      </div>
    );
  }
}
