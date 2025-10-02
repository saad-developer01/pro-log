import React from "react";

const Maps = () => {
  const mapRef = React.useRef(null);
  const [fallbackEmbed, setFallbackEmbed] = React.useState(false);
  const lat = 40.748817;
  const lng = -73.985428;
  React.useEffect(() => {
    const initMap = () => {
      const google = window.google;
      const mapEl = mapRef.current;
      if (!google || !google.maps || !mapEl) return;
      const myLatlng = new google.maps.LatLng(lat, lng);
      const mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        zoomControl: true,
        styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: "#ff0000" },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }],
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }],
        },
        ],
      };
      const map = new google.maps.Map(mapEl, mapOptions);
      const marker = new google.maps.Marker({
        position: myLatlng,
        map,
        animation: google.maps.Animation.DROP,
        title: "Material Dashboard React!",
      });
      const contentString =
        '<div class="info-window-content"><h2>Material Dashboard React</h2>' +
        "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";
      const infowindow = new google.maps.InfoWindow({ content: contentString });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    };

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";
    if (!apiKey) {
      setFallbackEmbed(true);
      return;
    }

    if (window.google && window.google.maps) {
      initMap();
    } else {
      const existing = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (existing) {
        existing.addEventListener("load", initMap);
        existing.addEventListener("error", () => setFallbackEmbed(true));
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js${apiKey ? `?key=${apiKey}` : ""}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        script.onerror = () => {
          // eslint-disable-next-line no-console
          console.error("Failed to load Google Maps script. Falling back to embed.");
          setFallbackEmbed(true);
        };
        document.body.appendChild(script);
      }
    }

    return () => {
      // no explicit cleanup required for google maps instance here
    };
  }, []);
  return (
    <>
      {fallbackEmbed ? (
        <iframe
          title="Map"
          width="100%"
          height="100%"
          style={{ border: 0, height: `100vh`, width: `100%` }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`}
        />
      ) : (
        <div style={{ height: `100vh`, width: `100%` }} ref={mapRef}></div>
      )}
    </>
  );
};

export default Maps;
