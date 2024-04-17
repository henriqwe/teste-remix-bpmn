// import { useEffect } from "react";
import { Suspense, lazy, useState } from "react";
const BpmnViewer = lazy(() => import("../components/bpm"));

export default function Index() {
  const [bpmn, setBpmn] = useState<File>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <input type="file" onChange={(e) => setBpmn(e.target.files?.[0])} />
      <Suspense fallback={<div>Loading...</div>}>
        <BpmnViewer diagram={bpmn} />
      </Suspense>
    </div>
  );
}
