  function radians(degrees) {
    return degrees * Math.PI / 180;
  };

  function jarak(asli_lat,asli_lng,tujuan_lat,tujuan_lng){
    const R = 6371e3;
    const lat1rad = this.radians(asli_lat);//this.lat1.toRadians();
    const lat2rad = this.radians(tujuan_lat);//this.lat.toRadians();
    const tatac = this.radians(tujuan_lat - asli_lat);//.toRadians();
    const lontac = this.radians(tujuan_lng - asli_lng);//.toRadians();

    const a = Math.sin(tatac/2) * Math.sin(tatac/2) +
            Math.cos(lat1rad) * Math.cos(lat2rad) *
            Math.sin(lontac/2) * Math.sin(lontac/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const d = (R * c)/1000;
    return parseFloat(d.toFixed(3));//+" Km";
  }
