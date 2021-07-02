# `codemirror-plugin-analytics`

Plugin for the [CodeMirror Analytics project](https://codemirror-analytics-backend.epiccodewizard.repl.co/) in the ReplIt Summer Kickoff Hacker Royale Hackathon.

## Usage

Just import it. For support for theme and mode analytics, run the following (`editor` being the CodeMirror instance):

```js
editor.on(
  'optionChange',
  CodemirrorAnalyticsHooks('YOUR_UUID_PROVIDED_ON_DASHBOARD').optionChange
);
```
