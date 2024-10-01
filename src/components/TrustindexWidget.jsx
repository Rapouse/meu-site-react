import React, { useEffect } from 'react';

const TrustindexWidget = () => {
  useEffect(() => {
    // Adiciona o script Trustindex diretamente no local correto
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?6eb966414b95119f01663452ae9';
    script.async = true;

    const widgetDiv = document.querySelector('.ti-widget');
    widgetDiv.appendChild(script);

    // Remove o script ao desmontar o componente
    return () => {
      if (widgetDiv) {
        widgetDiv.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ti-widget" data-widget-id="6eb966414b95119f01663452ae9"></div>
  );
};

export default TrustindexWidget;
