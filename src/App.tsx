import React, { Profiler, useState } from "react";

import { Button } from "@mui/material";

import AsyncAwait from "./demos/AsyncAwait";
import DynamicForm from "./demos/DynamicForm";
import Focus17DynamicForm from "./demos/Focus17DynamicForm";
import FocusDynamicForm from "./demos/FocusDynamicForm";

import "./App.css";

function App() {
  const [view, setView] = useState<number>(0);
  function onRenderCallback(
    id: string, // the "id" prop of the Profiler tree that has just committed
    phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: number, // time spent rendering the committed update
    baseDuration: number, // estimated time to render the entire subtree without memoization
    startTime: number, // when React began rendering this update
    commitTime: number, // when React committed this update
    interactions: any // the Set of interactions belonging to this update
  ) {
    // console.log('==========>phase', phase);
    // console.log('==========>actualDuration', actualDuration);
    // console.log('==========>baseDuration', baseDuration);
    // console.log('==========>startTime', startTime);
    // console.log('==========>commitTime', commitTime);
  }
  return (
    <Profiler id="app" onRender={onRenderCallback} >
      {/*<div className="App">*/}
        <Button variant={view === 0 ? "contained" : 'outlined'} onClick={() => setView(0)}>Без фокуса</Button>
        <Button variant={view === 1 ? "contained" : 'outlined'} onClick={() => setView(1)}>С фокусом как в 17 реакте</Button>
        <Button variant={view === 2 ? "contained" : 'outlined'} onClick={() => setView(2)}>С фокусом с flushSync</Button>
        {view === 0 && <DynamicForm />}
        {view === 1 && <Focus17DynamicForm />}
        {view === 2 && <FocusDynamicForm />}
      {/*</div>*/}
      {/*<AsyncAwait />*/}
    </Profiler>
  );
}

export default App;
