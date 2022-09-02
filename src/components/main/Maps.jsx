import { YMaps, Map, Placemark } from "react-yandex-maps";

const coordinates = [51.891994, 26.859789];
const mapState = {
  center: coordinates,
  zoom: 17
};



const Maps = () => {
        return (
                <div id="main-map" className={"w-100 ymap"}>
                        <YMaps>
                                <Map 
                                        state={mapState}
                                        width="100%"
                                        height="100%"
                                        instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                                        
                                >
                                        <Placemark 
                                                geometry={coordinates}
                                                options={{
                                                        preset: 'islands#icon',
                                                        iconColor: '#ea4335'
                                                }} 
                                        />
                                </Map>
                        </YMaps>
                </div>
        )
}

export {Maps}