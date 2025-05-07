import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import {
  provideHighlightOptions,
  Highlight,
  HighlightAuto,
} from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import 'highlight.js/styles/github-dark.min.css'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Highlight, HighlightAuto, HighlightLineNumbers],
  template: `
    <h1>ngx-highlightjs</h1>
      
    <pre>
      <code [highlight]="codeForHighlight"
            language="html"
            lineNumbers></code>
    </pre>
    
    <p></p>
    <pre>
      <code [highlightAuto]="codeForHighlightAuto" 
            lineNumbers></code>
    </pre>
  `,
})
export class App {
  codeForHighlight = `<!DOCTYPE html>  <html lang='en'> <head>
    <meta charset='UTF-8'> <title>Title</title>
  </head>
  <body>
  
  </body>
  </html>
  `;

  codeForHighlightAuto = `<!DOCTYPE html>  <html lang='en'> <head>
  <meta charset='UTF-8'>
  <title>Title</title>
</head>
<body>

</body>
</html> 
  `;
}

bootstrapApplication(App, {
  providers: [
    provideHighlightOptions({
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
        xml: () => import('highlight.js/lib/languages/xml') 
      }, 
    }),
  ],
});
