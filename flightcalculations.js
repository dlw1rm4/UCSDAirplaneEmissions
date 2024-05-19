function getDistance(){
  start = document.getElementById("begin-flight").value;
  end = document.getElementById("end-flight").value;
  switch (start){
    case "atlanta":
      lon1 = -84.4281006;
      lat1 = 33.6366997;
      break;
    case "denver":
      lon1 = -104.6729965;
      lat1 = 39.8616982;
      break;
    case "chicago":
      lon1 = -87.9048004;
      lat1 = 41.9785996;
      break;
    case "losangeles":
      lon1 = -118.4079971;
      lat1 = 33.9425011;
      break;
    case "newyork":
      lon1 = -73.7789002;
      lat1 = 40.639801;
      break;
    case "lasvegas":
      lon1 = -115.1520004;
      lat1 = 36.080101;
      break;
    case "orlando":
      lon1 = -81.3089981;
      lat1 = 28.4293995;
      break;
    case "miami":
      lon1 = -80.2906036;
      lat1 = 25.7931995;
      break;
    case "charlotte":
      lon1 = -80.9431;
      lat1 = 35.2140007;
      break;
    case "seattle":
      lon1 = -122.3089981;
      lat1 = 47.4490013;
      break;
    case "phoenix":
      lon1 = -112.012001;
      lat1 = 33.4342995;
      break;
    case "sanfrancisco":
      lon1 = -122.375;
      lat1 = 37.6189995;
      break;
    case "houston":
      lon1 = -95.3414001;
      lat1 = 29.9843998;
      break;
    case "boston":
      lon1 = -71.0052033;
      lat1 = 42.3642998;
      break;
    case "minneapolis":
      lon1 = -93.2218018;
      lat1 = 44.882;
      break;
    case "detroit":
      lon1 = -83.3534012;
      lat1 = 42.2123985;
      break;
    case "philadelphia":
      lon1 = -75.2410965;
      lat1 = 39.8718987;
      break;
    case "saltlakecity":
      lon1 = -111.9779968;
      lat1 = 40.7883987;
      break;
    case "sandiego":
      lon1 = -117.1900024;
      lat1 = 32.7336006;
      break;
  }
    switch (end){
    case "atlanta":
      lon2 = -84.4281006;
      lat2 = 33.6366997;
      break;
    case "denver":
      lon2 = -104.6729965;
      lat2 = 39.8616982;
      break;
    case "chicago":
      lon2 = -87.9048004;
      lat2 = 41.9785996;
      break;
    case "losangeles":
      lon2 = -118.4079971;
      lat2 = 33.9425011;
      break;
    case "newyork":
      lon2 = -73.7789002;
      lat2 = 40.639801;
      break;
    case "lasvegas":
      lon2 = -115.1520004;
      lat2 = 36.080101;
      break;
    case "orlando":
      lon2 = -81.3089981;
      lat2 = 28.4293995;
      break;
    case "miami":
      lon2 = -80.2906036;
      lat2 = 25.7931995;
      break;
    case "charlotte":
      lon2 = -80.9431;
      lat2 = 35.2140007;
      break;
    case "seattle":
      lon2 = -122.3089981;
      lat2 = 47.4490013;
      break;
    case "phoenix":
      lon2 = -112.012001;
      lat2 = 33.4342995;
      break;
    case "sanfrancisco":
      lon2 = -122.375;
      lat2 = 37.6189995;
      break;
    case "houston":
      lon2 = -95.3414001;
      lat2 = 29.9843998;
      break;
    case "boston":
      lon2 = -71.0052033;
      lat2 = 42.3642998;
      break;
    case "minneapolis":
      lon2 = -93.2218018;
      lat2 = 44.882;
      break;
    case "detroit":
      lon2 = -83.3534012;
      lat2 = 42.2123985;
      break;
    case "philadelphia":
      lon2 = -75.2410965;
      lat2 = 39.8718987;
      break;
    case "saltlakecity":
      lon2 = -111.9779968;
      lat2 = 40.7883987;
      break;
    case "sandiego":
      lon2 = -117.1900024;
      lat2 = 32.7336006;
      break;
  }
 document.getElementById("result").innerHTML = 3958.8 * Math.asin(Math.sqrt((Math.sin((lat2-lat1)/2))**2 + Math.cos(lat1) * Math.cos(lat2) * (Math.sin((lon2-lon1)/2)) ** 2));
}
