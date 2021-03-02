import React, { Component } from 'react'
import LEdit from 'wangeditor'
import './writeArticle.scss'

export default class WriteArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorContent: ''
    }
    this.textAreaValue = this.textAreaValue.bind(this)
  }

  componentDidMount() {
    const elemMenu = this.refs.editorElemMenu
    const elemBody = this.refs.editorElemBody
    // const elemMenu = this.editorElemMenu.value
    // const elemBody = this.editorElemBody.value
    const editor = new LEdit(elemMenu, elemBody)
    console.log(editor)
    editor.config.onchange = html => {
      this.setState({
        editorContent: editor.txt.html()
      })
    }
  //   editor.config.menus = [
  //     'head',  // 标题
  //     'bold',  // 粗体
  //     'fontSize',  // 字号
  //     'fontName',  // 字体
  //     'italic',  // 斜体
  //     'underline',  // 下划线
  //     'strikeThrough',  // 删除线
  //     'foreColor',  // 文字颜色
  //     'backColor',  // 背景颜色
  //     'link',  // 插入链接
  //     'list',  // 列表
  //     'justify',  // 对齐方式
  //     'quote',  // 引用
  //     'emoticon',  // 表情
  //     'image',  // 插入图片
  //     'table',  // 表格
  //     'video',  // 插入视频
  //     'code',  // 插入代码
  //     'undo',  // 撤销
  //     'redo'  // 重复
  // ]
  editor.config.uploadImgShowBase64 = true
  editor.create()
  }

  textAreaValue() {
    console.log('编辑器data', this.state.editorContent)
  }
  render() {
    return (
      <div className="write-article">
        <div className="text-area">
          <div
          // ref={editorElemMenu => {this.editorElemMenu = editorElemMenu}}
          ref="editorElemMenu"
          style={{backgroundColor: '#fififi', border: '1px solid #ccc'}}
          className="editorElem-menu"
          ></div>
          <div 
          style={{
          height: 'calc(100% - 70px)',
          border: '1px solid #ccc',
          borderTop: 'none'}}
          ref="editorElemBody"
          // ref={editorElemBody => {this.editorElemBody = editorElemBody}}
          className="editorElem-body"
          ></div>
        </div>
        <div onClick={this.textAreaValue}>发布</div>
      </div>
    )
  }
}
