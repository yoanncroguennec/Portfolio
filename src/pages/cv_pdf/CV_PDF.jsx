import React, { useEffect, useRef } from 'react';
import MuiBreadCrumbs from "../../components/layouts/btns/Mui_BreadCrumbs"

export default function CV_PDF() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document: "/files/Yoann_Croguennec_CV.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return (
    <><MuiBreadCrumbs />
      <div ref={containerRef} style={{ height: "100vh" }} />;
    </>
  );
}