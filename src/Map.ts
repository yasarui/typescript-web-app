import { User } from './User';

export interface Mappable {
  location: {
     lat: number,
     lng: number
  },
  markerContent():string
}

export class GoogleMap {
  private map:google.maps.Map;
  constructor(){
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
       center: {
          lat: 0,
          lng: 0
       },
       zoom: 1,
    })
  }
  addMarker(mapable: Mappable):void{
     const marker = new google.maps.Marker({
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      },
      map: this.map,
     });

     marker.addListener('click',()=>{
      const infoWindow = new google.maps.InfoWindow({content: mapable.markerContent()})
      infoWindow.open(this.map, marker)
     })
  }
}

