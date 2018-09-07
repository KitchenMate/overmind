const javascript = {
  react: [
    {
      fileName: 'Posts.js',
      target: 'jsx',
      code: `
import React from 'react'
import app from './app'

class Posts extends React.Component {
  render() {
    const { app } = this.props

    if (app.state.isLoadingPosts) {
      return <h4>Loading posts...</h4>
    }
  
    return <div />
  }
}

export default app.connect(Posts)
    `,
    },
  ],
  vue: [
    {
      fileName: 'Posts.vue (template)',
      target: 'markup',
      code: `
<h4 v-if="app.state.isLoadingPosts">
  Loading posts...
</h4>
<div v-else></div>
    `,
    },
    {
      fileName: 'Posts.vue (script)',
      code: `
import app from './app'

export default app.connect({})
  `,
    },
  ],
}

const typescript = {
  react: [
    {
      fileName: 'components/Posts.tsx',
      code: `
import * as React from 'react'
import app, { Connect } from './app'

class Posts extends React.Component<Connect> {
  render() {
    const { app } = this.props

    if (app.state.isLoadingPosts) {
      return <h4>Loading posts...</h4>
    }
  
    return <div />
  }
}

export default app.connect(Posts)
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'posts.component.ts',
      code: `
import { Component } from '@angular/core';
import app from '../app'

@Component({
  selector: 'posts-list',
  template: \`
  <h4 *ngIf="app.state.isLoadingPosts">
    Loading posts...
  </h4>
  <div *ngIf="!app.state.isLoadingPosts"></div>
  \`
})
@app.connect()
export class PostsList {}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
