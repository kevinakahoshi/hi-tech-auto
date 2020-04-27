import React, {
  createRef,
  useState,
  useEffect
} from 'react';

const LocationMap = () => {
  const mapRef = createRef(null);
  const [mapHeight, setMapHeight] = useState(null);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 979) {
      if (mapRef.current) {
        setMapHeight(mapRef.current.clientWidth);
      }
    } else {
      setMapHeight('100%')
    }
  });

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = true;
    } else {
      if (window.innerWidth < 979) {
        setMapHeight(mapRef.current.clientWidth);
      } else {
        setMapHeight('100%');
      }
    }
  }, [mapRef]);

  return (
    <iframe
      title="View on Map | Hi-Tech Auto"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1980050901598!2d-118.05092274898144!3d34.09006768050039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41acb2796c2e2b2b!2sHi-Tech%20Auto!5e0!3m2!1sen!2sus!4v1587430208826!5m2!1sen!2sus"
      frameBorder="0"
      className="w-100 border rounded"
      allowFullScreen=""
      ref={mapRef}
      height={mapHeight}
      aria-hidden="false" />
  )
}

export default LocationMap;
