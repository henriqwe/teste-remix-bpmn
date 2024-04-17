import BpmnViewer from "bpmn-js/lib/Modeler";
import { useEffect } from "react";

export default function BpmnEditor({
  diagram,
}: {
  diagram?: File | undefined;
}) {
  async function init(viewer: BpmnViewer) {
    if (!diagram) {
      return;
    }

    try {
      const bpmnText = await diagram.text();
      viewer.importXML(bpmnText).then(() => {
        const canvas = viewer.get("canvas") as any;
        canvas.zoom("fit-viewport");
      });
    } catch (err) {
      console.log("error rendering bpmn", err);
    }
  }

  useEffect(() => {
    console.log({ diagram }, "CHAMOU");
    const viewer = new BpmnViewer({
      container: "#bpmnContainer",
      width: "100%",
      height: "100%",
      keyboard: {
        bindTo: window,
      },
    });

    init(viewer);

    return () => {
      viewer.destroy();
    };
  }, [diagram]);

  return <div id="bpmnContainer" style={{ height: 700 }}></div>;
}
