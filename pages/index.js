import React from 'react';
import MuseumInfo from "../components/MuseumInfo";
const rdfetch = require('@rdfjs/fetch');



const Test= props => (

    <React.Fragment>

        <p>Museaale muuseumis: {props.count}</p>
        <p>Museaale valikus: {props.choice}</p>
        <p>Museaale sündmusega: {props.countEvent}</p>

    </React.Fragment>
);




   Test.getInitialProps = async function getInitialProps (context) {

       async function getDataset(link) {
           const dataset = await rdfetch(`${link}`)
               .then(res => res.dataset())
               .catch(err => console.error(err));
           return dataset;
       }

       function isIterable(obj) {
           if (obj == null) {
               return false;
           }
           return typeof obj[Symbol.iterator] === 'function';
       }

       async function checkHigherPlace(link) {

           const dataset = getDataset(link);
           if(isIterable(dataset)) {

               for (const quad of dataset) {
                   if(quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P87_falls_within")
                   {
                       if(quad.object.value == "http://opendata.muis.ee/place/6218") {
                           return true
                       }
                       else {

                       }


               }


           }
       }



       }

       async function getPlace(link) {
           const dataset = getDataset(link);
           if(isIterable(dataset)) {
               //
               for (const quad of dataset) {
                 //check if is already
               }

               }
           }


       async function hasHigher(link) {
           const dataset = getDataset(link);
           if(isIterable(dataset)) {
                //
           for (const quad of dataset) {
               if(quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P127_has_broader_term"  ) {

                   if(quad.object.value == "http://opendata.muis.ee/thesaurus/61/11273" ) {
                       return true;
                   }
               }
       }
           }
       }


       async function isTypeEvent(link) {
           const dataset = getDataset(link);
            if(isIterable(dataset)) {
                let type = 0;
                let place = [];
                for (const quad of dataset) {
                    if(quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P2_has_type" ) {
                        if(quad.object.value == "http://opendata.muis.ee/thesaurus/61/11273" ) {
                            type = 1;
                        }
                        else {
                          let a = await hasHigher(quad.object.value);
                          if(a){
                              type = 1;
                          }
                        }
                    }
                    if(quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at" ) {
                        place.push(quad.object.value);
                    }
                }

                    if(type && place.length ) {
                        for(let x=0; x < place.length;  x++) {
                            //getPlace(place[x]);
                        }

                        return true;
                    }
            }


       }

       async function hasEvent(link) {
          const dataset = getDataset(link);
           if(isIterable(dataset)) {
           for (const quad of dataset) {
               if (quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P12_occurred_in_the_presence_of" ) {
                   { let isType = await isTypeEvent(quad.object.value);
                       if(isType) {
                           return true;
                       }

                   }

               }
           }
           }
       }




       let count = 0;
       let countEvent = 0;
       const choice = 188;
       const array = [];

       //Jääri ajaloolised 1204
       //Jääri fotod: 1252
       //Jööri ajaloolised: 1238
       //Meierei: 1210
       //Pudukogu 1198
       //Alver - ajalooline 392


        const dataset = await getDataset('https://www.muis.ee/rdf/collection/1210');
        if(isIterable(dataset)) {
            for (const quad of dataset) {
                   if(quad.predicate.value == "http://www.cidoc-crm.org/cidoc-crm/P46_is_composed_of")
                   { array.push(quad.object.value);
                       count ++
                   }
               }
           }



      for (let x = 0; x<array.length; x++) {
           { let hasEv = await hasEvent(array[x]);
               if(hasEv) {
                   countEvent++
               }
           }
       }
       return {count, choice, countEvent};
    };





export default Test
